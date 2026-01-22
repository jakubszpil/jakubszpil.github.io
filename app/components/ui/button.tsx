import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, RefObject } from "react";

import { cn } from "../../lib/helpers";

const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "button--variant-default",
      destructive: "button--variant-destructive",
      outline: "button--variant-outline",
      secondary: "button--variant-secondary",
      ghost: "button--variant-ghost",
      link: "button--variant-link",
    },
    size: {
      default: "button--size-default",
      sm: "button--size-sm",
      lg: "button--size-lg",
      icon: "button--size-icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

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
