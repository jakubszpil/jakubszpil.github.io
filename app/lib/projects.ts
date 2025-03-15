import { createResourceUtils } from "./resources";

export enum ProjectStatus {
  IDLE = "IDLE",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
}

export interface Project {
  id: string;
  slug: string;
  content: string;
  status: ProjectStatus;
  resourceUrl: string;
  title: string;
  description: string;
  keywords: string[];
  createdAt: string;
  technologies: string[];
}

const projects = import.meta.glob<string>("../content/projects/*.md", {
  import: "default",
  query: "?raw",
  eager: true,
});

export const [
  getProjects,
  getProject,
  getProjectsTechnologies,
  getProjectsByTechnology,
  getProjectsSlugs,
] = createResourceUtils<Project>(projects, "technologies");
