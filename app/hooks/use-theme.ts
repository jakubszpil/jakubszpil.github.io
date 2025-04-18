import { useCallback, useEffect, useMemo, useState } from "react";

import {
  appendDarkThemeClassName,
  finalizeThemeSwitching,
  getResolvedTheme,
  getTheme,
  initializeThemeSwitching,
  removeDarkThemeClassName,
  ResolvedTheme,
  setTheme,
  Theme,
} from "~/lib/theme";

import { useHydrated } from "./use-hydrated";

export function handleSystemThemeChange({ matches }: MediaQueryListEvent) {
  initializeThemeSwitching();

  if (matches) {
    appendDarkThemeClassName();
  } else {
    removeDarkThemeClassName();
  }

  setTimeout(() => finalizeThemeSwitching());
}

export function useTheme() {
  const hydrated = useHydrated();

  const [value, setValue] = useState<Theme | null>(null);

  const resolvedTheme = useMemo(
    () => (value ? getResolvedTheme(value) : null),
    [value]
  );

  const setThemeInternal = useCallback((theme: Theme) => {
    setValue(theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    if (hydrated) {
      setValue(getTheme());
    }
  }, [hydrated]);

  useEffect(() => {
    if (value !== Theme.SYSTEM) {
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
  }, [value]);

  useEffect(() => {
    switch (resolvedTheme) {
      case ResolvedTheme.DARK: {
        appendDarkThemeClassName();
        break;
      }

      case ResolvedTheme.LIGHT: {
        removeDarkThemeClassName();
        break;
      }
    }

    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        initializeThemeSwitching();
        setThemeInternal(
          resolvedTheme === ResolvedTheme.DARK ? Theme.LIGHT : Theme.DARK
        );
        setTimeout(() => finalizeThemeSwitching());
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
