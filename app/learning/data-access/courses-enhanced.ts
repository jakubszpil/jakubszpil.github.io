import matter from "gray-matter";
import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

import { parseModules, type Module } from "./modules";
import { sortByCreationDate } from "../../shared/utils/date";
import { cachePromise } from "../../shared/utils/promises";

type CourseDifficulty = "beginner" | "intermediate" | "advanced";

interface CourseFrontmatter {
  title: string;
  description: string;
  keywords: string[];
  createdAt: string;
  category: string;
  difficulty: CourseDifficulty;
}

interface CourseFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  category: string;
  difficulty: CourseDifficulty;
}

interface Course {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  keywords: string[];
  category: string;
  difficulty: CourseDifficulty;
  modules: Module[];
}

function mapperCourseFeed(course: Course): CourseFeed {
  return {
    slug: course.slug,
    title: course.title,
    description: course.description,
    createdAt: course.createdAt,
    category: course.category,
    difficulty: course.difficulty,
  };
}

async function parseCourseFrontmatter(
  file: string,
): Promise<CourseFrontmatter> {
  const { data } = matter(file);

  return {
    description: data.description,
    keywords: data.keywords,
    title: data.title,
    category: data.category,
    difficulty: data.difficulty,
    createdAt: new Date(data.createdAt).toISOString(),
  };
}

async function parseCourse(coursesPath: string, slug: string): Promise<Course> {
  const coursePath = join(coursesPath, slug);
  const file = await readFile(join(coursePath, "course.md"), "utf-8");

  const frontmatter = await parseCourseFrontmatter(file);

  const modules = await parseModules(join(coursePath, "modules"));

  return {
    ...frontmatter,
    slug,
    modules,
  };
}

async function getAllCourses(): Promise<Course[]> {
  const directory = join(process.cwd(), "content/courses");

  const slugs = await readdir(directory);

  const courses: Course[] = [];

  for (const slug of slugs) {
    if (slug.includes(".md")) continue;

    const course = await parseCourse(directory, slug);
    courses.push(course);
  }

  return courses.toSorted(sortByCreationDate);
}

async function getCourses(limit?: number): Promise<CourseFeed[]> {
  const courses = await cachePromise("courses-enhanced", getAllCourses);

  return courses.slice(0, limit ?? courses.length).map(mapperCourseFeed);
}

async function getCoursesByCategory(
  category: string | undefined,
): Promise<CourseFeed[]> {
  const courses = await cachePromise("courses-enhanced", getAllCourses);

  return courses
    .filter((course) => (category ? category === course.category : true))
    .map(mapperCourseFeed);
}

async function getCoursesCategories(): Promise<string[]> {
  const courses = await cachePromise("courses-enhanced", getAllCourses);

  const occurrences: Record<string, number> = {};

  const categories = courses.reduce<string[]>((categories, course) => {
    if (!(course.category in occurrences)) occurrences[course.category] = 0;

    if (!categories.includes(course.category)) categories.push(course.category);

    occurrences[course.category]++;

    return categories;
  }, []);

  return categories.sort((a, b) => occurrences[b] - occurrences[a]);
}

async function getCoursesSlugs(): Promise<string[]> {
  const courses = await cachePromise("courses-enhanced", getAllCourses);

  return courses.map((course) => course.slug);
}

async function getCourse(
  slug: string | undefined,
): Promise<Course | undefined> {
  const courses = await cachePromise("courses-enhanced", getAllCourses);

  return courses.find((course) => course.slug === slug);
}

export type { CourseFrontmatter, CourseFeed, Course, CourseDifficulty };

export {
  getCourses,
  getCoursesByCategory,
  getCoursesCategories,
  getCoursesSlugs,
  getCourse,
};
