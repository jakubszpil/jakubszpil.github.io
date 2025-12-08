import { createResourceService } from "@packages/shared/server";

import type { Project } from "./project";
import type { ProjectFeed } from "./project-feed";
import { ProjectMinifingStrategy } from "./project-minifing-strategy";
import { ProjectParsingStrategy } from "./project-parsing-strategy";

export class ProjectService extends createResourceService<Project, ProjectFeed>(
  {
    files: import.meta.glob<string>("../../../content/*.md", {
      import: "default",
      query: "?raw",
      eager: true,
    }),
    minifingStrategy: new ProjectMinifingStrategy(),
    parsingStrategy: new ProjectParsingStrategy(),
  }
) {}
