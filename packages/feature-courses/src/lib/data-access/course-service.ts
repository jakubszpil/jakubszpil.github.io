import { createResourceService } from "@packages/shared/server";

import type { Course } from "./course";
import { courseFeedMapper, type CourseFeed } from "./course-feed";
import { courseParser } from "./course-parser";

export class CourseService extends createResourceService<Course, CourseFeed>({
  files: import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  }),
  minifingStrategy: courseFeedMapper,
  parsingStrategy: courseParser,
}) {}
