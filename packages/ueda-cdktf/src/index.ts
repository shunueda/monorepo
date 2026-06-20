#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import {} from "@ueda/cdktf-providers"

function synth() {
  const app = new App();

   new CloudBackend(app, {
      hostname: "app.terraform.io",
      organization: "ueda",
      workspaces: new NamedCloudWorkspace("monorepo"),
   })

      new Cloudflar(app, "cloudflare-provider");

  app.synth();
}

synth();
