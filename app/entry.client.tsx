import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { initializeFetchPolyfills } from "./core/utils/fetch-polyfills";
import { initializeQueryClient } from "./core/utils/query-client";

const queryClient = initializeQueryClient();

await initializeFetchPolyfills(queryClient);

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
