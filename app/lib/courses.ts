import { parseContentResources, type ContentResource } from "./content";

export interface Course extends ContentResource {
  categories: string[];
}

const CONTENT = import.meta.glob<string>("../content/courses/*.md", {
  import: "default",
  query: "?raw",
  eager: true,
});

export async function getCourses(filters?: {
  limit?: number;
  minify?: boolean;
}): Promise<Course[]> {
  const courses = await parseContentResources<Course>(CONTENT, filters);

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
  const courses = await getCourses();
  return courses.filter((course) => course.categories.includes(category));
}

export async function getCoursesCategories(): Promise<string[]> {
  const courses = await getCourses();

  const occurrences: Record<string, number> = {};

  const categories = courses.reduce<string[]>((categories, course) => {
    course.categories.forEach((category) => {
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
