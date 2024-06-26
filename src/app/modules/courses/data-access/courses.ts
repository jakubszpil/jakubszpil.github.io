import { Resource, createResourceUtils } from "@libs/shared";

export interface Course extends Resource {
  categories?: string[];
}

export const [
  getCourses,
  getCourse,
  getCoursesCategories,
  getCoursesByCategory,
] = createResourceUtils<Course>(
  import.meta.glob(
    ["../../../../content/courses/*.md", "../../../../content/courses/*.mdx"],
    { eager: true }
  ),
  "categories"
);
