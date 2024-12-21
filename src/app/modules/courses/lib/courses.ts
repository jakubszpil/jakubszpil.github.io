import { createResourceUtils } from "~/lib/resources";

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

const courses = import.meta.glob<string>("../../../content/courses/*.mdx", {
  import: "default",
  query: "?raw",
  eager: true,
});
export const [
  getCourses,
  getCourse,
  getCoursesCategories,
  getCoursesByCategory,
  getCoursesSlugs,
] = createResourceUtils<Course>(courses, "categories");
