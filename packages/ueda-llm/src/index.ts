#!/usr/bin/env node --enable-source-maps
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { runAgentTUI } from "@ai-sdk/tui";
import { ToolLoopAgent } from "ai";
import { parseArgs } from "node:util";
import { createMiscTools } from "./misc.ts";
import { createPlaidTools } from "./plaid.ts";
import { startMcp } from "./mcp.ts";
import { mustEnv } from "./helpers.ts";
import { exit } from "node:process";

async function startTui(): Promise<void> {
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

async function main(): Promise<void> {
  const { positionals } = parseArgs({
    allowPositionals: true,
    strict: true,
  });
  const [command] = positionals;

  switch (command) {
    case "tui":
      await startTui();
      break;
    case "mcp":
      await startMcp();
      break;
    default:
      console.error("Usage: node src/index.ts [tui|mcp]");
      exit(1);
  }
}

if (import.meta.main) {
  await main();
}
