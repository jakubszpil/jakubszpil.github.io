import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  Icon,
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
} from "@tabler/icons-react";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui";

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
  }, [resolvedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
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

const icons: Record<ResolvedThemeEnum, Icon> = {
  LIGHT: IconSun,
  DARK: IconMoonStars,
};

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const Icon = useMemo(() => icons[resolvedTheme], [resolvedTheme]);

  return (
    <DropdownMenu
      onOpenChange={(value) => {
        if (value) document.documentElement.classList.add("switching-theme");
        else document.documentElement.classList.remove("switching-theme");
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button title="Zmień motyw" size="icon" variant="ghost">
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Wybierz motyw</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(ThemeEnum.LIGHT)}
        >
          <IconSun className="mr-2" /> Jasny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(ThemeEnum.DARK)}
        >
          <IconMoonStars className="mr-2" /> Ciemny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(ThemeEnum.SYSTEM)}
        >
          <IconDeviceDesktop className="mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
