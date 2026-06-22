---
name: content
description: Project-local rules for creating or editing Markdown content in this repo. Use when working with content/articles, content/courses, or content/projects, including frontmatter, Polish public copy, course quizzes, project metadata, and content-driven route implications.
---

# Content

Use this skill for Markdown content changes in `content/articles`, `content/courses`, and `content/projects`.

## General Rules

- Keep public-facing content in Polish unless the user asks for another language.
- Use stable kebab-case filenames; the filename without `.md` becomes the slug.
- Keep frontmatter complete and aligned with the relevant `app/*/data-access/*.ts` parser.
- Do not hardcode environment-specific paths or local URLs in content.
- Use fenced code blocks with language identifiers for examples.
- Prefer H2/H3 section structure inside content bodies. Avoid adding an H1 unless an existing content pattern requires it.

## Articles

Place articles in `content/articles`.

Required frontmatter:

```yaml
---
title: "Tytuł artykułu"
description: "Krótki opis artykułu."
keywords: [typescript, react]
category: frontend
createdAt: 2026-06-22
---
```

Notes:

- `createdAt` is parsed with `new Date(...)` and rendered as ISO internally.
- `keywords` must be an array of strings.
- `category` is used for category pages and sorting by occurrence.

## Courses

Place courses in `content/courses`.

Required frontmatter:

```yaml
---
title: "Tytuł kursu"
description: "Krótki opis kursu."
keywords: [typescript, react]
category: frontend
createdAt: 2026-06-22
quiz:
  title: "Quiz"
  questions:
    - question: "Treść pytania?"
      options:
        - "Poprawna odpowiedź"
        - "Druga odpowiedź"
        - "Trzecia odpowiedź"
        - "Czwarta odpowiedź"
      answer: 0
      explanation: "Dlaczego ta odpowiedź jest poprawna."
---
```

Notes:

- Each quiz question should have exactly 4 options.
- `answer` is the zero-based index before runtime shuffling.
- `question` is processed as Markdown, so code snippets and emphasis are allowed when useful.
- Keep quiz questions clear, non-ambiguous, and focused on the course material.

## Projects

Place projects in `content/projects`.

Required frontmatter:

```yaml
---
title: "Nazwa projektu"
description: "Krótki opis projektu."
createdAt: 2026-06-22
categories: [react, typescript]
status: COMPLETED
---
```

Notes:

- `categories` are exposed as project technologies.
- `status` must match `ProjectStatus`: `IDLE`, `IN_PROGRESS`, or `COMPLETED`.
- Project body content is currently not rendered by the parser; metadata drives project feeds.

## Route Awareness

- New articles, courses, categories, and technologies affect prerendered pages through `react-router.config.ts`.
- If content shape changes, update the matching `data-access` parser and tests instead of patching content around parser assumptions.
