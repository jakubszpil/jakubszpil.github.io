# Copilot Instructions — Portfolio React (React 19 + TypeScript + Vite + Tailwind)

## 1. Project Overview

Portfolio website built with React 19. Stack: React 19, TypeScript (strict), Vite, Tailwind CSS, Markdown (content). Purpose: project showcase, documentation, courses.

## 2. Project Structure

- `/app/routes/` — Pages (React Router 7, static generation)
- `/app/components/` — React components (UI, layout, feature)
- `/app/components/ui/` — Reusable UI components (Radix UI based)
- `/app/hooks/` — Custom React hooks
- `/app/lib/` — Utility functions (articles, courses, projects, content processing)
- `/app/content/` — Markdown files (articles, courses, projects)
- `/__tests__/` — Unit tests (Vitest, React Testing Library)

## 3. Technology Stack

- **Frontend:** React 19, TypeScript (strict mode), React Router 7
- **Build:** Vite, Babel React Compiler
- **Styling:** Tailwind CSS, class-variance-authority (CVA), clsx, tailwind-merge
- **UI:** Radix UI, Headless UI
- **Content:** Markdown (gray-matter, remark/rehype)
- **Testing:** Vitest, @testing-library/react, happy-dom
- **Build output:** `/dist/client`

## 4. Coding Conventions

- **TypeScript:** Strict mode (no implicit any), explicit types on functions/variables, path aliases `~/`
- **React Components:** Functional components, typed Props interface, memoization when needed
- **File Naming:** kebab-case for files (`my-component.tsx`), PascalCase for exports (`MyComponent`)
- **Styling:** Tailwind utility classes, CVA for component variants
- **Code Structure:** Flat structure, linear control flow, avoid deep nesting
- **Error Handling:** Explicit and informative error messages
- **Imports:** Use path aliases `~/*` for cleaner imports

## 5. Testing Guidelines

- **Test tool:** Vitest + React Testing Library
- **Test location:** Co-located in `__tests__/` folder next to source files
- **Philosophy:** Test user interactions, not implementation details
- **Run:** `npm run test`

## 6. Content Management (Markdown)

- Markdown files in `/app/content/{articles|courses|projects}/`
- Gray-matter frontmatter format for metadata (title, description, date, keywords, etc.)
- Remark/Rehype plugins for processing
- Utilities in `/app/lib/` for content loading and parsing

## 7. Development Workflow

- `npm run dev` — Development server (Vite, port 5173)
- `npm run build` — Production build (typecheck + build to `/dist/client`)
- `npm run test` — Run tests (Vitest)
- `npm run deploy` — Full CI pipeline (typecheck + test + build)

## 8. Key Principles

- **Structure:** Predictable, feature-grouped, flat layout
- **Architecture:** Minimal coupling, explicit code, no hidden dependencies
- **Performance:** Use React Compiler benefits, memoize when necessary
- **Type Safety:** Strict TypeScript, no `any` without reason
- **Accessibility:** Semantic HTML, ARIA attributes via Radix UI

## 9. Git & Deployment

- Deployment via GitHub Actions (`deploy.yml`)
- Environment: Production build to `/dist/client`
- Never commit build artifacts

## 10. Important Notes

- React Compiler enabled in Babel config
- SSR is disabled (static generation via React Router)
- No implicit any in TypeScript
- Tailwind CSS integrated via @tailwindcss/vite
- Dark mode support in components (if used)
