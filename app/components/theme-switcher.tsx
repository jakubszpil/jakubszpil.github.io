import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
  IconSunMoon,
} from "./ui/icons";
import { useTheme } from "../hooks/use-theme";
import { performThemeChange, Theme } from "../lib/theme";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: Theme) =>
    performThemeChange(() => setTheme(theme));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          title="Zmień motyw"
          size="icon"
          variant="ghost"
          className="cursor-pointer"
        >
          <IconSunMoon className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Wybierz motyw</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleThemeChange(Theme.LIGHT)}
        >
          <IconSun className="size-6 mr-2" /> Jasny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleThemeChange(Theme.DARK)}
        >
          <IconMoonStars className="size-6 mr-2" /> Ciemny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleThemeChange(Theme.SYSTEM)}
        >
          <IconDeviceDesktop className="size-6 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
