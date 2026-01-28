import { createResourceService } from "./resources";
import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
  type SlugStrategy,
} from "./content";

export interface ArticleFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
  categories: string[];
  keywords: string[];
  content: string;
}

export const articleMinifingStrategy: MinifingStrategy<Article, ArticleFeed> = (
  article,
) => {
  return {
    createdAt: article.createdAt,
    description: article.description,
    readingTime: article.readingTime,
    slug: article.slug,
    title: article.title,
  };
};

export const articleParsingStrategy: ParsingStrategy<Article> = async (
  slug,
  file,
) => {
  const { data, content } = processFile(file);

  const [fileContent, readingTime] = await processContent(content);

  return {
    slug,
    content: fileContent,
    readingTime: getReadingTimeLabel(readingTime),
    createdAt: new Date(data.createdAt).toISOString(),
    categories: data.categories,
    keywords: data.keywords,
    description: data.description,
    title: data.title,
  };
};

export const articleSlugStrategy: SlugStrategy = (key) => {
  return key.slice(key.lastIndexOf("/") + 1, key.indexOf(".md"));
};

export class ArticleService extends createResourceService<Article, ArticleFeed>(
  {
    files: import.meta.glob<string>("../../content/articles/*.md", {
      import: "default",
      query: "?raw",
    }),
    minifingStrategy: articleMinifingStrategy,
    parsingStrategy: articleParsingStrategy,
    slugStrategy: articleSlugStrategy,
  },
) {}
