#!/usr/bin/env node --enable-source-maps
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { runAgentTUI } from "@ai-sdk/tui";
import { ToolLoopAgent } from "ai";
import { createMiscTools } from "./misc.ts";
import { createPlaidTools } from "./plaid.ts";
import { exit } from "node:process";
import { log } from "node:console";
import { mustEnv } from './helpers.ts'
import { link } from "node:fs";

async function main() {
  const openrouter = createOpenRouter();

  const agent = new ToolLoopAgent({
  model: openrouter.chat("deepseek/deepseek-v4.1-flash"),
  instructions: "Answer the user's question using the available tools.",
  tools: {
    ...createPlaidTools({
      baseUrl: "https://production.plaid.com",
      clientId: mustEnv("PLAID_CLIENT_ID"),
      secret: mustEnv("PLAID_CLIENT_SECRET"),
      tokens: JSON.parse(mustEnv("PLAID_TOKENS")),
    }),
    ...createMiscTools(),
    web_search: openrouter.tools.webSearch({ maxResults: 5 }),
  },
});

await runAgentTUI({ title: "ueda-finance", agent });
}

if (import.meta.main) {
  await main()
}
