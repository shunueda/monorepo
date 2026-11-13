import { DnsRecord } from "@ueda/cdktf-providers/cloudflare/dns-record";
import { Ruleset } from "@ueda/cdktf-providers/cloudflare/ruleset";
import { Zone } from "@ueda/cdktf-providers/cloudflare/zone";
import type { TerraformStack } from "cdktf";
import { mustEnv } from "./helpers.ts";

export type Domain = Readonly<{
  id: string;
  domain: string;
  zone: Zone;
}>;

export function createDomain(
  stack: TerraformStack,
  accountId: string,
  domain: string,
): Domain {
  const id = domain.replaceAll(".", "-");

  const zone = new Zone(stack, `${id}-zone`, {
    account: {
      id: accountId,
    },
    name: domain,
    type: "full",
  });

  new DnsRecord(stack, `${id}-keyoxide-txt`, {
    name: "@",
    ttl: 1,
    type: "TXT",
    zoneId: zone.id,
    content: `openpgp4fpr:${mustEnv("GPG_FINGERPRINT")}`,
  });

  return { id, domain, zone } as const;
}

export function fastmail(stack: TerraformStack, { id, domain, zone }: Domain) {
  new DnsRecord(stack, `${id}-fastmail-mx-1`, {
    name: "@",
    ttl: 1,
    type: "MX",
    zoneId: zone.id,
    content: "in1-smtp.messagingengine.com",
    priority: 10,
  });

  new DnsRecord(stack, `${id}-fastmail-mx-2`, {
    name: "@",
    ttl: 1,
    type: "MX",
    zoneId: zone.id,
    content: "in2-smtp.messagingengine.com",
    priority: 20,
  });

  new DnsRecord(stack, `${id}-fastmail-dkim-1`, {
    name: "fm1._domainkey",
    ttl: 1,
    type: "CNAME",
    zoneId: zone.id,
    content: `fm1.${domain}.dkim.fmhosted.com`,
    proxied: false,
  });

  new DnsRecord(stack, `${id}-fastmail-dkim-2`, {
    name: "fm2._domainkey",
    ttl: 1,
    type: "CNAME",
    zoneId: zone.id,
    content: `fm2.${domain}.dkim.fmhosted.com`,
    proxied: false,
  });

  new DnsRecord(stack, `${id}-fastmail-dkim-3`, {
    name: "fm3._domainkey",
    ttl: 1,
    type: "CNAME",
    zoneId: zone.id,
    content: `fm3.${domain}.dkim.fmhosted.com`,
    proxied: false,
  });

  new DnsRecord(stack, `${id}-fastmail-spf`, {
    name: "@",
    ttl: 1,
    type: "TXT",
    zoneId: zone.id,
    content: `"v=spf1 include:spf.messagingengine.com -all"`,
  });

  new DnsRecord(stack, `${id}-fastmail-dmarc`, {
    name: "_dmarc",
    ttl: 1,
    type: "TXT",
    zoneId: zone.id,
    content: "v=DMARC1; p=reject; rua=mailto:me@shunueda.org;",
  });
}

export function sourcehutPages(
  stack: TerraformStack,
  { id, domain, zone }: Domain,
) {
  new DnsRecord(stack, `${id}-srht-a`, {
    name: domain,
    ttl: 1, // automatic
    type: "A",
    zoneId: zone.id,
    content: "46.23.81.157",
  });

  new DnsRecord(stack, `${id}-srht-aaaa`, {
    name: domain,
    ttl: 1, // automatic
    type: "AAAA",
    zoneId: zone.id,
    content: "2a03:6000:1813:1337::157",
  });
}

export function redirect(
  stack: TerraformStack,
  source: Domain,
  destination: Domain,
) {
  new DnsRecord(stack, `${source.id}-a`, {
    zoneId: source.zone.id,
    name: "@",
    type: "A",
    ttl: 1,
    content: "192.0.2.1", // dummy IP, traffic never reaches it since it's proxied
    proxied: true,
  });

  new Ruleset(stack, `${source.id}-redirect-ruleset`, {
    zoneId: source.zone.id,
    name: "redirects",
    kind: "zone",
    phase: "http_request_dynamic_redirect",
    rules: [
      {
        description: `Redirect ${source.domain} to ${destination.domain}`,
        expression: "true",
        action: "redirect",
        actionParameters: {
          fromValue: {
            statusCode: 301,
            targetUrl: {
              value: `https://${destination.domain}`,
            },
          },
        },
      },
    ],
  });
}
