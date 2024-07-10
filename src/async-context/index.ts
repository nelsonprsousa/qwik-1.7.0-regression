import { isBrowser } from "@builder.io/qwik/build";
import { asyncContext as asyncContextClient } from "~/async-context/async-context.client";
import { asyncContext as asyncContextServer } from "~/async-context/async-context.server";

export const AsyncContext = isBrowser ? asyncContextClient : asyncContextServer;
