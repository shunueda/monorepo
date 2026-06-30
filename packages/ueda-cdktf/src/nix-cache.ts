import { R2Bucket } from "@ueda/cdktf-providers/cloudflare/r2-bucket";
import { R2CustomDomain } from "@ueda/cdktf-providers/cloudflare/r2-custom-domain";
import type { TerraformStack } from "cdktf";
import type { Domain } from "./dns.ts";

export function createNixCache(
  stack: TerraformStack,
  accountId: string,
  { domain, zone }: Domain,
) {
  const bucket = new R2Bucket(stack, "nix-cache-r2-bucket", {
    accountId,
    name: "nix-cache",
    location: "enam",
  });

  return {
    bucket,
    domain: new R2CustomDomain(stack, "nix-cache-r2-custom-domain", {
      accountId,
      bucketName: bucket.name,
      domain: `nix-cache.${domain.domainName}`,
      enabled: true,
      zoneId: zone.id,
    }),
  } as const;
}
