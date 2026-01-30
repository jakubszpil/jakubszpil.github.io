import { dirname, join } from "node:path";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import {
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
} from "./content";
import { sortByCreationDate } from "./date";
import { cachePromise } from "./promises";

enum ProjectStatus {
  IDLE = "IDLE",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

interface Project {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
  technologies: string[];
}

interface ProjectFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
}

const projectMinifingStrategy: MinifingStrategy<Project, ProjectFeed> = (
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

const projectParsingStrategy: ParsingStrategy<Project> = async (slug, file) => {
  const { data } = processFile(file);

  return {
    slug,
    createdAt: new Date(data.createdAt).toISOString(),
    technologies: data.categories,
    description: data.description,
    status: data.status,
    title: data.title,
  };
};

async function getAllProjects(): Promise<Project[]> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const directory = join(__dirname, "../../content/projects");

  const files = await readdir(directory);

  const projects: Project[] = [];

  for (const filename of files) {
    const slug = filename.replace(".md", "");
    const file = await readFile(join(directory, filename), "utf-8");
    const project = await projectParsingStrategy(slug, file);

    projects.push(project);
  }

  return projects.toSorted(sortByCreationDate);
}

async function getProjects(limit?: number): Promise<ProjectFeed[]> {
  const projects = await cachePromise("projects", getAllProjects);

  return projects
    .slice(0, limit ?? projects.length)
    .map(projectMinifingStrategy);
}

async function getProjectsByTechnology(
  technology: string | undefined,
): Promise<ProjectFeed[]> {
  const projects = await cachePromise("projects", getAllProjects);

  return projects
    .filter((project) =>
      technology ? project.technologies.includes(technology) : true,
    )
    .map(projectMinifingStrategy);
}

async function getProjectsTechnologies(): Promise<string[]> {
  const projects = await cachePromise("projects", getAllProjects);

  const occurrences: Record<string, number> = {};

  const technologies = projects.reduce<string[]>((technologies, project) => {
    project.technologies?.forEach((technology) => {
      if (!(technology in occurrences)) occurrences[technology] = 0;
      if (!technologies.includes(technology)) technologies.push(technology);
      occurrences[technology]++;
    });

    return technologies;
  }, []);

  return technologies.sort((a, b) => occurrences[b] - occurrences[a]);
}

async function getProject(
  slug: string | undefined,
): Promise<Project | undefined> {
  const projects = await cachePromise("projects", getAllProjects);

  return projects.find((project) => project.slug === slug);
}

export type { Project, ProjectFeed };

export {
  ProjectStatus,
  getProjects,
  getProjectsByTechnology,
  getProjectsTechnologies,
  getProject,
};
