import { useCallback, useEffect, useMemo, useRef } from "react";
import { Link, matchRoutes, type LinkProps } from "react-router-dom";

import { useConfig } from "../data-access";

type PrefetchBehavior = "intent" | "render" | "none";

export interface LinkWithPrefetchProps extends LinkProps {
  prefetch?: PrefetchBehavior;
}

export function LinkWithPrefetch({
  prefetch = "intent",
  ...props
}: LinkWithPrefetchProps) {
  const { routes } = useConfig();

  const linkRef = useRef<HTMLAnchorElement>(null);

  const matches = useMemo(
    () => matchRoutes(routes, props.to),
    [props.to, routes]
  );

  const prefetchRoute = useCallback(() => {
    const target = matches?.at(-1);

    if (!target) return;

    target.route.lazy?.().then((route) => {
      if (route.loader instanceof Function) {
        route.loader({
          params: target.params,
          request: new Request(props.to as URL),
        });
      }
    });
  }, [matches, props.to]);

  const prefetchOnIntent = useCallback(() => {
    let prefetchTimeout: NodeJS.Timeout | null = null;

    const waitAndPrefetch = () => {
      prefetchTimeout = setTimeout(prefetchRoute, 700);
    };

    const clearPrefetchTimeout = () => {
      if (prefetchTimeout !== null) {
        clearTimeout(prefetchTimeout);
        prefetchTimeout = null;
      }
    };

    linkRef.current?.addEventListener("click", prefetchRoute);
    linkRef.current?.addEventListener("mouseenter", waitAndPrefetch);
    linkRef.current?.addEventListener("focus", waitAndPrefetch);
    linkRef.current?.addEventListener("mouseleave", clearPrefetchTimeout);
    linkRef.current?.addEventListener("blur", clearPrefetchTimeout);

    return () => {
      if (prefetchTimeout !== null) clearTimeout(prefetchTimeout);
      linkRef.current?.removeEventListener("click", prefetchRoute);
      linkRef.current?.removeEventListener("mouseenter", waitAndPrefetch);
      linkRef.current?.removeEventListener("focus", waitAndPrefetch);
      linkRef.current?.removeEventListener("mouseleave", clearPrefetchTimeout);
      linkRef.current?.removeEventListener("blur", clearPrefetchTimeout);
    };
  }, [prefetchRoute]);

  const prefetchOnRender = useCallback(() => {
    prefetchRoute();
    return () => {};
  }, [prefetchRoute]);

  useEffect(() => {
    if (!prefetch) return;

    if (prefetch === "intent") return prefetchOnIntent();
    if (prefetch === "render") return prefetchOnRender();

    return;
  }, [prefetch, prefetchOnIntent, prefetchOnRender]);

  return <Link {...props} ref={linkRef} />;
}
