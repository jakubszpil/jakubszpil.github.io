import {
  Resource,
  ResourceFrontmatter,
  createResourceUtils,
} from "@libs/shared";

export type CourseFrontmatter = ResourceFrontmatter<{
  categories?: string[];
}>;

export type Course = Resource<CourseFrontmatter>;

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
