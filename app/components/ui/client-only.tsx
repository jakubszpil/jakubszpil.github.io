import { useHydrated } from "~/hooks/use-hydrated";
import type { ReactNode } from "react";

export interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientOnly(props: ClientOnlyProps) {
  const hydrated = useHydrated();

  if (!hydrated) {
    return props.fallback;
  }

  return props.children;
}
