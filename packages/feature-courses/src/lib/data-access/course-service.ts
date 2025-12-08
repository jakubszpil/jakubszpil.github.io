import { createResourceService } from "@packages/shared/server";

import type { Course } from "./course";
import type { CourseFeed } from "./course-feed";
import { CourseParsingStrategy } from "./course-parsing-strategy";
import { CourseMinifingStrategy } from "./course-minifing-strategy";

export class CourseService extends createResourceService<Course, CourseFeed>({
  files: import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  }),
  minifingStrategy: new CourseMinifingStrategy(),
  parsingStrategy: new CourseParsingStrategy(),
}) {}
