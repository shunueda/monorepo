import { DataCloudflareRegistrarDomain } from "@ueda/cdktf-providers/cloudflare/data-cloudflare-registrar-domain";
import { DnsRecord } from "@ueda/cdktf-providers/cloudflare/dns-record";
import { RegistrarDomain } from "@ueda/cdktf-providers/cloudflare/registrar-domain";
import { Ruleset } from "@ueda/cdktf-providers/cloudflare/ruleset";
import { Zone } from "@ueda/cdktf-providers/cloudflare/zone";
import type { TerraformStack } from "cdktf";

export type Domain = Readonly<{
  id: string;
  domain: RegistrarDomain | DataCloudflareRegistrarDomain;
  zone: Zone;
}>;

export function createDomain(
  stack: TerraformStack,
  accountId: string,
  domainName: string,
  isData: boolean = false,
): Domain {
  const id = domainName.replaceAll(".", "-");
  const domain = isData
    ? new DataCloudflareRegistrarDomain(stack, `${id}-registrar-domain`, {
        accountId,
        domainName,
      })
    : new RegistrarDomain(stack, `${id}-registrar-domain`, {
        accountId,
        domainName,
        privacy: true,
        autoRenew: true,
        locked: true,
      });
  return {
    id,
    domain,
    zone: new Zone(stack, `${id}-zone`, {
      account: {
        id: accountId,
      },
      name: domain.domainName,
      type: "full",
    }),
  } as const;
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
    content: `fm1.${domain.domainName}.dkim.fmhosted.com`,
    proxied: false,
  });

  new DnsRecord(stack, `${id}-fastmail-dkim-2`, {
    name: "fm2._domainkey",
    ttl: 1,
    type: "CNAME",
    zoneId: zone.id,
    content: `fm2.${domain.domainName}.dkim.fmhosted.com`,
    proxied: false,
  });

  new DnsRecord(stack, `${id}-fastmail-dkim-3`, {
    name: "fm3._domainkey",
    ttl: 1,
    type: "CNAME",
    zoneId: zone.id,
    content: `fm3.${domain.domainName}.dkim.fmhosted.com`,
    proxied: false,
  });

  new DnsRecord(stack, `${id}-fastmail-spf`, {
    name: "@",
    ttl: 1,
    type: "TXT",
    zoneId: zone.id,
    content: `"v=spf1 include:spf.messagingengine.com ?all"`,
  });
}

export function sourcehutPages(
  stack: TerraformStack,
  { id, domain, zone }: Domain,
) {
  new DnsRecord(stack, `${id}-srht-a`, {
    name: domain.domainName,
    ttl: 1, // automatic
    type: "A",
    zoneId: zone.id,
    content: "46.23.81.157",
  });

  new DnsRecord(stack, `${id}-srht-aaaa`, {
    name: domain.domainName,
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
        description: `Redirect ${source.domain.domainName} to ${destination.domain.domainName}`,
        expression: "true",
        action: "redirect",
        actionParameters: {
          fromValue: {
            statusCode: 301,
            targetUrl: {
              value: `https://${destination.domain.domainName}`,
            },
          },
        },
      },
    ],
  });
}
