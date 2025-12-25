import { use, useSyncExternalStore } from "react";
import { UNSAFE_DataRouterStateContext } from "react-router";

function subscribe() {
  return () => {};
}

export function useHydrated() {
  const { initialized } = use(UNSAFE_DataRouterStateContext)!;

  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  return hydrated && initialized;
}
