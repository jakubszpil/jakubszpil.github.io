import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from "react";
import * as radix from "@radix-ui/react-dropdown-menu";
import { IconCheck, IconChevronRight, IconCircle } from "@tabler/icons-react";

import { cn } from "~/lib/utils";

const DropdownMenu = radix.Root;

const DropdownMenuTrigger = radix.Trigger;

const DropdownMenuGroup = radix.Group;

const DropdownMenuPortal = radix.Portal;

const DropdownMenuSub = radix.Sub;

const DropdownMenuRadioGroup = radix.RadioGroup;

const DropdownMenuSubTrigger = forwardRef<
  ElementRef<typeof radix.SubTrigger>,
  ComponentPropsWithoutRef<typeof radix.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <radix.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <IconChevronRight className="ml-auto h-4 w-4" />
  </radix.SubTrigger>
));
DropdownMenuSubTrigger.displayName = radix.SubTrigger.displayName;

const DropdownMenuSubContent = forwardRef<
  ElementRef<typeof radix.SubContent>,
  ComponentPropsWithoutRef<typeof radix.SubContent>
>(({ className, ...props }, ref) => (
  <radix.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = radix.SubContent.displayName;

const DropdownMenuContent = forwardRef<
  ElementRef<typeof radix.Content>,
  ComponentPropsWithoutRef<typeof radix.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <radix.Portal>
    <radix.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </radix.Portal>
));
DropdownMenuContent.displayName = radix.Content.displayName;

const DropdownMenuItem = forwardRef<
  ElementRef<typeof radix.Item>,
  ComponentPropsWithoutRef<typeof radix.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <radix.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = radix.Item.displayName;

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof radix.CheckboxItem>,
  ComponentPropsWithoutRef<typeof radix.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <radix.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <radix.ItemIndicator>
        <IconCheck className="h-4 w-4" />
      </radix.ItemIndicator>
    </span>
    {children}
  </radix.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = radix.CheckboxItem.displayName;

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof radix.RadioItem>,
  ComponentPropsWithoutRef<typeof radix.RadioItem>
>(({ className, children, ...props }, ref) => (
  <radix.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <radix.ItemIndicator>
        <IconCircle className="h-2 w-2 fill-current" />
      </radix.ItemIndicator>
    </span>
    {children}
  </radix.RadioItem>
));
DropdownMenuRadioItem.displayName = radix.RadioItem.displayName;

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof radix.Label>,
  ComponentPropsWithoutRef<typeof radix.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <radix.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = radix.Label.displayName;

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof radix.Separator>,
  ComponentPropsWithoutRef<typeof radix.Separator>
>(({ className, ...props }, ref) => (
  <radix.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = radix.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
