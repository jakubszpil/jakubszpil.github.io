import { use } from "react";
import { useMatches, UNSAFE_FrameworkContext } from "react-router";

import { usePrefetchLink } from "./use-prefetch-link";

export function usePrefetchLinkForInitialLoad() {
  const matches = useMatches();
  const context = use(UNSAFE_FrameworkContext);

  const routes = context?.manifest.routes ?? {};

  const match = matches.at(-1);

  const route = match ? routes[match.id] : undefined;

  const resource = match
    ? route
      ? route.hasLoader
        ? match.pathname === "/"
          ? "/_root.data"
          : `${match.pathname}.data`
        : undefined
      : undefined
    : undefined;

  return usePrefetchLink(resource);
}
