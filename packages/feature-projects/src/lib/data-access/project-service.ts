import { ResourceService } from "@packages/shared/server";

import type { Project } from "./project";

export class ProjectService extends ResourceService<Project>(
  import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
