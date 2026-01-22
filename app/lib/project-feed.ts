import type { ProjectStatus } from "./project";

export interface ProjectFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  status: ProjectStatus;
}
