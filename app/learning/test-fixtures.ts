import type { Course, CourseFeed } from "./data-access/courses";

export const MOCKED_COURSE: Course = {
  slug: "test-example",
  content: "<p>Test content</p>",
  title: "Test title",
  description: "Test description",
  keywords: ["test", "example"],
  category: "test",
  createdAt: "2025-03-17T15:00:00.000Z",
  readingTime: "3 minuty",
  quiz: {
    questions: [],
    title: "Example Quiz",
  },
};

export const MOCKED_COURSE_FEED: CourseFeed = {
  slug: "example",
  createdAt: "2025-12-12T15:00:00.000Z",
  description: "Example description",
  readingTime: "2 minuty",
  title: "Example title",
};

export const MOCKED_COURSE_FEEDS: CourseFeed[] = [
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
