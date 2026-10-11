import { tool } from "ai";
import { z } from "zod";

export const createMiscTools = () => ({
  date: tool({
    description:
      "Today's date (YYYY-MM-DD). Call this before computing any date range — never use training knowledge for dates.",
    inputSchema: z.object({}),
    execute: async () => new Date().toISOString().slice(0, 10),
  }),
});
