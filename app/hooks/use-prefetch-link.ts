import { createElement } from "react";

export function usePrefetchLink(resource?: string) {
  if (typeof window === "undefined") return null;

  if (!resource) return null;

  return createElement("link", {
    rel: "prefetch",
    as: "fetch",
    href: resource,
  });
}
