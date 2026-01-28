import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
} from "./content";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir, readFile } from "node:fs/promises";

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
    categories: data.categories,
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

  return articles;
}

async function getArticles(limit?: number): Promise<ArticleFeed[]> {
  const articles = await getAllArticles();

  return articles
    .map(articleMinifingStrategy)
    .slice(0, limit ?? articles.length);
}

async function getArticlesByCategory(
  category: string | undefined,
): Promise<ArticleFeed[]> {
  const articles = await getAllArticles();

  return articles
    .filter((article) =>
      category ? article.categories.includes(category) : true,
    )
    .map(articleMinifingStrategy);
}

async function getArticleCategories(): Promise<string[]> {
  const articles = await getAllArticles();

  const occurrences: Record<string, number> = {};

  const categories = articles.reduce<string[]>((categories, article) => {
    article.categories?.forEach((category) => {
      if (!(category in occurrences)) occurrences[category] = 0;
      if (!categories.includes(category)) categories.push(category);
      occurrences[category]++;
    });

    return categories;
  }, []);

  return categories.sort((a, b) => occurrences[b] - occurrences[a]);
}

async function getArticleSlugs(): Promise<string[]> {
  const articles = await getAllArticles();

  return articles.map((article) => article.slug);
}

async function getArticle(
  slug: string | undefined,
): Promise<Article | undefined> {
  const articles = await getAllArticles();

  return articles.find((article) => article.slug === slug);
}

export {
  getArticles,
  getArticlesByCategory,
  getArticleCategories,
  getArticleSlugs,
  getArticle,
};
