import {
  type ActionFunction,
  type LazyRouteFunction,
  type LoaderFunction,
  type LoaderFunctionArgs,
  type RouteObject,
  createBrowserRouter,
  createHashRouter,
  useLoaderData,
} from "react-router-dom";

export interface RouteModule {
  default: () => JSX.Element;
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: RouteObject["ErrorBoundary"];
  HydrateFallback?: RouteObject["HydrateFallback"];
}

export interface RouteBuilder {
  addModule(module: () => Promise<RouteModule>): RouteBuilder;
  addChildren(...routes: RouteBuilder[]): RouteBuilder;
  setIndex(index: boolean): RouteBuilder;
  build(): RouteObject;
}

export interface RouteBuilderData {
  path: string;
  index: boolean;
  children: RouteBuilder[];
  lazy?: LazyRouteFunction<RouteObject>;
}

export function createRoute(path: string): RouteBuilder {
  const data: RouteBuilderData = {
    path,
    children: [],
    index: false,
  };

  return {
    addModule(module: () => Promise<RouteModule>) {
      data.lazy = () =>
        module().then((data) => {
          const Component = data.default;

          return {
            element: <Component />,
            loader: data.loader,
            action: data.action,
            ErrorBoundary: data.ErrorBoundary,
            HydrateFallback: data.HydrateFallback,
          };
        });

      return this;
    },
    setIndex(index) {
      data.index = index;
      return this;
    },
    addChildren(...routes) {
      data.children.push(...routes);

      return this;
    },
    build() {
      if (data.index) {
        return {
          path: data.path,
          lazy: data.lazy,
        };
      }

      return {
        path: data.path,
        lazy: data.lazy,
        children: data.children?.map((child) => child.build()),
      };
    },
  };
}

export function notFound(message?: string) {
  throw new Response(null, {
    status: 404,
    statusText: message ?? "Nie znaleziono strony",
  });
}

export function buildRoutes(...routes: RouteBuilder[]) {
  return routes.map((route) => route.build());
}

export type RouterOptions =
  | ({ hashLocation?: false } & Parameters<typeof createBrowserRouter>[1])
  | ({ hashLocation: true } & Parameters<typeof createHashRouter>[1]);

export function createRouter(routes: RouteObject[], options?: RouterOptions) {
  if (options?.hashLocation) {
    if (!window.location.hash) {
      history.replaceState(null, "", "/#/");
    }

    return createHashRouter(routes, options);
  }

  return createBrowserRouter(routes, options);
}

export type MaybeAsync<T> = T | Promise<T>;

export type Loader<T> = (args: LoaderFunctionArgs) => MaybeAsync<T>;

export type LoaderData<T> = T extends Loader<infer X> ? X : unknown;

export function useLoader<T>() {
  return useLoaderData() as LoaderData<T>;
}
