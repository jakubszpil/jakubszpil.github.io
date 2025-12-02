import { useTheme } from "../data-access/use-theme";
import { Theme } from "../utils/theme";
import { Button } from "../../shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../shared/ui/dropdown-menu";
import {
  IconDeviceDesktop,
  IconMoonStars,
  IconSun,
  IconSunMoon,
} from "../../shared/ui/icons";

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
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <IconSun className="size-6 mr-2" /> Jasny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(Theme.DARK)}
        >
          <IconMoonStars className="size-6 mr-2" /> Ciemny
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme(Theme.SYSTEM)}
        >
          <IconDeviceDesktop className="size-6 mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
