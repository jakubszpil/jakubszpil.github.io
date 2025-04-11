import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { injectTheme } from "./lib/theme";
import { injectFetchCache } from "./lib/fetch";

startTransition(async () => {
  await injectTheme();
  await injectFetchCache();

  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>
  );
});
