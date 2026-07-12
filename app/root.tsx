import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import styles from "./styles.css?url";
import {
  getScrollRestorationKey,
  getScrollRestorationStorageKey,
} from "./core/utils/scroll-restoration";
import { queryClient, getPersistOptions } from "./core/utils/query-client";
import { TooltipProvider } from "./shared/ui/tooltip";
import { ThemeInjector } from "./shared/ui/theme-injector";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="preload" as="style" href={styles} />
        <link rel="stylesheet" href={styles} />
        <ThemeInjector />
        <Meta />
        <Links />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <ScrollRestoration
          getKey={getScrollRestorationKey}
          storageKey={getScrollRestorationStorageKey()}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={getPersistOptions()}
    >
      <Outlet />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </PersistQueryClientProvider>
  );
}
