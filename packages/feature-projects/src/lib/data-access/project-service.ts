import { createResourceService } from "@packages/shared/server";

import type { Project } from "./project";
import { projectFeedMapper, type ProjectFeed } from "./project-feed";
import { projectParser } from "./project-parser";

export class ProjectService extends createResourceService<Project, ProjectFeed>(
  {
    files: import.meta.glob<string>("../../../content/*.md", {
      import: "default",
      query: "?raw",
      eager: true,
    }),
    minifingStrategy: projectFeedMapper,
    parsingStrategy: projectParser,
  }
) {}
