import { startTransition, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import invariant from "tiny-invariant";

import "./styles/globals.css";
import { route } from "./app/lib/routing";
import { routes } from "./app/routes";

if (!window.location.hash) {
  history.replaceState(null, "", "/#/");
}

const router = createHashRouter(
  [route("", () => import("./app/root"), routes)],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const rootElement = document.getElementById("root");

invariant(rootElement);

const root = createRoot(rootElement);

startTransition(() => {
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
});
