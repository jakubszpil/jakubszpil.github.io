import { createResourceService } from "@packages/shared/server";

import type { Course } from "./course";
import type { CourseFeed } from "./course-feed";
import { CourseParsingStrategy } from "./course-parsing-strategy";
import { CourseMinifingStrategy } from "./course-minifing-strategy";

class CourseService extends createResourceService<Course, CourseFeed>({
  files: import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
  }),
  minifingStrategy: new CourseMinifingStrategy(),
  parsingStrategy: new CourseParsingStrategy(),
}) {}

export const findAllCourses = CourseService.findAll;

export const findAllCoursesByCategory = CourseService.findAllByCategory;

export const findUniqueCourse = CourseService.findUnique;

export const getCourseCategories = CourseService.getCategories;

export const getCourseSlugs = CourseService.getSlugs;
