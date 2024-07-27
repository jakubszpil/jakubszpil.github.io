import { type AnchorHTMLAttributes, useMemo, useCallback } from "react";
import { Link, matchRoutes, type LinkProps } from "react-router-dom";

import { config } from "@/config";

type PrefetchBehavior = "intent" | "none";

export interface LinkWithPrefetchProps extends LinkProps {
  prefetch?: PrefetchBehavior;
}

export function LinkWithPrefetch({
  prefetch = "intent",
  ...props
}: LinkWithPrefetchProps) {
  const { routes } = config;

  const matches = useMemo(
    () => matchRoutes(routes, props.to),
    [props.to, routes]
  );

  const prefetchRoute = useCallback(() => {
    matches?.forEach((match) => {
      match.route.lazy?.().then((route) => {
        if (route.loader instanceof Function) {
          route.loader({
            params: match.params,
            request: new Request(props.to as URL),
          });
        }
      });
    });
  }, [matches, props.to]);

  const handlers = useMemo((): AnchorHTMLAttributes<HTMLAnchorElement> => {
    let prefetchTimeout: NodeJS.Timeout | null = null;

    const waitAndPrefetch = () => {
      prefetchTimeout = setTimeout(prefetchRoute, 150);
    };

    const clearPrefetchTimeout = () => {
      if (prefetchTimeout !== null) {
        clearTimeout(prefetchTimeout);
        prefetchTimeout = null;
      }
    };

    if (prefetch === "intent") {
      return {
        onClick: (event) => {
          prefetchRoute();
          props.onClick?.(event);
        },
        onTouchStartCapture: (event) => {
          prefetchRoute();
          props.onTouchStartCapture?.(event);
        },
        onTouchStart: (event) => {
          prefetchRoute();
          props.onTouchStart?.(event);
        },
        onMouseEnter: (event) => {
          waitAndPrefetch();
          props.onMouseEnter?.(event);
        },
        onMouseLeave: (event) => {
          clearPrefetchTimeout();
          props.onMouseLeave?.(event);
        },
        onFocus: (event) => {
          waitAndPrefetch();
          props.onFocus?.(event);
        },
        onBlur: (event) => {
          clearPrefetchTimeout();
          props.onBlur?.(event);
        },
      };
    }

    return {};
  }, [prefetch, prefetchRoute, props]);

  return <Link {...props} {...handlers} />;
}
