---
name: custom-hooks
description: Conventions for creating custom React hooks with proper typing, cleanup, and single responsibility
---

# Skill: Custom React Hooks in /app/hooks/

## Overview

## Project Conventions

## Practical Guidelines

### Naming & Typing

### Separation of Concerns

### Cleanup & Effects

## Examples

### Example 1: useTheme Hook

```typescript
export function useTheme() {
  const hydrated = useHydrated();
  // ...logic
  return theme;
}
```

### Example 2: useHydrated Hook

```typescript
export function useHydrated() {
  // ...logic
  return hydrated && initialized;
}
```

### Example 3: usePrefetchLink Hook

```typescript
export function usePrefetchLink(resource?: string) {
  const hydrated = useHydrated();
  if (!hydrated || !resource) return null;
  return createElement("link", {
    rel: "prefetch",
    as: "fetch",
    href: resource,
  });
}
```

## Anti-Patterns

- ❌ No cleanup for side effects (memory leaks)
- ❌ Overusing `useCallback`/`useMemo` without need
- ❌ Hooks with multiple unrelated responsibilities

## Quick Checklist

- [ ] Name starts with `use`
- [ ] Typed returns/args
- [ ] Single responsibility
- [ ] Cleanup side effects
- [ ] Compose hooks when needed
