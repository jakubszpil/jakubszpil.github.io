import {
  type AnchorHTMLAttributes,
  useMemo,
  useCallback,
  useState,
} from "react";
import { Link, matchRoutes, type LinkProps } from "react-router-dom";

import { useRouter } from "../utils/routing";

type PrefetchBehavior = "intent" | "none";

export interface LinkWithPrefetchLocationState {
  pathname: string;
  label: string;
}

export interface LinkWithPrefetchProps extends LinkProps {
  prefetch?: PrefetchBehavior;
  state?: LinkWithPrefetchLocationState;
}

export function LinkWithPrefetch({
  prefetch = "intent",
  ...props
}: LinkWithPrefetchProps) {
  const { routes } = useRouter();
  const [prefetched, setPrefetched] = useState(false);

  const prefetchRoute = useCallback(() => {
    if (prefetched) return;

    matchRoutes(routes, props.to)?.forEach((match) => {
      const url = new URL(`${window.location.origin}${match.pathname}`);
      const loaderArgs = {
        params: match.params,
        request: new Request(url),
      };

      if (match.route.loader instanceof Function)
        match.route.loader(loaderArgs);

      match.route.lazy?.().then((route) => {
        if (route.loader instanceof Function) route.loader(loaderArgs);
      });
    });

    setPrefetched(true);
  }, [prefetched, props.to, routes]);

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
