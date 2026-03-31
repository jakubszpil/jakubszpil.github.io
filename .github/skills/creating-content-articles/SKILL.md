---
name: creating-content-articles
description: Creating and managing article content in /app/content/articles/
---

# Creating Article Content Files

## Overview

Article content files are Markdown documents used to publish articles in the portfolio. Each article is stored as a Markdown file with structured frontmatter metadata for discoverability and organization.

## Scope

Use this skill when creating or updating articles for the portfolio website. Applies to all content in `/app/content/articles/`.

## File Location

- All article files must be placed in `/app/content/articles/`.

## Naming Convention

- Use **kebab-case** for filenames (e.g., `my-first-article.md`).
- Filenames may use Polish or English characters.

## Frontmatter Format

Each article must begin with YAML frontmatter containing the following fields:

```yaml
title: "Article Title" # String, required
description: "Short summary." # String, required
category: "typescript" # String, required (e.g., 'typescript', 'react')
keywords: ["keyword1", "keyword2"] # Array<string>, required
createdAt: "2026-03-31" # YYYY-MM-DD, required
```

## Practical Guidelines

- **File naming:** Use kebab-case, avoid spaces and special symbols except Polish/English letters.
- **Markdown structure:**
  - Start with an H2 heading (`##`) for the main sections.
  - Use H3 (`###`) for subsections.
  - Keep heading hierarchy logical and consistent.
- **Content length:** Aim for articles that take 3–10 minutes to read (approx. 500–2000 words).
- **Code examples:**
  - Use fenced code blocks with language identifier (e.g., ` ```ts ` for TypeScript).
  - Example:
    ```ts
    function greet(name: string) {
      return `Hello, ${name}!`;
    }
    ```
- **No hardcoded paths or metadata:**
  - Do not include absolute URLs or environment-specific data in articles.

## Examples

### Example Article Frontmatter

```yaml
title: "Dependency Injection kontra TypeScript"
description: "Porównanie podejść do dependency injection w TypeScript."
category: "typescript"
keywords: ["typescript", "dependency injection", "wzorce projektowe"]
createdAt: "2026-03-31"
```

### Example File Structure

```markdown
---
title: "Dependency Injection kontra TypeScript"
description: "Porównanie podejść do dependency injection w TypeScript."
category: "typescript"
keywords: ["typescript", "dependency injection", "wzorce projektowe"]
createdAt: "2026-03-31"
---

## Wprowadzenie

Krótki opis tematu artykułu.

## Główna część

### Sekcja 1

Treść sekcji...

### Sekcja 2

Treść sekcji...

## Podsumowanie

Wnioski i dalsze kroki.
```

## Anti-Patterns

- Using camelCase or snake_case for filenames
- Missing required frontmatter fields
- Using H1 (`#`) headings in the article body
- Hardcoding URLs, file paths, or environment-specific data
- Inconsistent heading hierarchy

## Quick Checklist

- [ ] File is in `/app/content/articles/`
- [ ] Filename is kebab-case
- [ ] All required frontmatter fields are present
- [ ] Headings use H2/H3 hierarchy
- [ ] No hardcoded paths or metadata
- [ ] Code blocks use correct language identifier
- [ ] Article length is appropriate
