import type { MinifingStrategy } from "./content";
import type { Course } from "./course";
import type { CourseFeed } from "./course-feed";

export class CourseMinifingStrategy implements MinifingStrategy<
  Course,
  CourseFeed
> {
  minify(course: Course): CourseFeed {
    return {
      createdAt: course.createdAt,
      description: course.description,
      readingTime: course.readingTime,
      slug: course.slug,
      title: course.title,
    };
  }
}
