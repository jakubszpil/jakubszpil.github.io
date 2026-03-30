---
name: styling
description: Styling conventions using Tailwind CSS, CVA, Radix UI, dark mode, and responsive design
---

# Skill: Styling (Tailwind, CVA, Radix UI, Dark Mode)

## Overview

## Project Conventions

## Practical Guidelines

### Tailwind & CVA

### Radix UI & Accessibility

### Dark Mode

## Examples

### Example 1: Button with CVA

```typescript
const buttonVariants = cva(
  "inline-flex items-center ...",
  {
    variants: { variant: { default: "bg-primary ..." }, size: { sm: "h-8 ..." } },
    defaultVariants: { variant: "default", size: "default" },
  },
);
function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
```

### Example 2: Card Component

```typescript
function Card({ className, ...props }) {
  return <div className={cn("bg-card ... rounded-xl ...", className)} {...props} />;
}
```

### Example 3: Responsive Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* ... */}
</div>
```

## Anti-Patterns

## Quick Checklist
