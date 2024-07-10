import { AsyncLocalStorage } from "node:async_hooks";

export const asyncContext: AsyncLocalStorage<Map<string, unknown>> =
  new AsyncLocalStorage<Map<string, unknown>>();
