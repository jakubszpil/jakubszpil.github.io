---
name: react-components
description: Conventions for creating feature and layout components in /app/components/ with composition, props typing, and reusability
---

# React Components Skill

## Scope

Feature and layout components in `/app/components/` (e.g. `Navbar`, `Footer`, `ArticleCard`, `Layout`). These are composite components that:

- Combine smaller UI components (from `/app/components/ui/`)
- Contain business logic or layout logic
- Are **not** atomic UI primitives or route/page components

## When to Use

Use feature components when you need to:

- Compose multiple UI components into a larger feature (e.g. navigation bar, article card)
- Encapsulate business or layout logic
- Provide a reusable section of the app (e.g. header, footer, cards)

## Conventions

- **Functional components**: Always use function components, never classes. Use `export default` unless there is a strong reason for named export.
- **Typed Props**: Define a TypeScript `Props` interface for every component. All props must be explicitly typed.
- **Composition**: Use UI components from `/app/components/ui/` for building blocks.
- **Separation of concerns**: Place logic in custom hooks (`/app/hooks/`), keep render logic in the component.
- **Prop drilling vs context**: Prefer passing props directly (prop drilling) for up to 2-3 levels. Use React context only for truly global/shared state.

## Practical Guidelines

- **Composition over inheritance**: Always compose components, never use inheritance.
- **Props interface**: Always typed, use descriptive prop names (e.g. `article`, `children`, `variant`).
- **Memoization**: Use `React.memo` or `useMemo` only for expensive computations or large lists. Most feature components do **not** need memoization.
- **Children pattern**: Use `children: React.ReactNode` for wrapper/layout components.
- **Accessibility**: Use semantic HTML elements (`header`, `footer`, `nav`, `main`, etc.) and ARIA attributes as needed.

## Examples

### ArticleCard (composite component)

```tsx
export interface ArticleCardProps {
  article: ArticleFeed;
  variant?: ButtonProps["variant"];
}

export function ArticleCard({ article, variant }: ArticleCardProps) {
  return (
    <Button asChild variant={variant ?? "outline"}>
      <LinkWithPrefetch to={`/blog/${article.slug}`}>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <Banner
          createdAt={article.createdAt}
          readingTime={article.readingTime}
        />
      </LinkWithPrefetch>
    </Button>
  );
}
```

### Navbar (feature component with logic)

```tsx
export interface NavbarProps {
  children: ReactElement<NavbarLinkProps | NavbarMenuProps>[];
}

export function Navbar({ children }: NavbarProps) {
  return (
    <header>
      <div>{children}</div>
    </header>
  );
}
```

### Layout (wrapper component)

```tsx
export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <main>{children}</main>;
}
```

## Anti-patterns

- Hardcoded styles inside the component (use Tailwind/CVA instead)
- Prop drilling through more than 3 levels (consider context)
- Missing or `any` typed props
- Side effects (e.g. data fetching, subscriptions) directly in render (move to hooks)

---

Stosuj te zasady, aby komponenty były czytelne, reużywalne i łatwe w utrzymaniu.
