# Agent Instructions

## Project Snapshot

- Personal portfolio and learning site for Jakub Szpil.
- Stack: React 19, React Router 7, Vite, strict TypeScript, Tailwind CSS v4.
- Rendering: React Router static prerendering, with SSR disabled in `react-router.config.ts`.
- Content-driven sections: blog articles, learning courses, and portfolio projects.
- User-facing content is Polish by default. Keep Polish copy unless the user asks otherwise.

## Commands

- `npm run dev` - start the Vite dev server.
- `npm run typecheck` - run TypeScript checks with `tsgo --noEmit`.
- `npm run test` - run all Vitest tests.
- `npm run test:ci` - run CI-style tests.
- `npm run build` - build the static site into `build/client`.
- `npm run deploy` - run typecheck, tests, and build.

## Current Structure

- `app/core` - app shell, layout, home, search, about, not-found, shared core UI.
- `app/blog` - article routes, data access, feature views, UI, and fixtures.
- `app/learning` - course routes, data access, feature views, UI, and fixtures.
- `app/portfolio` - project routes, data access, feature views, UI, and fixtures.
- `app/shared` - reusable UI primitives, hooks/data-access helpers, and utilities.
- `content/articles`, `content/courses`, `content/projects` - Markdown source content.
- `public` - static assets such as fonts, favicon, and robots file.

Prefer the current domain layout above. Some `.github` instructions mention older paths such as `app/components`, `app/hooks`, `app/lib`, or `app/content`; treat those as stale when they conflict with the actual repo.

## Coding Conventions

- Follow existing feature structure: `feature`, `ui`, `data-access`, nearby `__tests__`, and `test-fixtures.ts` where applicable.
- Use strict TypeScript. Avoid `any` unless there is a clear, local reason.
- Keep components functional and props explicitly typed.
- Prefer flat, explicit code over clever abstractions or deep hierarchies.
- Use existing helpers and primitives before adding new ones.
- Use relative imports as the codebase currently does; the `~/*` path alias is not active in `tsconfig.json`.
- Keep comments sparse. Add them only for invariants, assumptions, or non-obvious external constraints.

## Routing And Data

- Add routes in the relevant domain `routes.ts` using `defineRoutes` from `app/shared/utils/routing`.
- Route modules should use `loader` for data, `meta` via `createMetaTags`, and `useLoaderData` in components.
- Prefer `LinkWithPrefetch` for internal navigation where existing code uses prefetching.
- Do not fetch content directly in component render bodies.
- Content loaders live in domain `data-access` folders and should reuse shared content utilities from `app/shared/data-access/content.ts`.
- Keep prerender implications in mind: new content-driven routes may need updates in `react-router.config.ts`.

## UI And Styling

- Reuse `app/shared/ui` components before creating new primitives.
- Use Tailwind utilities, project theme tokens from `app/styles.css`, and `cn` from `app/shared/utils/helpers`.
- Use CVA for reusable component variants when a component has meaningful variants.
- Follow existing Radix UI, Base UI, and shadcn-style component patterns.
- Preserve accessibility: semantic HTML, keyboard support, labels, focus states, and ARIA only where appropriate.
- Keep light and dark modes working; prefer tokenized colors over hardcoded color values.

## Markdown Content

- Keep frontmatter complete and consistent with the relevant data-access parser.
- Article frontmatter requires: `title`, `description`, `createdAt`, `category`, and `keywords`.
- Courses and projects have their own parser expectations; inspect their `data-access` files before adding content.
- Slugs come from Markdown filenames, so use stable kebab-case filenames.
- Content pages are Polish unless the user explicitly requests another language.

## Testing

- Tests use Vitest, React Testing Library, and happy-dom.
- Test files live in nearby `__tests__` folders and use `.test.ts` or `.test.tsx`.
- Prefer testing observable behavior and route output over implementation details.
- Mock data-access modules and child UI components in the same style as existing tests.
- Run focused tests when possible, then broader checks for shared behavior.

## Safety Rules

- Do not rewrite unrelated files.
- Do not rely on stale `.github` path references when actual repo structure differs.
- Do not commit or intentionally modify generated output such as `build/`, caches, or dependency folders.
- Do not run destructive commands unless the user explicitly asks for them.
- Preserve user changes in the working tree. If unrelated changes appear, leave them alone.
