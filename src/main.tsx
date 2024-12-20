import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";

import "./styles/globals.css";
import { routes } from "~/routes";
import { route } from "~/lib/routing";

if (!window.location.hash) {
  history.replaceState(null, "", "/#/");
}

const router = createHashRouter([route("", () => import("~/root"), routes)], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
