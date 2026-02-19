import { createElement } from "react";

import { useHydrated } from "./use-hydrated";

export function usePrefetchLink(resource?: string) {
  const hydrated = useHydrated();

  if (!hydrated) return null;

  if (!resource) return null;

  return createElement("link", {
    rel: "prefetch",
    as: "fetch",
    href: resource,
  });
}
