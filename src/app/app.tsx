import {
  isRouteErrorResponse,
  Outlet,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";

import Layout from "./core/ui/layout";

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

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        <header className="container prose">
          <h1>
            {error.status}: {error.statusText}
          </h1>
          <p>{error.data}</p>
        </header>
      </Layout>
    );
  }

  return (
    <Layout>
      <header className="container prose">
        <h1>Wystąpił nieoczekiwany błąd</h1>
      </header>
    </Layout>
  );
}
