---
name: ui-components
description: Creating reusable UI components in /app/components/ui/ with CVA, Radix UI, and Tailwind CSS
---

# Skill: UI Components in /app/components/ui/

## Overview

## Project Conventions

## Practical Guidelines

### Variants with CVA

### Typing and Composition

### Styling

## Examples

### Example 1: Button with Variants

```typescript
const buttonVariants = cva(
  "inline-flex items-center ...",
  {
    variants: {
      variant: { default: "bg-primary ...", destructive: "bg-destructive ..." },
      size: { default: "h-9 px-4 ...", sm: "h-8 ..." },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({ className, variant = "default", size = "default", asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
```

### Example 2: Badge Component

```typescript
const badgeVariants = cva("inline-flex ...", { ... });
function Badge({ className, variant = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : "span";
  return <Comp className={cn(badgeVariants({ variant, className }))} {...props} />;
}
```

## Anti-Patterns

- ❌ Hardcoded color values (use Tailwind palette)
- ❌ Not using Radix UI for accessible primitives
- ❌ Duplicated logic for variants or styling

## Quick Checklist

- [ ] Use CVA for variants
- [ ] Typed props interface
- [ ] Use Radix UI where possible
- [ ] Use Tailwind palette
- [ ] No duplicated styling logic
