import { ResourceService } from "../../../lib/resources";
import type { Course } from "./course";

export class CourseService extends ResourceService<Course>(
  import.meta.glob<string>("../../../content/courses/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
