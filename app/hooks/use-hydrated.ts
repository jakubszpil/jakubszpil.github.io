import { use, useSyncExternalStore } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router";

function subscribe() {
  return () => {};
}

export function useHydrated() {
  const context = use(UNSAFE_DataRouterStateContext);

  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const initialized = context?.initialized ?? false;

  return isClient && initialized;
}
