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

export function getTheme(): Theme {
  const value = localStorage.getItem("theme");

  if (isTheme(value)) {
    return value;
  }

  localStorage.removeItem("theme");

  return Theme.SYSTEM;
}

export function getResolvedTheme(theme: Theme): ResolvedTheme {
  switch (theme) {
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

export function setTheme(theme: Theme) {
  console.log(theme);
  localStorage.setItem("theme", theme);
}
