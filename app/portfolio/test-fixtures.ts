import { ProjectStatus, type ProjectFeed } from "./data-access/projects";

export const MOCKED_PROJECT_FEED: ProjectFeed = {
  slug: "example",
  createdAt: "2025-12-12T15:00:00.000Z",
  description: "Example description",
  title: "Example title",
  status: ProjectStatus.COMPLETED,
};

export const MOCKED_PROJECT_FEEDS: ProjectFeed[] = [
  {
    slug: "test-project-1",
    title: "Test Project 1",
    description: "Test Project 1 description",
    createdAt: "2026-02-03T15:00:00.000Z",
    status: ProjectStatus.IN_PROGRESS,
  },
  {
    slug: "test-project-2",
    title: "Test Project 2",
    description: "Test Project 2 description",
    createdAt: "2026-02-03T15:00:00.000Z",
    status: ProjectStatus.COMPLETED,
  },
];
