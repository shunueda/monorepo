import { env } from "node:process";
import { ok } from "node:assert";

export function mustEnv(name: string) {
  const val = env[name];
  ok(val, `Missing envvar: ${name}`);
  return val;
}

export function arrayToObject<K extends string, V>(
  arr: readonly K[],
  predicate: (key: K) => V,
): Record<K, V> {
  return arr.reduce(
    (acc, key) => {
      acc[key] = predicate(key);
      return acc;
    },
    {} as Record<K, V>,
  );
}
