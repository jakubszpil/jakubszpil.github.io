import {
  type AnchorHTMLAttributes,
  useMemo,
  useCallback,
  useState,
  useContext,
} from "react";
import {
  matchRoutes,
  Link,
  type LinkProps,
  type LoaderFunctionArgs,
  UNSAFE_DataRouterContext,
} from "react-router";

export interface LinkWithPrefetchLocationState {
  pathname: string;
  label: string;
}

export interface LinkWithPrefetchProps extends LinkProps {
  state?: LinkWithPrefetchLocationState;
}

export function LinkWithPrefetch(props: LinkWithPrefetchProps) {
  const { routes } = useContext(UNSAFE_DataRouterContext)!.router;
  const [prefetched, setPrefetched] = useState(false);

  const prefetchRoute = useCallback(() => {
    if (prefetched) return;

    matchRoutes(routes, props.to)?.forEach(async (match) => {
      const url = new URL(`${window.location.origin}${match.pathname}`);

      const loaderArgs: LoaderFunctionArgs = {
        params: match.params,
        request: new Request(url),
      };

      if (match.route.loader instanceof Function)
        await match.route.loader(loaderArgs);

      match.route.lazy?.().then(async (route) => {
        if (route.loader instanceof Function) await route.loader(loaderArgs);
      });
    });

    setPrefetched(true);
  }, [prefetched, props.to, routes]);

  const handlers = useMemo((): AnchorHTMLAttributes<HTMLAnchorElement> => {
    let prefetchTimeout: NodeJS.Timeout | null = null;

    const waitAndPrefetch = () => {
      prefetchTimeout = setTimeout(prefetchRoute, 50);
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

  return <Link {...props} {...handlers} />;
}
