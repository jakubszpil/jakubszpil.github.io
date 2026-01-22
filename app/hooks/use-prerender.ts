import { config } from "../lib/config";
import { useHydrated } from "./use-hydrated";

export function usePrerender() {
  const hydrated = useHydrated();

  return config.hybridSSGEnabled ? hydrated : true;
}
