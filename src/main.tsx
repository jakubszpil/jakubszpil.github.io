import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { createRoute, createRouter, Seo, SeoProvider } from "@libs/shared";

import "./styles/globals.css";
import { routes } from "./app/app.routes";

const router = createRouter(
  createRoute("")
    .addModule(() => import("./app/app"))
    .addChildren(...routes),
  true
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SeoProvider>
      <Seo defaultTitle="Jakub Szpil" titleTemplate="%s - Jakub Szpil" />
      <RouterProvider router={router} />
    </SeoProvider>
  </StrictMode>
);
