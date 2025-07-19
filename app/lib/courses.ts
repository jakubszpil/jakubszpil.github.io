import {
  minifyContentResource,
  parseContentResources,
  type ContentQuiz,
  type ContentResource,
} from "./content";
import type { RequiredOptional } from "./types";

export abstract class Course implements ContentResource {
  abstract id: string;
  abstract slug: string;
  abstract title: string;
  abstract description: string;
  abstract createdAt: string;
  abstract readingTime: string;
  abstract categories: RequiredOptional<string[]>;
  abstract keywords: RequiredOptional<string[]>;
  abstract content: RequiredOptional<string>;
  abstract resourceUrl: RequiredOptional<string>;
  abstract quiz?: ContentQuiz;
}

const CONTENT = import.meta.glob<string>("../content/courses/*.md", {
  import: "default",
  query: "?raw",
  eager: true,
});

const CACHE: Record<string, Course[]> = {};

export async function getCourses(filters?: {
  limit?: number;
  minify?: boolean;
}): Promise<Course[]> {
  const filtersKey = JSON.stringify(filters, null, 2);
  if (filtersKey in CACHE) return CACHE[filtersKey];
  const courses = await parseContentResources<Course>(CONTENT, filters);
  CACHE[filtersKey] = courses;
  return courses;
}

export async function getCourse(slug: string): Promise<Course> {
  const courses = await getCourses({ minify: false });

  const course = courses.find((course) => course.slug === slug);

  if (!course) {
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });
  }

  return course;
}

export async function getCoursesByCategory(
  category: string
): Promise<Course[]> {
  const courses = await getCourses({ minify: false });

  return courses
    .filter((course) => course.categories?.includes(category))
    .map(minifyContentResource);
}

export async function getCoursesCategories(): Promise<string[]> {
  const courses = await getCourses({ minify: false });

  const occurrences: Record<string, number> = {};

  const categories = courses.reduce<string[]>((categories, course) => {
    course.categories?.forEach((category) => {
      if (!(category in occurrences)) occurrences[category] = 0;
      if (!categories.includes(category)) categories.push(category);
      occurrences[category]++;
    });

    return categories;
  }, []);

  return categories.sort((a, b) => occurrences[b] - occurrences[a]);
}

export async function getCoursesSlugs(): Promise<string[]> {
  const courses = await getCourses();
  return courses.map(({ slug }) => slug);
}
