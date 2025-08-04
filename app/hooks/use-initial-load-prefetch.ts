import { useMatches, UNSAFE_FrameworkContext } from "react-router";

import { usePrefetch } from "./use-prefetch";
import { use, useEffect, useState } from "react";

export function useInitialLoadPrefetch() {
  const [mounted, setMounted] = useState(false);
  const matches = useMatches();
  const context = use(UNSAFE_FrameworkContext);

  const routes = context?.manifest.routes ?? {};

  const match = matches.at(-1);

  const route = match ? routes[match.id] : undefined;

  const resource = mounted
    ? undefined
    : match
    ? route
      ? route.hasLoader
        ? match.pathname === "/"
          ? "/_root.data"
          : `${match.pathname}.data`
        : undefined
      : undefined
    : undefined;

  usePrefetch(resource);

  useEffect(() => {
    setMounted(true);
  }, []);

  return;
}
