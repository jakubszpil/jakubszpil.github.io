import { config, useHydrated } from "@packages/shared";

export function usePrerender() {
  const hydrated = useHydrated();

  return config.hybridSSGEnabled ? hydrated : true;
}
