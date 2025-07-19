import {
  minifyContentResource,
  parseContentResources,
  type ContentResource,
} from "./content";
import type { RequiredOptional } from "./types";

export abstract class Article implements ContentResource {
  abstract id: string;
  abstract slug: string;
  abstract title: string;
  abstract description: string;
  abstract createdAt: string;
  abstract readingTime: string;
  abstract categories: RequiredOptional<string[]>;
  abstract keywords: RequiredOptional<string[]>;
  abstract content: RequiredOptional<string>;
  abstract resourceUrl: RequiredOptional<string>;
}

const CONTENT = import.meta.glob<string>("../content/articles/*.md", {
  import: "default",
  query: "?raw",
  eager: true,
});

export async function getArticles(filters?: {
  limit?: number;
  minify?: boolean;
}): Promise<Article[]> {
  const articles = await parseContentResources<Article>(
    "articles",
    CONTENT,
    filters
  );

  return articles;
}

export async function getArticle(slug: string): Promise<Article> {
  const articles = await getArticles({ minify: false });

  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });
  }

  return article;
}

export async function getArticlesByCategory(
  category: RequiredOptional<string>
): Promise<Article[]> {
  const articles = await getArticles({ minify: false });

  return articles
    .filter((article) =>
      category ? article.categories?.includes(category) : true
    )
    .map(minifyContentResource);
}

export async function getArticlesCategories(): Promise<string[]> {
  const articles = await getArticles({ minify: false });

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

export async function getArticlesSlugs(): Promise<string[]> {
  const articles = await getArticles();
  return articles.map(({ slug }) => slug);
}
