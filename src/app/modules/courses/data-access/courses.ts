import { fetch } from "@/shared/utils/fetch";

export interface Course {
  id: string;
  slug: string;
  content: string;
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
  categories?: string[];
}

export async function getCourses(
  request: Request,
  limit?: number
): Promise<Course[]> {
  const response = await fetch("/content/courses.json", {
    cache: "force-cache",
    signal: request.signal,
  });
  const courses: Course[] = await response.json();

  return courses.slice(0, limit ?? courses.length);
}

export async function getCoursesSlugs(request: Request): Promise<string[]> {
  const slugs = await fetch(`/content/courses/slugs.json`, {
    cache: "force-cache",
    signal: request.signal,
  });
  if (!slugs.ok) throw slugs;
  return slugs.json();
}

export async function getCourse(
  request: Request,
  slug: string
): Promise<Course> {
  const course = await fetch(`/content/courses/${slug}.json`, {
    cache: "force-cache",
    signal: request.signal,
  });
  if (!course.ok) throw course;
  return course.json();
}

export async function getCoursesCategories(
  request: Request
): Promise<string[]> {
  const response = await fetch("/content/courses/categories.json", {
    cache: "force-cache",
    signal: request.signal,
  });
  return await response.json();
}

export async function getCoursesByCategory(
  request: Request,
  category: string
): Promise<Course[]> {
  const response = await fetch(`/content/courses/categories/${category}.json`, {
    cache: "force-cache",
    signal: request.signal,
  });

  return await response.json();
}
