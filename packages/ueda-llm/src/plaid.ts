import { tool } from "ai";
import { z } from "zod";
import spec from "../gen/plaid-openapi.json" with { type: "json" };
import { EOL } from "node:os";

export type SavedAccount = Readonly<{
  name: string;
  token: string;
}>;

export type PlaidConnection = Readonly<{
  baseUrl: string;
  clientId: string;
  secret: string;
  tokens: SavedAccount[];
}>;

export function createPlaidTools({
  baseUrl,
  clientId,
  secret,
  tokens,
}: PlaidConnection) {
  const version = spec.info.version.split("_").at(0);

  const endpoints = Object.entries(spec.paths).flatMap(([path, item]) =>
    "x-hidden-from-docs" in item
      ? []
      : Object.entries(item).flatMap(([method, op]) => {
          return [{ path, method, summary: op.summary }];
        }),
  );

  const summary = endpoints
    .map(({ method, path, summary }) => `${method} ${path} — ${summary}`)
    .join(EOL);

  const headers = new Headers({
    "Content-Type": "application/json",
    "Plaid-Version": version,
    "Plaid-Client-Id": clientId,
    "Plaid-Secret": secret,
  });

  return {
    call_plaid: tool({
      description: `
        Call the Plaid API. Pick the path from this list:

        ${summary}

        Body is Plaid request fields WITHOUT credentials: they are injected automatically.
      `,
      inputSchema: z.object({
        path: z
          .string()
          .describe("Exact path from the list above, e.g. /transactions/get"),
        account: z.enum(tokens.map(({ name }) => name)),
        body: z
          .record(z.string(), z.unknown())
          .describe('Request fields, e.g. {"start_date":"2026-09-10"}'),
      }),
      execute: async ({ path, account, body }) => {
        const endpoint = endpoints.find((e) => e.path === path);
        if (!endpoint) {
          return `Unknown path "${path}". Pick one from the list in this tool's description.`;
        }
        const token = tokens.find(({ name }) => name === account)?.token;
        if (!token) {
          return `Unknown account "${account}".`;
        }
        const url = new URL(path, baseUrl);
        const res = await fetch(url, {
          method: endpoint.method,
          headers,
          body: JSON.stringify({
            access_token: token,
            ...body,
          }),
        });
        return res.text();
      },
    }),
  };
}
