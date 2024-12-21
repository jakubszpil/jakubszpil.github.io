import type { ReactNode } from "react";
import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import NotFound from "./components/not-found";
import { Button } from "./components/ui/button";
import type { Route } from "./+types/root";
import stylesheet from "./styles.css?url";
import LayoutComponent from "./components/layout";

export const links: Route.LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "/static/fonts/inter/font.css",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload prefetch",
    href: "/static/fonts/inter/font.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ WebkitTapHighlightColor: "transparent" }}>
        <LayoutComponent>{children}</LayoutComponent>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
            <Link prefetch="intent" to="/">
              Powrót do strony głównej
            </Link>
          </Button>
        </>
      );
    }

    console.error(error);

    return <h1>Wystąpił nieoczekiwany błąd</h1>;
  };

  return <header className="container prose">{renderError(error)}</header>;
}
