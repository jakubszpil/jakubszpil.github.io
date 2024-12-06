import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export enum ThemeEnum {
  LIGHT = "LIGHT",
  DARK = "DARK",
  SYSTEM = "SYSTEM",
}

export enum ResolvedThemeEnum {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export function isTheme(theme: unknown): theme is ThemeEnum {
  return Object.values(ThemeEnum).includes(theme as ThemeEnum);
}

export function getThemeFromLocalStorage() {
  const theme = localStorage.getItem("theme");
  if (theme && isTheme(theme)) return theme;
  return ThemeEnum.SYSTEM;
}

export function getResolvedTheme(theme: ThemeEnum) {
  if (theme === "SYSTEM") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? ResolvedThemeEnum.DARK
      : ResolvedThemeEnum.LIGHT;
  }
  return theme === ThemeEnum.DARK
    ? ResolvedThemeEnum.DARK
    : ResolvedThemeEnum.LIGHT;
}

export function setThemeInLocalStorage(theme: ThemeEnum) {
  localStorage.setItem("theme", theme);
}

export interface ThemeContext {
  theme: ThemeEnum;
  resolvedTheme: ResolvedThemeEnum;
  setTheme: (theme: ThemeEnum) => void;
}

const theme = getThemeFromLocalStorage();

export const ThemeContext = createContext<ThemeContext>({
  theme,
  resolvedTheme: getResolvedTheme(theme),
  setTheme: () => undefined,
});

export interface ThemeContextProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [value, setValue] = useState(getThemeFromLocalStorage());

  const resolvedTheme = useMemo(() => getResolvedTheme(value), [value]);

  const setTheme = useCallback((theme: ThemeEnum) => {
    setValue(theme);
    setThemeInLocalStorage(theme);
  }, []);

  useEffect(() => {
    if (resolvedTheme === ResolvedThemeEnum.DARK) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const ac = new AbortController();

    const nextThemeValue =
      resolvedTheme === ResolvedThemeEnum.DARK
        ? ThemeEnum.LIGHT
        : ThemeEnum.DARK;

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        document.documentElement.classList.add("switching-theme");
        setValue(nextThemeValue);
        setThemeInLocalStorage(nextThemeValue);
      }
    };

    const up = (e: KeyboardEvent) => {
      if (document.documentElement.classList.contains("switching-theme")) {
        e.preventDefault();
        document.documentElement.classList.remove("switching-theme");
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });
    document.addEventListener("keyup", up, { signal: ac.signal });

    return () => ac.abort();
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: value,
        resolvedTheme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
