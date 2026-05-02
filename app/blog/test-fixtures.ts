import type { Article, ArticleFeed } from "./data-access/articles";

export const MOCKED_ARTICLE: Article = {
  slug: "test-example",
  content: "<p>Test content</p>",
  title: "Test title",
  description: "Test description",
  keywords: ["test", "example"],
  category: "test",
  createdAt: "2025-03-17T15:00:00.000Z",
  readingTime: "3 minuty",
};

export const MOCKED_ARTICLE_FEED: ArticleFeed = {
  slug: "example",
  createdAt: "2025-12-12T15:00:00.000Z",
  description: "Example description",
  readingTime: "2 minuty",
  title: "Example title",
};

export const MOCKED_ARTICLE_FEEDS: ArticleFeed[] = [
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
