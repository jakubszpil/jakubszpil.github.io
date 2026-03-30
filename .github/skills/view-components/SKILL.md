---
name: view-components
description: Conventions for page-level components in /app/routes/ with loaders, meta exports, and error handling
---

# Skill: View Components in /app/routes/

## Overview

## Project Conventions

## Practical Guidelines

### Data Loading with loader()

### SEO Meta Tags

### Error Handling

## Examples

### Example 1: Home Route

```typescript
export async function loader() {
  const articles = await getArticles(3);
  const courses = await getCourses(3);
  const projects = await getProjects(3);
  return { articles, courses, projects };
}

export const meta = createMetaTags<typeof loader>(() => ({
  title: "Strona główna",
  description: "...",
  keywords: ["blog", "portfolio", ...],
}));

export default function Home() {
  const data = useLoaderData<typeof loader>();
  // ...render UI
}
```

### Example 2: Article Detail Route

```typescript
export async function loader({ params: { slug } }) {
  const article = await getArticle(slug);
  if (!article) throw notFound();
  return article;
}

export const meta = createMetaTags<typeof loader>(
  ({ loaderData: article }) => ({
    title: article?.title,
    description: article?.description,
    keywords: article?.keywords,
    publishedTime: article?.createdAt,
    type: "article",
  }),
);
```

## Anti-Patterns

## Quick Checklist
