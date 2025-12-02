import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import styles from "./styles.css?url";
import { InlineScript } from "./shared/ui/inline-script";
import { PreloadedScript } from "./shared/ui/preloaded-script";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" data-timestamp={import.meta.env.TIMESTAMP}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="preload" as="style" href={styles} />
        <link rel="stylesheet" href={styles} />
        <link
          rel="preload prefetch"
          href="/fonts/geist.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <InlineScript
          code={`
            let k = "theme";
            let t = "dark";
            let s = localStorage;
            let c = document.documentElement.classList;
            let v = s.getItem(k);
            if (v === null || v === "SYSTEM") 
              matchMedia("(prefers-color-scheme: dark)").matches
                ? c.add(t)
                : c.remove(t);
            else if (v === "DARK") c.add(t);
            else if (v === "LIGHT") c.remove(t);
            else s.removeItem(k);
          `}
        />
        <PreloadedScript src="/fetch.js" />
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
