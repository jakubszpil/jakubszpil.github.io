import { type Resource, createResourceUtils } from "@libs/shared";

export interface Course extends Resource {
  categories?: string[];
}

const courses = import.meta.glob<{ default: Course }>(
  "../../../../content/courses/*.mdx"
);

export const [
  getCourses,
  getCourse,
  getCoursesCategories,
  getCoursesByCategory,
] = createResourceUtils<Course>(courses, "categories");
