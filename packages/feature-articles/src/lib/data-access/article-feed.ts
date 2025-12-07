import type { Article } from "./article";

export interface ArticleFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

export function articleFeedMapper(article: Article): ArticleFeed {
  return {
    createdAt: article.createdAt,
    description: article.description,
    readingTime: article.readingTime,
    slug: article.slug,
    title: article.title,
  };
}
