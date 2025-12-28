import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
  IconSunMoon,
} from "@packages/shared";

import { useTheme } from "../data-access/use-theme";
import { performThemeChange, Theme } from "../utils/theme";

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
