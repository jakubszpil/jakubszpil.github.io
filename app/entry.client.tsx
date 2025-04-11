import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { injectTheme } from "./lib/theme";
import { injecFetchCache } from "./lib/fetch";

startTransition(async () => {
  await injectTheme();
  await injecFetchCache();

  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
