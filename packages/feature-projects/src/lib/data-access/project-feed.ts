import type { Project, ProjectStatus } from "./project";

export interface ProjectFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
}

export function projectFeedMapper(project: Project): ProjectFeed {
  return {
    createdAt: project.createdAt,
    description: project.description,
    slug: project.slug,
    status: project.status,
    title: project.title,
  };
}
