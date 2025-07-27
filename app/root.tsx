import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./styles.css";

function injectScript(script: string) {
  return script
    .trim()
    .replace(/  +/g, "")
    .replace(/(\r\n|\n|\r)/gm, "");
}

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
              const K = "theme";
              const D = "dark";

              const l = localStorage;
              const c = document.documentElement.classList;
              const t = l.getItem(K);

              if (t === "DARK") c.add(D);
              else if (t === "LIGHT") c.remove(D);
              else if (!t || t === "SYSTEM") {
                const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
                matches ? c.add(D) : c.remove(D); 
              } else l.removeItem(K);
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
