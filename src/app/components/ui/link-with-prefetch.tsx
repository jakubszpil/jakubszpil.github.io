import {
  type AnchorHTMLAttributes,
  useMemo,
  useCallback,
  useState,
} from "react";
import { matchRoutes, Link, type LinkProps } from "react-router";

import { useRouter } from "~/lib/routing";

export interface LinkWithPrefetchLocationState {
  pathname: string;
  label: string;
}

export interface LinkWithPrefetchProps extends LinkProps {
  state?: LinkWithPrefetchLocationState;
}

export function LinkWithPrefetch({ ...props }: LinkWithPrefetchProps) {
  const { routes } = useRouter();
  const [prefetched, setPrefetched] = useState(false);

  const prefetchRoute = useCallback(() => {
    if (prefetched) return;

    matchRoutes(routes, props.to)?.forEach((match) => {
      const url = new URL(`${window.location.origin}${props.to}`);
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
  }, [prefetchRoute, props]);

  return <Link {...props} {...handlers} prefetch="intent" />;
}
