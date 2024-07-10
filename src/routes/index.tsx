import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { isBrowser, isServer } from "@builder.io/qwik/build";
import { AsyncContext } from "~/async-context";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <button
        onClick$={() => {
          console.log("click me");
          if (isBrowser) {
            console.log("isBrowser");
            AsyncContext.getStore();
          }
          if (isServer) {
            console.log("isServer");
            AsyncContext.getStore();
          }
        }}
      >
        Click me
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
