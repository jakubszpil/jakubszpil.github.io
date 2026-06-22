---
name: app-patterns
description: Project-local React, React Router, UI, styling, and hook conventions for this repo. Use when implementing or modifying app/core, app/blog, app/learning, app/portfolio, app/shared, route modules, loaders, metadata, shared UI, Tailwind styling, or app hooks.
---

# App Patterns

Use this skill for implementation work in the React app.

## Structure

- Domain folders are `app/core`, `app/blog`, `app/learning`, and `app/portfolio`.
- Shared primitives, hooks, content helpers, and utilities live in `app/shared`.
- Within domains, follow the current folders: `feature`, `ui`, `data-access`, nearby `__tests__`, and `test-fixtures.ts` where applicable.
- Use the actual repo structure, not stale `.github` references to `app/components`, `app/hooks`, `app/lib`, or `app/content`.
- Use relative imports as the codebase currently does; `~/*` is not active in `tsconfig.json`.

## React And TypeScript

- Use function components and explicit prop types.
- Keep render logic readable and data loading outside component bodies.
- Prefer flat, explicit code over new abstractions.
- Avoid `any` unless there is a narrow local reason.
- Add comments only for invariants, assumptions, or non-obvious external constraints.
- Add shared utilities only when at least two call sites benefit or an existing pattern clearly calls for it.

## Routing And Data

- Add routes in the relevant domain `routes.ts`.
- Use `defineRoutes` from `app/shared/utils/routing`.
- Route modules should export `loader` for data and `meta` via `createMetaTags` when page metadata matters.
- Use `useLoaderData<typeof loader>()` in route components.
- Use `notFound()` or existing route error helpers for missing route data.
- Prefer `LinkWithPrefetch` for internal navigation where existing code uses prefetching.
- Keep content loading in domain `data-access` modules and reuse `app/shared/data-access/content.ts`.
- If new dynamic content pages are introduced, check `react-router.config.ts` prerender paths.

## UI And Styling

- Reuse `app/shared/ui` components before creating new primitives.
- Use Tailwind utilities and theme tokens from `app/styles.css`.
- Use `cn` from `app/shared/utils/helpers` for class merging.
- Use CVA for reusable variants when a component has meaningful style variants.
- Follow existing Radix UI, Base UI, and shadcn-style patterns.
- Preserve accessibility: semantic HTML, labels, keyboard behavior, focus-visible states, and ARIA only when appropriate.
- Keep light and dark modes working; prefer tokenized colors over hardcoded color values.

## Hooks

- Shared hooks live under `app/shared/data-access`.
- Hook names start with `use` and should have one clear responsibility.
- Clean up effects that register listeners, timers, or subscriptions.
- Do not add `useMemo` or `useCallback` unless there is a concrete cost or identity requirement.

## Safety

- Do not rewrite unrelated files.
- Do not commit generated output such as `dist/`, caches, or dependency folders.
- Preserve user changes in the working tree.
