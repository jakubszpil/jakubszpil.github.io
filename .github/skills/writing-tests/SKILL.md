---
name: writing-tests
description: Guidelines for testing React components and hooks with Vitest and React Testing Library
---

# Skill: Writing Tests for React Components & Hooks

## Overview

## Project Conventions

## Practical Guidelines

### Component Testing

### Hook Testing

### Setup & Utilities

## Examples

### Example 1: Testing a UI Component

```typescript
import { render, screen } from "@testing-library/react";
import { ArticleCard } from "../article-card";
import { vi } from "vitest";

vi.mock("../ui/link-with-prefetch");
vi.mock("../banner");

test("renders article data", () => {
  render(<ArticleCard article={MOCKED_ARTICLE_FEED} />);
  expect(screen.getByText(MOCKED_ARTICLE_FEED.title)).toBeInTheDocument();
});
```

### Example 2: Testing a Custom Hook

```typescript
import { renderHook } from "@testing-library/react";
import { useTheme } from "~/hooks/use-theme";

test("returns current theme", () => {
  const { result } = renderHook(() => useTheme());
  expect(result.current).toMatch(/light|dark|system/);
});
```

## Anti-Patterns

- ❌ Testing classNames or internal implementation details
- ❌ Writing tests that break on refactor (flaky tests)
- ❌ Not mocking external dependencies

## Quick Checklist

- [ ] Test user-visible behavior
- [ ] Mock dependencies as needed
- [ ] Use `__tests__/` for test files
- [ ] Avoid implementation details
- [ ] Cover edge cases and interactions
