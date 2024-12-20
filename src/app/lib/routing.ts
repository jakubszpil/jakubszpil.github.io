import { type JSX, createElement, useContext } from "react";
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
    module().then((m) => {
      return {
        element: createElement(m.default),
        loader: m.loader,
        action: m.action,
        ErrorBoundary: m.ErrorBoundary,
        HydrateFallback: m.HydrateFallback,
      } satisfies Pick<
        RouteObject,
        "element" | "loader" | "action" | "ErrorBoundary" | "HydrateFallback"
      >;
    });
}

export function route<TPath extends string, TChildren extends RouteObject[]>(
  path: TPath,
  module: () => Promise<RouteModule>,
  children?: TChildren
) {
  return {
    path,
    children,
    lazy: loadRouteModule(module),
  } as const satisfies RouteObject;
}

export function index(module: () => Promise<RouteModule>) {
  return {
    index: true,
    lazy: loadRouteModule(module),
  } as const satisfies RouteObject;
}

export function prefix<TPath extends string, TChildren extends RouteObject[]>(
  path: TPath,
  children: TChildren
) {
  return {
    path,
    children,
  } as const satisfies RouteObject;
}

export type PreparePath<T extends string> = T extends `/${infer X}/`
  ? X
  : T extends `/${infer X}`
  ? X
  : T extends `${infer X}/`
  ? X
  : T;

export type ConcatPaths<
  A extends string,
  B extends string
> = PreparePath<B> extends ""
  ? `/${PreparePath<A>}`
  : PreparePath<A> extends ""
  ? `/${PreparePath<B>}`
  : `/${PreparePath<A>}/${PreparePath<B>}`;

export type PathFromRoute<
  TRoute extends RouteObject,
  TPrefix extends string
> = ConcatPaths<TPrefix, TRoute["path"] extends string ? TRoute["path"] : "">;

export type ExtractPathsFromRoute<
  TRoute extends RouteObject,
  TPrefix extends string
> =
  | PathFromRoute<TRoute, TPrefix>
  | (TRoute["children"] extends RouteObject[]
      ? ExtractPathsFromRoutes<
          TRoute["children"],
          PathFromRoute<TRoute, TPrefix>
        >
      : never);

export type ExtractPathsFromRoutes<
  TRoutes extends RouteObject[],
  TPrefix extends string = ""
> = {
  [K in keyof TRoutes]: ExtractPathsFromRoute<TRoutes[K], TPrefix>;
}[number];
