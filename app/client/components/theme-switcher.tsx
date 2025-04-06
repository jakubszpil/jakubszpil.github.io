import {
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
  IconSunMoon,
} from "@tabler/icons-react";

import { useTheme } from "~/shared/hooks/use-theme";
import { Theme } from "~/shared/lib/theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/shared/components/ui/dropdown-menu";
import { Button } from "~/shared/components/ui/button";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu
      onOpenChange={(value) => {
        if (value) document.documentElement.classList.add("switching-theme");
        else document.documentElement.classList.remove("switching-theme");
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button title="Zmień motyw" size="icon" variant="ghost">
          <IconSunMoon />
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
