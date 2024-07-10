import type { AsyncLocalStorage } from "node:async_hooks";

// AsyncLocalStorage is a Node.js module, should not be used on client
export const asyncContext: AsyncLocalStorage<Map<string, unknown>> = {
  run: (_store: Map<string, unknown>, callback: () => void) => callback(),
  getStore: () => null,
} as unknown as AsyncLocalStorage<Map<string, unknown>>;
