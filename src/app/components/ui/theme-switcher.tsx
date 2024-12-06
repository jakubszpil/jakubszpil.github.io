import { useMemo } from "react";
import {
  Icon,
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
} from "@tabler/icons-react";

import { ResolvedThemeEnum, ThemeEnum, useTheme } from "~/lib/theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button";

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
        <Button title="Zmień motyw (CTRL+J)" size="icon" variant="ghost">
          <Icon className="h-6" />
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
