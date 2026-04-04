---
name: routing
description: React Router 7 conventions including loaders, meta exports, and link prefetching
---

# Skill: Routing (React Router 7, Loaders, Meta, Prefetching)

## Overview

## Project Conventions

## Practical Guidelines

### Routing Configuration

### Loaders & Meta

### Prefetching

## Examples

### Example 1: Routing Config

```typescript
// react-router.config.ts
export const routes = [
  { path: "/", element: <Home /> },
  { path: "/blog/:slug", element: <ArticleDetail /> },
  // ...
];
```

### Example 2: Loader with Multiple Data Sources

```typescript
export async function loader() {
  const articles = await getArticles();
  const courses = await getCourses();
  return { articles, courses };
}
```

### Example 3: LinkWithPrefetch

```typescript
<LinkWithPrefetch to="/blog/123">Read more</LinkWithPrefetch>
```

## Anti-Patterns

- ❌ No loader or meta export in route
- ❌ Client-side data fetching in component body
- ❌ Not using prefetch for navigation links

## Quick Checklist

- [ ] Route defined in config
- [ ] Loader and meta exported
- [ ] useLoaderData used
- [ ] LinkWithPrefetch for navigation
- [ ] No client-side fetch in component
