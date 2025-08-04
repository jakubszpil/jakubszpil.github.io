import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./styles.css";
import { injectScript } from "./lib/scripts";

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
        <link rel="modulepreload" href="/fetch.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: injectScript(`
              {
                let K = "theme";
                let D = "dark";

                let l = localStorage;
                let c = document.documentElement.classList;
                let t = l.getItem(K);

                if (t === "DARK") c.add(D);
                else if (t === "LIGHT") c.remove(D);
                else if (!t || t === "SYSTEM") matchMedia(\`(prefers-color-scheme: '$\{D\}')\`).matches ? c.add(D) : c.remove(D);
                else l.removeItem(K);
              }
          `),
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: injectScript(
              `globalThis.timestamp = ${import.meta.env.TIMESTAMP}`
            ),
          }}
        ></script>
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
