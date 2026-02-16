import { dirname, join } from "node:path";
import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
} from "./content";
import { sortByCreationDate } from "./date";
import { cachePromise } from "./promises";

interface ArticleFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

interface Article {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
  category: string;
  keywords: string[];
  content: string;
}

const articleMinifingStrategy: MinifingStrategy<Article, ArticleFeed> = (
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

const articleParsingStrategy: ParsingStrategy<Article> = async (slug, file) => {
  const { data, content } = processFile(file);

  const [fileContent, readingTime] = await processContent(content);

  return {
    slug,
    content: fileContent,
    readingTime: getReadingTimeLabel(readingTime),
    createdAt: new Date(data.createdAt).toISOString(),
    category: data.category,
    keywords: data.keywords,
    description: data.description,
    title: data.title,
  };
};

async function getAllArticles(): Promise<Article[]> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const directory = join(__dirname, "../../content/articles");

  const files = await readdir(directory);

  const articles: Article[] = [];

  for (const filename of files) {
    const slug = filename.replace(".md", "");
    const file = await readFile(join(directory, filename), "utf-8");
    const article = await articleParsingStrategy(slug, file);

    articles.push(article);
  }

  return articles.toSorted(sortByCreationDate);
}

async function getArticles(limit?: number): Promise<ArticleFeed[]> {
  const articles = await cachePromise("articles", getAllArticles);

  return articles
    .slice(0, limit ?? articles.length)
    .map(articleMinifingStrategy);
}

async function getArticlesByCategory(
  category: string | undefined,
): Promise<ArticleFeed[]> {
  const articles = await cachePromise("articles", getAllArticles);

  return articles
    .filter((article) => (category ? article.category === category : true))
    .map(articleMinifingStrategy);
}

async function getArticlesCategories(): Promise<string[]> {
  const articles = await cachePromise("articles", getAllArticles);

  const occurrences: Record<string, number> = {};

  const categories = articles.reduce<string[]>((categories, article) => {
    if (!(article.category in occurrences)) occurrences[article.category] = 0;

    if (!categories.includes(article.category))
      categories.push(article.category);

    occurrences[article.category]++;

    return categories;
  }, []);

  return categories.sort((a, b) => occurrences[b] - occurrences[a]);
}

async function getArticlesSlugs(): Promise<string[]> {
  const articles = await cachePromise("articles", getAllArticles);

  return articles.map((article) => article.slug);
}

async function getArticle(
  slug: string | undefined,
): Promise<Article | undefined> {
  const articles = await cachePromise("articles", getAllArticles);

  return articles.find((article) => article.slug === slug);
}

export type { Article, ArticleFeed };

export {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
  getArticlesSlugs,
  getArticle,
};
