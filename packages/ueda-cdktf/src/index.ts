#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { CloudflareProvider } from "@ueda/cdktf-providers/cloudflare/provider";
import { createDomain, fastmail, redirect, sourcehutPages } from "./dns.ts";
import { SourcehutProvider } from "@ueda/cdktf-providers/sourcehut/provider";
import { GithubProvider } from "@ueda/cdktf-providers/github/provider";
import { createGitHubRepo } from "./github.ts";
import { arrayToObject, mustEnv } from "./helpers.ts";
import { R2Bucket } from "@ueda/cdktf-providers/cloudflare/r2-bucket";
import { R2CustomDomain } from "@ueda/cdktf-providers/cloudflare/r2-custom-domain";
import { UserSshKey } from "@ueda/cdktf-providers/github/user-ssh-key";
import { UserPgpKey } from "@ueda/cdktf-providers/sourcehut/user-pgp-key";
import { UserGpgKey } from "@ueda/cdktf-providers/github/user-gpg-key";

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

  const cloudflareAccountId = "ca4a67796dcce729524c78e24c66d10d" as const;

  const domains = {
    shunueda_org: createDomain(stack, cloudflareAccountId, "shunueda.org"),
    shu_nu: createDomain(stack, cloudflareAccountId, "shu.nu", true),
  } as const;

  fastmail(stack, domains.shunueda_org);
  fastmail(stack, domains.shu_nu);

  sourcehutPages(stack, domains.shunueda_org);

  redirect(stack, domains.shu_nu, domains.shunueda_org);

  const nixCacheBucket = new R2Bucket(stack, "nix-cache-r2-bucket", {
    accountId: cloudflareAccountId,
    name: "nix-cache",
    location: "enam",
  });

  new R2CustomDomain(stack, "nix-cache-r2-custom-domain", {
    accountId: cloudflareAccountId,
    bucketName: nixCacheBucket.name,
    domain: `nix-cache.${domains.shunueda_org.domain.domainName}`,
    enabled: true,
    zoneId: domains.shunueda_org.zone.id,
  });

  createGitHubRepo(
    stack,
    { name: "monorepo" },
    {
      actions: {
        variables: {
          NIX_CACHE_PUBLIC_KEY: mustEnv("NIX_CACHE_PUBLIC_KEY"),
          NIX_CACHE_SUBSTITUTER: `s3://${nixCacheBucket.name}?endpoint=${cloudflareAccountId}.r2.cloudflarestorage.com&compression=zstd`,
        },
        secrets: arrayToObject(
          [
            "NIX_CACHE_SIGNING_KEY",
            "CLOUDFLARE_ACCESS_KEY_ID",
            "CLOUDFLARE_SECRET_ACCESS_KEY",
            "SRHT_TOKEN",
          ],
          mustEnv,
        ),
      },
      createsSourcehutMirror: true,
    },
  );

  createGitHubRepo(
    stack,
    { name: "password-store", visibility: "private" },
    {
      createsSourcehutMirror: true,
      deployKeys: {
        passforios: {
          key: "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAICGOl+7p0ZoMIw59bvaB7t11afM5epaUpbU10X5MMLc7",
          readOnly: false,
        },
      },
    },
  );

  new UserSshKey(stack, "yubikey-github-user-ssh-key", {
    title: "yubikey",
    key: mustEnv("SSH_PUBLIC_KEY"),
  });

  new UserGpgKey(stack, "github-user-gpg-key", {
    armoredPublicKey: mustEnv("GPG_PUBLIC_KEY"),
  });

  app.synth();
}

synth();
