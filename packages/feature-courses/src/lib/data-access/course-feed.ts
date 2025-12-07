import type { Course } from "./course";

export interface CourseFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

export function courseFeedMapper(course: Course): CourseFeed {
  return {
    createdAt: course.createdAt,
    description: course.description,
    readingTime: course.readingTime,
    slug: course.slug,
    title: course.title,
  };
}
