import {
  createResourceService,
  defaultParsingStrategy,
} from "@packages/shared/server";

import type { Course } from "./course";
import { courseFeedMapper, type CourseFeed } from "./course-feed";

export class CourseService extends createResourceService<Course, CourseFeed>({
  files: import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  }),
  minifingStrategy: courseFeedMapper,
  parsingStrategy: defaultParsingStrategy,
}) {}
