import {
  isRouteErrorResponse,
  Outlet,
  ScrollRestoration,
  useRouteError,
  Link,
} from "react-router-dom";

import { Button } from "@libs/shared";

import Layout from "./core/ui/layout";
import NotFound from "./core/ui/not-found";

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
            <Link to="/">Powrót do strony głównej</Link>
          </Button>
        </>
      );
    }

    return <h1>Wystąpił nieoczekiwany błąd</h1>;
  };

  return (
    <Layout>
      <header className="container prose">{renderError(error)}</header>
    </Layout>
  );
}
