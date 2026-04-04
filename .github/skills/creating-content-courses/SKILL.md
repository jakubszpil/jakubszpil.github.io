---
name: creating-content-courses
description: Creating and managing course content with quiz sections in /app/content/courses/
---

# Creating Course Content Files

## Overview

This skill covers how to create and manage course content files for the portfolio project. Courses are structured Markdown files with metadata, main content, and an embedded quiz section. Each course is designed for educational purposes and includes interactive quizzes to reinforce learning.

## Scope

Use this skill when creating structured educational courses with quizzes for the site. It applies to all files in `/app/content/courses/` that represent a course with a quiz section.

## File Location

- All course files must be placed in `/app/content/courses/`

## Naming Convention

- Use **kebab-case** for filenames (e.g., `react-basics.md`)
- Filenames may be in Polish or English

## Frontmatter Format

Each course file must start with YAML frontmatter containing the following fields:

```yaml
title: "TypeScript Basics"
description: "A beginner-friendly introduction to TypeScript."
category: "programming"
keywords:
  - typescript
  - javascript
  - programming
createdAt: "2026-03-31"
quiz:
  title: "TypeScript Fundamentals Quiz"
  questions:
    - question: "What is TypeScript?"
      options:
        - "A typed superset of JavaScript"
        - "A CSS framework"
        - "A database language"
        - "A version control system"
      answer: 0
      explanation: "TypeScript is a typed superset of JavaScript."
    - question: "Which file extension is used for TypeScript files?"
      options:
        - ".js"
        - ".ts"
        - ".css"
        - ".json"
      answer: 1
      explanation: "TypeScript files use the .ts extension."
```

### Required Fields

- `title`: String — Course title
- `description`: String — Course summary
- `category`: String — Topic category
- `keywords`: Array<string> — Search keywords
- `createdAt`: YYYY-MM-DD — Creation date
- `quiz`: Object — Quiz metadata
  - `title`: String — Quiz title
  - `questions`: Array of objects:
    - `question`: String — The question text
    - `options`: Array<string> — 4 options (multi-choice)
    - `answer`: number — Index (0-3) of correct option
    - `explanation`: String (optional) — Why the answer is correct

## Practical Guidelines

- **File naming:** Use kebab-case, Polish or English allowed
- **Content structure:**
  - Start with frontmatter
  - Main course content in Markdown
  - Quiz section defined in frontmatter
- **Quiz design:**
  - Each question must have exactly 4 options
  - Use clear, concise language
  - Focus on key concepts
  - Provide explanations for answers
  - Options are shuffled at runtime
- **Reading time:** Estimate based on content length
- **Code examples:** Use fenced code blocks for code snippets
- **Quiz questions:** Should reinforce main learning objectives

## Examples

### Example Course Frontmatter

```yaml
title: "React Hooks Deep Dive"
description: "Learn advanced React Hooks with practical examples."
category: "frontend"
keywords:
  - react
  - hooks
  - frontend
createdAt: "2026-03-31"
quiz:
  title: "React Hooks Quiz"
  questions:
    - question: "Which hook is used for state management in React?"
      options:
        - "useState"
        - "useEffect"
        - "useContext"
        - "useRef"
      answer: 0
      explanation: "useState is the primary hook for state management."
```

### Example Question Structure

```yaml
- question: "What does useEffect do?"
  options:
    - "Manages side effects"
    - "Handles state"
    - "Creates refs"
    - "Defines context"
  answer: 0
  explanation: "useEffect manages side effects in React components."
```

### Example Markdown Structure

````markdown
---
# (Frontmatter as above)
---

# React Hooks Deep Dive

React Hooks allow you to use state and other React features without writing a class...

## useState

```tsx
const [count, setCount] = useState(0);
```
````

...more content...

```

## Anti-Patterns
- Missing quiz section in frontmatter
- Unclear or missing answer explanations
- Too many or too few questions (must be a reasonable number, e.g., 3–10)
- Ambiguous or misleading questions
- Options not matching the answer index

## Quick Checklist
- [ ] File is in `/app/content/courses/`
- [ ] Filename is kebab-case
- [ ] Frontmatter includes all required fields
- [ ] Main content is clear and well-structured
- [ ] Quiz section is present and valid
- [ ] Each question has 4 options and an explanation
- [ ] No ambiguous or misleading questions
- [ ] Options are clear and concise
- [ ] Code examples use fenced code blocks
- [ ] Reading time is reasonable for the content
```
