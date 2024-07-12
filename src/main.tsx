import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider config={config}>
      <SeoProvider>
        <Seo
          defaultTitle={config.meta.title}
          titleTemplate={config.meta.titleTemplate}
        />
        <RouterProvider router={router} />
      </SeoProvider>
    </ConfigProvider>
  </StrictMode>
);
