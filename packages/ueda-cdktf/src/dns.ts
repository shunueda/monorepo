import type { DataCloudflareRegistrarDomain } from "@ueda/cdktf-providers/cloudflare/data-cloudflare-registrar-domain";
import { DnsRecord } from "@ueda/cdktf-providers/cloudflare/dns-record";
import type { RegistrarDomain } from "@ueda/cdktf-providers/cloudflare/registrar-domain";
import { Zone } from "@ueda/cdktf-providers/cloudflare/zone";
import type { TerraformStack } from "cdktf";

export function fastmail(
  stack: TerraformStack,
  id: string,
  zone: Zone,
  domain: RegistrarDomain | DataCloudflareRegistrarDomain,
) {
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
