#!/usr/bin/env node --enable-source-maps
import { App, CloudBackend, NamedCloudWorkspace, TerraformStack } from "cdktf";
import { CloudflareProvider } from "@ueda/cdktf-providers/cloudflare/provider";
import { RegistrarDomain } from "@ueda/cdktf-providers/cloudflare/registrar-domain";
import { DnsRecord } from "@ueda/cdktf-providers/cloudflare/dns-record";
import { Zone } from "@ueda/cdktf-providers/cloudflare/zone";
import { DataCloudflareRegistrarDomain } from "@ueda/cdktf-providers/cloudflare/data-cloudflare-registrar-domain";
import { fastmail } from "./fastmail.ts";
import { Ruleset } from "@ueda/cdktf-providers/cloudflare/ruleset";

function synth() {
  const app = new App();

  const stack = new TerraformStack(app, "master");

  new CloudBackend(stack, {
    hostname: "app.terraform.io",
    organization: "ueda",
    workspaces: new NamedCloudWorkspace("monorepo"),
  });

  new CloudflareProvider(stack, "cloudflare-provider");

  const cfAccountId = "ca4a67796dcce729524c78e24c66d10d";

  const shunuedaOrgDomain = new RegistrarDomain(stack, "shunueda-org-registrar-domain", {
    accountId: cfAccountId,
    domainName: "shunueda.org",
    privacy: true,
    autoRenew: true,
    locked: true,
  });

  // Hosted on Namecheap
  const shuNuOrgDomain = new DataCloudflareRegistrarDomain(stack, "shu-nu-registrar-domain", {
    accountId: cfAccountId,
    domainName: "shu.nu",
  });

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

  app.synth();
}

synth();
