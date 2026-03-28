import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useMemo } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useTheme } from "~/hooks/use-theme";
import { Theme } from "~/lib/theme";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();

  const sonnerTheme = useMemo((): ToasterProps["theme"] => {
    switch (theme) {
      case Theme.DARK:
        return "dark";
      case Theme.LIGHT:
        return "light";
      default:
        return "system";
    }
  }, [theme]);

  return (
    <Sonner
      theme={sonnerTheme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
