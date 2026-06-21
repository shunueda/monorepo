#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { CloudflareProvider } from "@ueda/cdktf-providers/cloudflare/provider";
import { RegistrarDomain } from "@ueda/cdktf-providers/cloudflare/registrar-domain";
import { DnsRecord } from "@ueda/cdktf-providers/cloudflare/dns-record";
import { Zone } from "@ueda/cdktf-providers/cloudflare/zone";

function synth() {
  const app = new App();

  new CloudBackend(app, {
    hostname: "app.terraform.io",
    organization: "ueda",
    workspaces: new NamedCloudWorkspace("monorepo"),
  });

  const stack = new TerraformStack(app, "master");

  new CloudflareProvider(stack, "cloudflare-provider");

  const cfAccountId = "ca4a67796dcce729524c78e24c66d10d";

  const shunuedaOrgDomain = new RegistrarDomain(stack, "shunueda-org-registrar-domain", {
    accountId: cfAccountId,
    domainName: "shunueda.org",
  });

  const shunuedaOrgZone = new Zone(stack, "shunueda-org-zone", {
    account: {
      id: cfAccountId,
    },
    name: shunuedaOrgDomain.domainName,
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

  app.synth();
}

synth();
