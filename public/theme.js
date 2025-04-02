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

setTimeout(() => {
  document.documentElement.classList.remove("switching-theme");
}, 100);
