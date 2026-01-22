import {
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
} from "./content";
import { createResourceService } from "./resources";

export enum ProjectStatus {
  IDLE = "IDLE",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
  categories: string[];
}

export interface ProjectFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
}

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

export class ProjectParsingStrategy implements ParsingStrategy<Project> {
  async parse(slug: string, file: string): Promise<Project> {
    const { data } = processFile(file);

    return {
      slug,
      createdAt: new Date(data.createdAt).toISOString(),
      categories: data.categories,
      description: data.description,
      status: data.status,
      title: data.title,
    } satisfies Project;
  }
}

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
