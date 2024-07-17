import {
  type ActionFunction,
  type ActionFunctionArgs,
  type LazyRouteFunction,
  type LoaderFunction,
  type LoaderFunctionArgs,
  type RouteObject,
  createBrowserRouter,
  createHashRouter,
  useActionData,
  useLoaderData,
} from "react-router-dom";

export type RouteModule = {
  default: () => JSX.Element;
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: () => JSX.Element;
};

export type RouteBuilder = {
  addModule(module: () => Promise<RouteModule>): RouteBuilder;
  addChildren(...routes: RouteBuilder[]): RouteBuilder;
  build(): RouteObject;
};

export type RouteBuilderData = {
  path: string;
  children: RouteBuilder[];
  lazy?: LazyRouteFunction<RouteObject>;
};

export function createRoute(path: string): RouteBuilder {
  const data: RouteBuilderData = {
    path,
    children: [],
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
          };
        });

      return this;
    },
    addChildren(...routes) {
      data.children.push(...routes);

      return this;
    },
    build() {
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

export function createRouter(baseRoute: RouteBuilder, withHash?: boolean) {
  const routes = [baseRoute.build()];

  if (withHash) {
    if (!window.location.hash) {
      history.replaceState(null, "", "/#/");
    }

    return createHashRouter(routes);
  }

  return createBrowserRouter(routes);
}

export type MaybeAsync<T> = T | Promise<T>;

export type Loader<T> = (args: LoaderFunctionArgs) => MaybeAsync<T>;
export type Action<T> = (args: ActionFunctionArgs) => MaybeAsync<T>;

export type LoaderData<T> = T extends Loader<infer X> ? X : unknown;
export type ActionData<T> = T extends Action<infer X> ? X : unknown;

export function defineLoader<T>(loader: Loader<T>) {
  return loader;
}

export function useLoader<T>() {
  return useLoaderData() as LoaderData<T>;
}

export function defineAction<T>(action: Action<T>) {
  return action;
}

export function useAction<T>() {
  return useActionData() as ActionData<T> | undefined;
}
