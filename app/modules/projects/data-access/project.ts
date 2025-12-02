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
