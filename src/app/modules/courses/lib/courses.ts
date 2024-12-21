import { fetch } from "~/lib/fetch";

export interface Course {
  id: string;
  slug: string;
  content: string;
  resourceUrl?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
  categories?: string[];
}

export async function getCourses(limit?: number): Promise<Course[]> {
  const response = await fetch("/content/courses.json", {
    cache: "force-cache",
  });

  const courses: Course[] = await response.json();

  return courses.slice(0, limit ?? courses.length);
}

export async function getCoursesSlugs(): Promise<string[]> {
  const slugs = await fetch(`/content/courses/slugs.json`, {
    cache: "force-cache",
  });

  if (!slugs.ok) throw slugs;

  return slugs.json();
}

export async function getCourse(slug: string): Promise<Course> {
  const course = await fetch(`/content/courses/${slug}.json`, {
    cache: "force-cache",
  });

  if (!course.ok) throw course;

  return course.json();
}

export async function getCoursesCategories(): Promise<string[]> {
  const response = await fetch("/content/courses/categories.json", {
    cache: "force-cache",
  });

  return await response.json();
}

export async function getCoursesByCategory(
  category: string
): Promise<Course[]> {
  const response = await fetch(`/content/courses/categories/${category}.json`, {
    cache: "force-cache",
  });

  return await response.json();
}
