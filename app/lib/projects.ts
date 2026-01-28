import {
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
  type SlugStrategy,
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

export const projectMinifingStrategy: MinifingStrategy<Project, ProjectFeed> = (
  project,
) => {
  return {
    createdAt: project.createdAt,
    description: project.description,
    slug: project.slug,
    status: project.status,
    title: project.title,
  };
};

export const projectParsingStrategy: ParsingStrategy<Project> = async (
  slug,
  file,
) => {
  const { data } = processFile(file);

  return {
    slug,
    createdAt: new Date(data.createdAt).toISOString(),
    categories: data.categories,
    description: data.description,
    status: data.status,
    title: data.title,
  };
};

export const projectSlugStrategy: SlugStrategy = (key) => {
  return key.slice(key.lastIndexOf("/") + 1, key.indexOf(".md"));
};

export class ProjectService extends createResourceService<Project, ProjectFeed>(
  {
    files: import.meta.glob<string>("../../content/projects/*.md", {
      import: "default",
      query: "?raw",
    }),
    minifingStrategy: projectMinifingStrategy,
    parsingStrategy: projectParsingStrategy,
    slugStrategy: projectSlugStrategy,
  },
) {}
