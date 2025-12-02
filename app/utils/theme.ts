export enum Theme {
  SYSTEM = "SYSTEM",
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export enum ResolvedTheme {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export function isTheme(value: unknown): value is Theme {
  return Object.values(Theme).includes(value as Theme);
}

export function setLocalStorageTheme(theme: Theme) {
  localStorage.setItem("theme", theme);
}

export function getLocalStorageTheme(): Theme {
  const value = localStorage.getItem("theme");

  if (isTheme(value)) {
    return value;
  }

  localStorage.removeItem("theme");

  return Theme.SYSTEM;
}

export function isDarkThemeFromClassName(): boolean {
  const className = document.documentElement.className;

  return className.includes("dark");
}

export function getTheme(): Theme {
  if (isDarkThemeFromClassName()) return Theme.DARK;

  return getLocalStorageTheme();
}

export function getResolvedTheme(theme: Theme | null): ResolvedTheme | null {
  switch (theme) {
    case null: {
      return null;
    }
    case Theme.DARK:
      return ResolvedTheme.DARK;
    case Theme.LIGHT:
      return ResolvedTheme.LIGHT;
    case Theme.SYSTEM: {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      return matches ? ResolvedTheme.DARK : ResolvedTheme.LIGHT;
    }
  }
}

export function removeDarkThemeClassName() {
  document.documentElement.classList.remove("dark");
}

export function appendDarkThemeClassName() {
  document.documentElement.classList.add("dark");
}

export function initializeThemeSwitching() {
  document.documentElement.classList.add("switching-theme");
}

export function finalizeThemeSwitching() {
  document.documentElement.classList.remove("switching-theme");
}

export function toggleThemeClassName(resolvedTheme: ResolvedTheme | null) {
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
}

export function performThemeChange(callback: () => void) {
  initializeThemeSwitching();
  callback();
  setTimeout(() => finalizeThemeSwitching());
}

export function handleSystemThemeChange({ matches }: MediaQueryListEvent) {
  performThemeChange(() => {
    if (matches) {
      appendDarkThemeClassName();
    } else {
      removeDarkThemeClassName();
    }
  });
}

export function mapResolvedThemeIntoTheme(
  resolvedTheme: ResolvedTheme | null
): Theme {
  switch (resolvedTheme) {
    case null: {
      return Theme.SYSTEM;
    }

    case ResolvedTheme.LIGHT: {
      return Theme.LIGHT;
    }

    case ResolvedTheme.DARK: {
      return Theme.DARK;
    }
  }
}
