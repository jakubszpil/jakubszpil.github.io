import type { MinifingStrategy } from "./content";
import type { Project } from "./project";
import type { ProjectFeed } from "./project-feed";

export class ProjectMinifingStrategy implements MinifingStrategy<
  Project,
  ProjectFeed
> {
  minify(project: Project): ProjectFeed {
    return {
      createdAt: project.createdAt,
      description: project.description,
      slug: project.slug,
      status: project.status,
      title: project.title,
    };
  }
}
