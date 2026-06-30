#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { CloudflareProvider } from "@ueda/cdktf-providers/cloudflare/provider";
import { RegistrarDomain } from "@ueda/cdktf-providers/cloudflare/registrar-domain";
import { DnsRecord } from "@ueda/cdktf-providers/cloudflare/dns-record";
import { Zone } from "@ueda/cdktf-providers/cloudflare/zone";
import { DataCloudflareRegistrarDomain } from "@ueda/cdktf-providers/cloudflare/data-cloudflare-registrar-domain";
import { fastmail } from "./dns.ts";
import { Ruleset } from "@ueda/cdktf-providers/cloudflare/ruleset";
import { DataSourcehutRepository } from "@ueda/cdktf-providers/sourcehut/data-sourcehut-repository";
import { dataGithubOrganizationRepositoryRolesRolesToTerraform } from "@ueda/cdktf-providers/github/data-github-organization-repository-roles";
import {
  Repository,
  RepositorySecurityAndAnalysisAdvancedSecurityOutputReference,
} from "@ueda/cdktf-providers/github/repository";
import { SourcehutProvider } from "@ueda/cdktf-providers/sourcehut/provider";
import { GithubProvider } from "@ueda/cdktf-providers/github/provider";
import { RepositoryDeployKey } from "@ueda/cdktf-providers/github/repository-deploy-key";
import { R2Bucket } from "@ueda/cdktf-providers/cloudflare/r2-bucket";
import { R2CustomDomain } from "@ueda/cdktf-providers/cloudflare/r2-custom-domain";
import { env } from "node:process";
import { ok } from "node:assert";
import { ActionsSecret } from "@ueda/cdktf-providers/github/actions-secret";
import { ActionsVariable } from "@ueda/cdktf-providers/github/actions-variable";

function mustEnv(name: string) {
  const val = env[name];
  ok(val, `Missing envvar: ${name}`);
  return val;
}

function synth() {
  const app = new App();

  const stack = new TerraformStack(app, "master");

  new CloudBackend(stack, {
    hostname: "app.terraform.io",
    organization: "ueda",
    workspaces: new NamedCloudWorkspace("monorepo"),
  });

  new CloudflareProvider(stack, "cloudflare-provider");

  new SourcehutProvider(stack, "sourcehut-provider");

  new GithubProvider(stack, "github-provider");

  const cfAccountId = "ca4a67796dcce729524c78e24c66d10d";

  const shunuedaOrgDomain = new RegistrarDomain(
    stack,
    "shunueda-org-registrar-domain",
    {
      accountId: cfAccountId,
      domainName: "shunueda.org",
      privacy: true,
      autoRenew: true,
      locked: true,
    },
  );

  // Hosted on Namecheap
  const shuNuOrgDomain = new DataCloudflareRegistrarDomain(
    stack,
    "shu-nu-registrar-domain",
    {
      accountId: cfAccountId,
      domainName: "shu.nu",
    },
  );

  const shunuedaOrgZone = new Zone(stack, "shunueda-org-zone", {
    account: {
      id: cfAccountId,
    },
    name: shunuedaOrgDomain.domainName,
    type: "full",
  });

  const shuNuZone = new Zone(stack, "shu-nu-zone", {
    account: {
      id: cfAccountId,
    },
    name: shuNuOrgDomain.domainName,
    type: "full",
  });

  new DnsRecord(stack, "shunueda-org-srht-a", {
    name: shunuedaOrgDomain.domainName,
    ttl: 1, // automatic
    type: "A",
    zoneId: shunuedaOrgZone.id,
    content: "46.23.81.157",
  });

  new DnsRecord(stack, "shunueda-org-srht-aaaa", {
    name: shunuedaOrgDomain.domainName,
    ttl: 1, // automatic
    type: "AAAA",
    zoneId: shunuedaOrgZone.id,
    content: "2a03:6000:1813:1337::157",
  });

  fastmail(stack, "shunueda-org", shunuedaOrgZone, shunuedaOrgDomain);
  fastmail(stack, "shu-nu", shuNuZone, shuNuOrgDomain);

  new DnsRecord(stack, "shu-nu-a", {
    zoneId: shuNuZone.id,
    name: "@",
    type: "A",
    ttl: 1,
    content: "192.0.2.1", // dummy IP, traffic never reaches it since it's proxied
    proxied: true,
  });

  new Ruleset(stack, "shu-nu-redirect", {
    zoneId: shuNuZone.id,
    name: "redirects",
    kind: "zone",
    phase: "http_request_dynamic_redirect",
    rules: [
      {
        description: `Redirect ${shuNuOrgDomain.domainName} to ${shunuedaOrgDomain.domainName}`,
        expression: "true",
        action: "redirect",
        actionParameters: {
          fromValue: {
            statusCode: 301,
            targetUrl: {
              value: `https://${shunuedaOrgDomain.domainName}`,
            },
          },
        },
      },
    ],
  });

  const nixCacheBucket = new R2Bucket(stack, "nix-cache-r2-bucket", {
    accountId: cfAccountId,
    name: "nix-cache",
    location: "enam",
  });

  new R2CustomDomain(stack, "nix-cache-r2-custom-domain", {
    accountId: cfAccountId,
    bucketName: nixCacheBucket.name,
    domain: `nix-cache.${shunuedaOrgDomain.domainName}`,
    enabled: true,
    zoneId: shunuedaOrgZone.id,
  });

  const name = "monorepo";

  const githubRepo = new Repository(stack, `${name}-github-repo`, {
    name,
    description: `Read-only mirror of: https://git.sr.ht/~ueda/${name}`,
  });

  const secrets = [
    "NIX_CACHE_SIGNING_KEY",
    "CLOUDFLARE_ACCESS_KEY_ID",
    "CLOUDFLARE_SECRET_ACCESS_KEY",
    "SRHT_TOKEN",
  ] as const;

  for (const secret of secrets) {
    new ActionsSecret(
      stack,
      `${name}-${secret.toLowerCase().replaceAll("_", "-")}-action-secret`,
      {
        repository: githubRepo.name,
        secretName: secret,
        value: mustEnv(secret),
      },
    );
  }

  new ActionsVariable(stack, `${name}-nix-cache-public-key`, {
    repository: githubRepo.name,
    variableName: "NIX_CACHE_PUBLIC_KEY",
    // TODO: sync with machine config
    value: "ueda-1:xcYAg6UiIbY9K4HF7rHiPeukhgfxW4dOdNHn/1Jd6p0=",
  });

  new ActionsVariable(stack, `${name}-nix-cache-substituter`, {
    repository: githubRepo.name,
    variableName: "NIX_CACHE_SUBSTITUTER",
    value: `s3://${nixCacheBucket.name}?endpoint=${cfAccountId}.r2.cloudflarestorage.com&compression=zstd`,
  });

  app.synth();
}

synth();
