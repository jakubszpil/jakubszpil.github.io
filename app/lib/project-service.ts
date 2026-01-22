import { createResourceService } from "./resources";
import type { Project } from "./project";
import type { ProjectFeed } from "./project-feed";
import { ProjectMinifingStrategy } from "./project-minifing-strategy";
import { ProjectParsingStrategy } from "./project-parsing-strategy";

export class ProjectService extends createResourceService<Project, ProjectFeed>(
  {
    files: import.meta.glob<string>("../../content/projects/*.md", {
      import: "default",
      query: "?raw",
    }),
    minifingStrategy: new ProjectMinifingStrategy(),
    parsingStrategy: new ProjectParsingStrategy(),
  },
) {}
