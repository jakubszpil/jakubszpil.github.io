import { useCallback, useEffect, useMemo, useState } from "react";

import {
  getResolvedTheme,
  getTheme,
  ResolvedTheme,
  setTheme,
  Theme,
} from "@/lib/theme";

export function useTheme() {
  const [value, setValue] = useState(getTheme());
  const resolvedTheme = useMemo(() => getResolvedTheme(value), [value]);

  const setThemeInternal = useCallback((theme: Theme) => {
    setValue(theme);
    setTheme(theme);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (resolvedTheme === ResolvedTheme.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        document.documentElement.classList.add("switching-theme");
        setThemeInternal(
          resolvedTheme === ResolvedTheme.DARK ? Theme.LIGHT : Theme.DARK
        );
        timeout = setTimeout(
          () => document.documentElement.classList.remove("switching-theme"),
          0
        );
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => {
      ac.abort();
      clearTimeout(timeout);
    };
  }, [resolvedTheme]);

  return {
    theme: value,
    setTheme: setThemeInternal,
    resolvedTheme,
  };
}
