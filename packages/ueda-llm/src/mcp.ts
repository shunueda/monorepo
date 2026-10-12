import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { Tool } from "ai";
import type { ZodTypeAny } from "zod";
import { createMiscTools } from "./misc.ts";
import { createPlaidTools } from "./plaid.ts";
import { mustEnv } from "./helpers.ts";

function registerAiTool(server: McpServer, name: string, aiTool: Tool): void {
  const execute = aiTool.execute;
  if (typeof execute !== "function") {
    throw new Error(
      `Tool "${name}" has no execute function, cannot expose over MCP.`,
    );
  }
  server.registerTool(
    name,
    {
      ...(typeof aiTool.description === "string"
        ? { description: aiTool.description }
        : {}),
      ...(aiTool.inputSchema
        ? { inputSchema: aiTool.inputSchema as unknown as ZodTypeAny }
        : {}),
    },
    async (args, extra) => {
      const output = await execute(args, {
        toolCallId: `mcp-${name}`,
        messages: [],
        abortSignal: extra.signal,
        context: undefined,
      });
      return {
        content: [
          {
            type: "text" as const,
            text: typeof output === "string" ? output : JSON.stringify(output),
          },
        ],
      };
    },
  );
}

export async function startMcp(): Promise<void> {
  const server = new McpServer({ name: "ueda-llm", version: "0.0.0" });

  const tools: Record<string, Tool> = {
    ...createPlaidTools({
      baseUrl: "https://production.plaid.com",
      clientId: mustEnv("PLAID_CLIENT_ID"),
      secret: mustEnv("PLAID_CLIENT_SECRET"),
      tokens: JSON.parse(mustEnv("PLAID_TOKENS")),
    }),
    ...createMiscTools(),
  };

  for (const [name, aiTool] of Object.entries(tools)) {
    registerAiTool(server, name, aiTool);
  }

  await server.connect(new StdioServerTransport());
}
