import {
  MonitorSmartphoneIcon,
  MoonStarIcon,
  SunIcon,
  SunMoonIcon,
} from "lucide-react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";
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
          title="Zmień motyw ⌘J"
          size="icon"
          variant="ghost"
          className="cursor-pointer"
        >
          <SunMoonIcon className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Wybierz motyw</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleThemeChange(Theme.LIGHT)}
        >
          <SunIcon className="size-6 mr-2" /> Jasny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleThemeChange(Theme.DARK)}
        >
          <MoonStarIcon className="size-6 mr-2" /> Ciemny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => handleThemeChange(Theme.SYSTEM)}
        >
          <MonitorSmartphoneIcon className="size-6 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
