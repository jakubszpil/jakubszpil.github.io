import type { ArticleFeed } from "./lib/articles";
import type { CourseFeed } from "./lib/courses";
import { ProjectStatus, type ProjectFeed } from "./lib/projects";

const MOCKED_ARTICLE_FEEDS: ArticleFeed[] = [
  {
    slug: "test-article-1",
    title: "Test Article 1",
    description: "Test Article 1 description",
    createdAt: "2026-02-03T15:00:00.000Z",
    readingTime: "3 minuty",
  },
  {
    slug: "test-article-2",
    title: "Test Article 2",
    description: "Test Article 2 description",
    createdAt: "2026-02-03T15:00:00.000Z",
    readingTime: "5 minut",
  },
];

const MOCKED_COURSE_FEEDS: CourseFeed[] = [
  {
    slug: "test-course-1",
    title: "Test Course 1",
    description: "Test Course 1 description",
    createdAt: "2026-02-03T15:00:00.000Z",
    readingTime: "3 minuty",
  },
  {
    slug: "test-course-2",
    title: "Test Course 2",
    description: "Test Course 2 description",
    createdAt: "2026-02-03T15:00:00.000Z",
    readingTime: "5 minut",
  },
];

const MOCKED_PROJECT_FEEDS: ProjectFeed[] = [
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

export { MOCKED_ARTICLE_FEEDS, MOCKED_COURSE_FEEDS, MOCKED_PROJECT_FEEDS };
