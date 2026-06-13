import { InlineScript } from "./inline-script";

export function ThemeInjector() {
  return (
    <InlineScript
      code={`
				let k = "theme";
				let t = "dark";
				let s = localStorage;
				let c = document.documentElement.classList;
				let v = s.getItem(k);
				if (v === null || v === "SYSTEM") 
					matchMedia("(prefers-color-scheme: dark)").matches
						? c.add(t)
						: c.remove(t);
				else if (v === "DARK") c.add(t);
				else if (v === "LIGHT") c.remove(t);
				else s.removeItem(k);
			`}
    />
  );
}
