#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { CloudflareProvider } from "@ueda/cdktf-providers/cloudflare/provider";

function synth() {
  const app = new App();

  new CloudBackend(app, {
    hostname: "app.terraform.io",
    organization: "ueda",
    workspaces: new NamedCloudWorkspace("monorepo"),
  });

  new CloudflareProvider(app, "cloudflare-provider");

  app.synth();
}

synth();
