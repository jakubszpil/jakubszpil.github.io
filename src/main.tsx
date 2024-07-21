import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import invariant from "tiny-invariant";

import {
  createRoute,
  createRouter,
  Seo,
  SeoProvider,
  ConfigProvider,
  buildRoutes,
} from "@libs/shared";

import "./styles/globals.css";
import { appRoutes } from "./app/app.routes";
import { config } from "./app/app.config";

const routes = buildRoutes(
  createRoute("")
    .addModule(() => import("./app/app"))
    .addChildren(...appRoutes)
);

const router = createRouter(routes, {
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

root.render(
  <StrictMode>
    <ConfigProvider config={{ ...config, routes }}>
      <SeoProvider>
        <Seo {...config.meta} />
        <RouterProvider router={router} />
      </SeoProvider>
    </ConfigProvider>
  </StrictMode>
);
