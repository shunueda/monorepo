import { ok } from "node:assert";

export function mustEnv(name: string): string {
  const value = process.env[name];
  ok(value, `Missing ${name} environment variable.`);
  return value;
}
