import matter from "gray-matter";
import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

import { sortItemsByOrder } from "./sorting";

interface LessonFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  content: string;
  order: number;
}

interface LessonFeed {
  slug: string;
  title: string;
  description: string;
}

interface Lesson {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  order: number;
}

function mapperLessonFeed(lesson: Lesson): LessonFeed {
  return {
    slug: lesson.slug,
    title: lesson.title,
    description: lesson.description,
  };
}

async function parseLessonFrontmatter(
  file: string,
): Promise<LessonFrontmatter> {
  const { data, content } = matter(file);

  return {
    content,
    description: data.description,
    keywords: data.keywords,
    title: data.title,
    order: data.order,
  };
}

async function parseLesson(
  lessonsPath: string,
  lessonFileName: string,
): Promise<Lesson> {
  const file = await readFile(join(lessonsPath, lessonFileName), "utf-8");
  const slug = lessonFileName.replace(".md", "");

  const frontmatter = await parseLessonFrontmatter(file);

  return {
    ...frontmatter,
    slug,
  };
}

async function parseLessons(lessonsPath: string): Promise<Lesson[]> {
  const lessonsFileNames = await readdir(lessonsPath);

  const lessonsAsPromises = lessonsFileNames.map((lessonFileName) =>
    parseLesson(lessonsPath, lessonFileName),
  );

  const lessons = await Promise.all(lessonsAsPromises);

  return sortItemsByOrder(lessons);
}

export type { LessonFrontmatter, LessonFeed, Lesson };

export { mapperLessonFeed, parseLessons };
