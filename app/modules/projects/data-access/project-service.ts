import { ResourceService } from "../../../shared/data-access/resources";
import type { Project } from "./project";

export class ProjectService extends ResourceService<Project>(
  import.meta.glob<string>("../../../../content/projects/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
