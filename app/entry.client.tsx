import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

import {
  initializeFetchPolyfill,
  initializePrefetchPolyfill,
} from "./core/utils/polyfills";

await initializeFetchPolyfill();
await initializePrefetchPolyfill();

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  );
});
