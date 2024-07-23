import { type AnchorHTMLAttributes, useMemo, useCallback } from "react";
import { Link, matchRoutes, type LinkProps } from "react-router-dom";

import { useConfig } from "../data-access";

type PrefetchBehavior = "intent" | "none";

export interface LinkWithPrefetchProps extends LinkProps {
  prefetch?: PrefetchBehavior;
}

export function LinkWithPrefetch({
  prefetch = "intent",
  ...props
}: LinkWithPrefetchProps) {
  const { routes } = useConfig();

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

  const handlers = useMemo((): AnchorHTMLAttributes<HTMLAnchorElement> => {
    let prefetchTimeout: NodeJS.Timeout | null = null;

    const waitAndPrefetch = () => {
      prefetchTimeout = setTimeout(prefetchRoute, 300);
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
