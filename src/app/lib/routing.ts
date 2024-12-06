import { JSX, createElement, useContext } from "react";
import { UNSAFE_DataRouterContext, type RouteObject } from "react-router";
import invariant from "tiny-invariant";

export type RouteModule = {
  default: () => JSX.Element;
} & Pick<
  RouteObject,
  "loader" | "action" | "ErrorBoundary" | "HydrateFallback"
>;

export function notFound(message?: string) {
  throw new Response(null, {
    status: 404,
    statusText: message ?? "Nie znaleziono strony",
  });
}

export function useRouter() {
  const router = useContext(UNSAFE_DataRouterContext)?.router;

  invariant(router, "Cannot use useRouter outside router context");

  return router;
}

export function loadRouteModule(module: () => Promise<RouteModule>) {
  return () =>
    module().then(
      (m) =>
        ({
          element: createElement(m.default),
          loader: m.loader,
          action: m.action,
          ErrorBoundary: m.ErrorBoundary,
        } satisfies Pick<
          RouteObject,
          "element" | "loader" | "action" | "ErrorBoundary"
        >)
    );
}

export function route(
  path: string,
  module: () => Promise<RouteModule>,
  children?: RouteObject[]
): RouteObject {
  return {
    path,
    children,
    lazy: loadRouteModule(module),
  };
}

export function index(module: () => Promise<RouteModule>): RouteObject {
  return {
    index: true,
    lazy: loadRouteModule(module),
  };
}

export function prefix(path: string, children: RouteObject[]): RouteObject {
  return {
    path,
    children,
  };
}
