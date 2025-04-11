import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./styles.css";

function injectScript(script: string) {
  const result = script
    .trim()
    .replace(/  +/g, "")
    .replace(/(\r\n|\n|\r)/gm, "");

  return result;
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
        <script>
          {injectScript(`
            const theme = localStorage.getItem("theme");

            switch (theme) {
              case "DARK": {
                document.documentElement.classList.add("dark");
                break;
              }

              case "LIGHT": {
                document.documentElement.classList.remove("dark");
                break;
              }

              case "SYSTEM":
              case null: {
                const { matches } = window.matchMedia("(prefers-color-scheme: dark)");

                if (matches) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                  
                break;
              }

              default: {
                localStorage.removeItem("theme");
              }
            }
          `)}
        </script>
        <script>
          {injectScript(`globalThis.timestamp = ${import.meta.env.TIMESTAMP}`)}
        </script>
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
