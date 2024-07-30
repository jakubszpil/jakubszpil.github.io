import {
  isRouteErrorResponse,
  Outlet,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";

import Layout from "./core/ui/layout";
import NotFound from "./core/ui/not-found";
import { Button } from "./shared/ui/button";
import { LinkWithPrefetch } from "./shared/ui/link-with-prefetch";

export default function App() {
  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  const renderError = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <NotFound />;
      }

      return (
        <>
          <h1>
            {error.status}: {error.statusText}
          </h1>
          <p>{error.data}</p>
          <Button asChild className="no-underline" variant="outline" size="sm">
            <LinkWithPrefetch to="/">Powrót do strony głównej</LinkWithPrefetch>
          </Button>
        </>
      );
    }

    console.error(error);

    return <h1>Wystąpił nieoczekiwany błąd</h1>;
  };

  return (
    <Layout>
      <header className="container prose">{renderError(error)}</header>
    </Layout>
  );
}
