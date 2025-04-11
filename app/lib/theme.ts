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

export function isDarkThemeFromClassName(): boolean {
  const className = document.documentElement.className;

  return className.includes("dark");
}

export function getTheme(): Theme {
  if (isDarkThemeFromClassName()) {
    return Theme.DARK;
  }

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
  localStorage.setItem("theme", theme);
}

export async function injectTheme() {
  document.documentElement.classList.add("switching-theme");

  const theme = localStorage.getItem("theme");

  switch (theme) {
    case "DARK": {
      document.documentElement.classList.add("dark");
      break;
    }

    case "LIGHT": {
      document.documentElement.classList.remove("dark");
      break;
    }

    case "SYSTEM":
    case null: {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");

      if (matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      break;
    }

    default: {
      localStorage.removeItem("theme");
    }
  }

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      document.documentElement.classList.remove("switching-theme");
      resolve();
    }, 100);
  });
}
