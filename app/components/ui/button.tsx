import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, RefObject } from "react";

import { cn } from "../../lib/helpers";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[text-decoration-line,background,color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover-available:hover:bg-primary/90 hover-unavailable:active:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover-available:hover:bg-destructive/90 hover-unavailable:active:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover-available:hover:bg-accent hover-available:hover:text-accent-foreground hover-unavailable:active:bg-accent hover-unavailable:active:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover-available:hover:bg-input/50 dark:hover-unavailable:active:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover-available:hover:bg-secondary/80 hover-unavailable:active:bg-secondary/80",
        ghost:
          "hover-available:hover:bg-accent hover-unavailable:active:bg-accent hover-available:hover:text-accent-foreground hover-unavailable:active:text-accent-foreground dark:hover-available:hover:bg-accent/50 dark:hover-unavailable:active:bg-accent/50",
        link: "text-primary no-underline underline-offset-4 hover-available:hover:underline hover-unavailable:active:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: RefObject<HTMLButtonElement | null>;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
