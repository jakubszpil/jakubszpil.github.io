import type { ButtonHTMLAttributes, RefObject } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover-available:hover:bg-primary/90 hover-unavailable:active:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover-available:hover:bg-destructive/90 hover-unavailable:active:bg-destructive/90",
        outline:
          "border border-input bg-background hover-available:hover:bg-accent hover-available:hover:text-accent-foreground hover-unavailable:active:bg-accent hover-unavailable:active:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover-available:hover:bg-secondary/80 hover-unavailable:active:bg-secondary/80",
        ghost:
          "hover-available:hover:bg-accent hover-available:hover:text-accent-foreground hover-unavailable:active:bg-accent hover-unavailable:active:text-accent-foreground",
        link: "text-primary no-underline underline-offset-4 hover-available:hover:underline hover-unavailable:active:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: RefObject<HTMLButtonElement | null>;
}

const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

export { Button, buttonVariants };
