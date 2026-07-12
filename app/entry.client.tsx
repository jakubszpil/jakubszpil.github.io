import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import { initializeFetchPolyfills } from "./core/utils/fetch-polyfills";
import { queryClient } from "./core/utils/query-client";

await initializeFetchPolyfills(queryClient);

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
