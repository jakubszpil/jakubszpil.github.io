import { join } from "node:path";
import { readdir, readFile } from "node:fs/promises";

import {
  getReadingTimeLabel,
  processContent,
  processFile,
} from "../../shared/utils/content";
import { sortByCreationDate } from "../../shared/utils/date";
import { cachePromise } from "../../shared/utils/promises";

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

function mapperArticleFeed(article: Article): ArticleFeed {
  return {
    createdAt: article.createdAt,
    description: article.description,
    readingTime: article.readingTime,
    slug: article.slug,
    title: article.title,
  };
}

async function parseArticle(slug: string, file: string): Promise<Article> {
  const { data, content } = processFile(file);

  const [fileContent, time] = await processContent(content);

  return {
    slug,
    content: fileContent,
    readingTime: getReadingTimeLabel(time),
    createdAt: new Date(data.createdAt).toISOString(),
    category: data.category,
    keywords: data.keywords,
    description: data.description,
    title: data.title,
  };
}

async function getAllArticles(): Promise<Article[]> {
  const directory = join(process.cwd(), "app/content/articles");

  const files = await readdir(directory);

  const articles: Article[] = [];

  for (const filename of files) {
    const slug = filename.replace(".md", "");
    const file = await readFile(join(directory, filename), "utf-8");
    const article = await parseArticle(slug, file);

    articles.push(article);
  }

  return articles.toSorted(sortByCreationDate);
}

async function getArticles(limit?: number): Promise<ArticleFeed[]> {
  const articles = await cachePromise("articles", getAllArticles);

  return articles.slice(0, limit ?? articles.length).map(mapperArticleFeed);
}

async function getArticlesByCategory(
  category: string | undefined,
): Promise<ArticleFeed[]> {
  const articles = await cachePromise("articles", getAllArticles);

  return articles
    .filter((article) => (category ? article.category === category : true))
    .map(mapperArticleFeed);
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
