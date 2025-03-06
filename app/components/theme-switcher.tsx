import {
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
  type Icon,
} from "@tabler/icons-react";
import { useMemo } from "react";

import { useTheme } from "@/hooks/use-theme";
import { ResolvedTheme, Theme } from "@/lib/theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const icons: Record<ResolvedTheme, Icon> = {
  [ResolvedTheme.LIGHT]: IconSun,
  [ResolvedTheme.DARK]: IconMoonStars,
};

export default function ThemeSwitcher() {
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
        <Button title="Zmień motyw" size="icon" variant="ghost">
          <Icon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Wybierz motyw</DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <IconSun className="mr-2" /> Jasny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(Theme.DARK)}
        >
          <IconMoonStars className="mr-2" /> Ciemny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(Theme.SYSTEM)}
        >
          <IconDeviceDesktop className="mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
