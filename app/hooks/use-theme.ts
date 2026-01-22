import { useEffect, useMemo, useState } from "react";

import {
  getResolvedTheme,
  getTheme,
  handleSystemThemeChange,
  toggleResolvedThemeIntoOpposite,
  performThemeChange,
  setLocalStorageTheme,
  Theme,
  toggleThemeClassName,
} from "../lib/theme";
import { useHydrated } from "./use-hydrated";

export function useTheme() {
  const hydrated = useHydrated();

  const initialTheme = useMemo(() => {
    if (hydrated) return getTheme();
    return null;
  }, [hydrated]);

  const [theme, setTheme] = useState<Theme | null>(initialTheme);

  const resolvedTheme = useMemo(() => getResolvedTheme(theme), [theme]);

  useEffect(() => {
    if (theme) setLocalStorageTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== Theme.SYSTEM) {
      return;
    }

    const abortController = new AbortController();
    const watcher = window.matchMedia("(prefers-color-scheme: dark)");

    watcher.addEventListener("change", handleSystemThemeChange, {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [theme]);

  useEffect(() => {
    toggleThemeClassName(resolvedTheme);

    const abortController = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();

        performThemeChange(() => {
          setTheme(toggleResolvedThemeIntoOpposite(resolvedTheme));
        });
      }
    };

    document.addEventListener("keydown", down, {
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [resolvedTheme]);

  return {
    theme,
    setTheme,
    resolvedTheme,
  };
}
