const key = "theme";
const token = "dark";
const storage = localStorage;
const classList = document.documentElement.classList;
const value = storage.getItem(key);

switch (value) {
  case "DARK": {
    classList.add(token);
    break;
  }
  case "LIGHT": {
    classList.remove(token);
    break;
  }
  case "SYSTEM":
  case null: {
    matchMedia("(prefers-color-scheme: dark)").matches
      ? classList.add(token)
      : classList.remove(token);
    break;
  }

  default: {
    storage.removeItem(key);
  }
}
