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
} from "@libs/shared";

import "./styles/globals.css";
import { routes } from "./app/app.routes";
import { config } from "./app/app.config";

const router = createRouter(
  createRoute("")
    .addModule(() => import("./app/app"))
    .addChildren(...routes),
  false
);

const rootElement = document.getElementById("root");

invariant(rootElement);

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ConfigProvider config={config}>
      <SeoProvider>
        <Seo {...config.meta} />
        <RouterProvider router={router} />
      </SeoProvider>
    </ConfigProvider>
  </StrictMode>
);
