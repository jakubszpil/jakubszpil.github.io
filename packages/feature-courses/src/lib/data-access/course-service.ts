import { ResourceService } from "@packages/shared/server";

import type { Course } from "./course";

export class CourseService extends ResourceService<Course>(
  import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
