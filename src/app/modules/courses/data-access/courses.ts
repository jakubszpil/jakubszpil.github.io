import { fetchAPI } from "@/shared/utils/fetch";

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

export async function getCourses(limit?: number): Promise<Course[]> {
  const response = await fetchAPI("/content/courses.json");
  const courses: Course[] = await response.json();

  return courses.slice(0, limit ?? courses.length);
}

export async function getCourse(slug: string): Promise<Course> {
  const course = await fetchAPI(`/content/courses/${slug}.json`);
  if (!course.ok) throw course;
  return course.json();
}

export async function getCoursesWithCategories(): Promise<{
  categories: string[];
  courses: Course[];
}> {
  const courses = await getCourses();

  const occurrences: Record<string, number> = {};

  const categories = courses.reduce<string[]>((categories, course) => {
    course.categories?.forEach((category) => {
      if (!(category in occurrences)) occurrences[category] = 0;
      if (!categories.includes(category)) categories.push(category);
      occurrences[category]++;
    });

    return categories;
  }, []);

  return {
    categories: categories.sort((a, b) => occurrences[b] - occurrences[a]),
    courses,
  };
}

export async function getCoursesByCategory(
  courses: Course[],
  category: string
): Promise<Course[]> {
  return courses.filter((course) => course.categories?.includes(category));
}
