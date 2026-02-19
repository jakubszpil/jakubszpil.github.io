import { HYBRID_SSG_ENABLED } from "~/lib/config";
import { useHydrated } from "./use-hydrated";

export function usePrerender() {
  const hydrated = useHydrated();

  return HYBRID_SSG_ENABLED ? hydrated : true;
}
