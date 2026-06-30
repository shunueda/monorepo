#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { CloudflareProvider } from "@ueda/cdktf-providers/cloudflare/provider";
import { createDomain, fastmail, redirect, sourcehutPages } from "./dns.ts";
import { SourcehutProvider } from "@ueda/cdktf-providers/sourcehut/provider";
import { GithubProvider } from "@ueda/cdktf-providers/github/provider";
import { createNixCache } from "./nix-cache.ts";
import { createGitHubRepo } from "./github.ts";
import { arrayToObject, mustEnv } from "./helpers.ts";

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

  const nixCache = createNixCache(
    stack,
    cloudflareAccountId,
    domains.shunueda_org,
  );

  createGitHubRepo(stack, "monorepo", {
    actions: {
      variables: {
        NIX_CACHE_PUBLIC_KEY: mustEnv("NIX_CACHE_PUBLIC_KEY"),
        NIX_CACHE_SUBSTITUTER: `s3://${nixCache.bucket.name}?endpoint=${cloudflareAccountId}.r2.cloudflarestorage.com&compression=zstd`,
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
  });

  app.synth();
}

synth();
