import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getResolvedTheme,
  getTheme,
  ResolvedTheme,
  setTheme,
  Theme,
} from "../lib/theme";
import { useHydrated } from "./use-hydrated";

export function useTheme() {
  const hydrated = useHydrated();

  const [value, setValue] = useState<Theme | null>(
    hydrated ? getTheme() : null
  );

  const resolvedTheme = useMemo(
    () => (value ? getResolvedTheme(value) : null),
    [value]
  );

  const setThemeInternal = useCallback((theme: Theme) => {
    setValue(theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    switch (resolvedTheme) {
      case ResolvedTheme.DARK: {
        document.documentElement.classList.add("dark");
        break;
      }

      case ResolvedTheme.LIGHT: {
        document.documentElement.classList.remove("dark");
        break;
      }
    }

    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        document.documentElement.classList.add("switching-theme");
        setThemeInternal(
          resolvedTheme === ResolvedTheme.DARK ? Theme.LIGHT : Theme.DARK
        );
        setTimeout(() =>
          document.documentElement.classList.remove("switching-theme")
        );
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => {
      ac.abort();
    };
  }, [resolvedTheme]);

  return {
    theme: value,
    setTheme: setThemeInternal,
    resolvedTheme,
  };
}
