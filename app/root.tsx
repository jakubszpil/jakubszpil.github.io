import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./styles.css";

const timestamp = import.meta.env.TIMESTAMP;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link
          rel="preload prefetch"
          href="/static/fonts/geist.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <script async type="module" src="/theme.js" />
        <script>{`globalThis.timestamp = ${timestamp}`}</script>
        <script type="module" src="/fetch.js" />
        <Meta />
        <Links />
      </head>
      <body style={{ WebkitTapHighlightColor: "transparent" }}>
        {children}
        <ScrollRestoration
          getKey={(location) =>
            Object.values(location).filter(Boolean).join(".")
          }
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
