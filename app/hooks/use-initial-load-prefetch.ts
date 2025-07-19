import { useMatches } from "react-router";

import { usePrefetch } from "./use-prefetch";
import { useEffect, useState } from "react";

export function useInitialLoadPrefetch() {
  const [mounted, setMounted] = useState(false);
  const matches = useMatches();

  const match = matches.at(-1);
  const resource = mounted
    ? undefined
    : match
    ? match.pathname === "/"
      ? "/_root.data"
      : `${match.pathname}.data`
    : undefined;

  usePrefetch(resource);

  useEffect(() => {
    setMounted(true);
  }, []);

  return;
}
