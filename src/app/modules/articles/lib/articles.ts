import { fetch } from "~/lib/fetch";

export interface Article {
  id: string;
  slug: string;
  content: string;
  resourceUrl?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
  categories?: string[];
}

export async function getArticles(limit?: number): Promise<Article[]> {
  const response = await fetch("/content/articles.json", {
    cache: "force-cache",
  });
  const articles: Article[] = await response.json();

  return articles.slice(0, limit ?? articles.length);
}

export async function getArticle(slug: string): Promise<Article> {
  const article = await fetch(`/content/articles/${slug}.json`, {
    cache: "force-cache",
  });
  if (!article.ok) throw article;
  return article.json();
}

export async function getArticlesSlugs(): Promise<string[]> {
  const slugs = await fetch(`/content/articles/slugs.json`, {
    cache: "force-cache",
  });
  if (!slugs.ok) throw slugs;
  return slugs.json();
}

export async function getArticlesCategories(): Promise<string[]> {
  const response = await fetch("/content/articles/categories.json", {
    cache: "force-cache",
  });
  return await response.json();
}

export async function getArticlesByCategory(
  category: string
): Promise<Article[]> {
  const response = await fetch(
    `/content/articles/categories/${category}.json`,
    {
      cache: "force-cache",
    }
  );

  return await response.json();
}
