import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getResolvedTheme,
  getTheme,
  handleSystemThemeChange,
  performThemeChange,
  ResolvedTheme,
  setLocalStorageTheme,
  Theme,
  toggleThemeClassName,
} from "~/lib/theme";

import { useHydrated } from "./use-hydrated";

export function useTheme() {
  const hydrated = useHydrated();

  const [theme, setTheme] = useState<Theme | null>(null);

  const resolvedTheme = useMemo(() => getResolvedTheme(theme), [theme]);

  const setThemeInternal = useCallback((theme: Theme) => {
    setTheme(theme);
    setLocalStorageTheme(theme);
  }, []);

  useEffect(() => {
    if (hydrated) setTheme(getTheme());
  }, [hydrated]);

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

    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();

        performThemeChange(() => {
          setThemeInternal(
            resolvedTheme === null
              ? Theme.SYSTEM
              : resolvedTheme === ResolvedTheme.DARK
                ? Theme.LIGHT
                : Theme.DARK
          );
        });
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => {
      ac.abort();
    };
  }, [resolvedTheme]);

  return {
    theme,
    setTheme: setThemeInternal,
    resolvedTheme,
  };
}
