import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { matchRoutes, RouterProvider } from "react-router-dom";
import invariant from "tiny-invariant";

import "./styles/globals.css";
import { config } from "./app/config";

import { ThemeContextProvider } from "@/shared/data-access/theme";
import { createRouter } from "@/shared/utils/routing";

const lazyMatches = matchRoutes(
  config.routes,
  window.location.hash.replace("#", "") || window.location.pathname
)?.filter((m) => m.route.lazy);

if (lazyMatches && lazyMatches?.length > 0) {
  lazyMatches.forEach(async (m) => {
    const routeModule = await m.route?.lazy?.();
    Object.assign(m.route, {
      ...routeModule,
      lazy: undefined,
    });
  });
}

const router = createRouter(config.routes, {
  hashLocation: true,
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
  },
});

const rootElement = document.getElementById("root");

invariant(rootElement);

const root = createRoot(rootElement);

startTransition(() =>
  root.render(
    <StrictMode>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </StrictMode>
  )
);
