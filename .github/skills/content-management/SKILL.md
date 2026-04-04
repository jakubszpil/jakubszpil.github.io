---
name: content-management
description: Managing Markdown content with frontmatter, gray-matter, and remark/rehype processing
---

# Skill: Content Management (Markdown)

## Overview

## Project Conventions

## Practical Guidelines

### Frontmatter Format

```yaml
---
title: Example Article
description: "Short summary."
keywords: [typescript, patterns]
category: typescript
createdAt: 2024-06-20
---
```

### Loading & Processing Content

## Examples

### Example 1: Article Frontmatter

```markdown
title: Dependency Injection in TypeScript
description: "How DI improves modularity and testability."
keywords: [typescript, patterns]
category: typescript
createdAt: 2024-06-20
```

### Example 2: Article Loader Utility

```typescript
async function parseArticle(slug: string, file: string): Promise<Article> {
  const { data, content } = processFile(file);
  const [fileContent, time] = await processContent(content);
  return {
    slug,
    content: fileContent,
    readingTime: getReadingTimeLabel(time),
    createdAt: new Date(data.createdAt).toISOString(),
    category: data.category,
    keywords: data.keywords,
    description: data.description,
    title: data.title,
  };
}
```

## Anti-Patterns

- ❌ Missing or incomplete frontmatter
- ❌ Hardcoded file paths or metadata in code
- ❌ Not using utilities for parsing/loading

## Quick Checklist

- [ ] Frontmatter with all required fields
- [ ] Use utilities for loading/processing
- [ ] No hardcoded paths/metadata
- [ ] Use caching for performance
