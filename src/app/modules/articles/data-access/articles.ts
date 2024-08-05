export interface Article {
  id: string;
  slug: string;
  content: string;
  title?: string;
  description?: string;
  keywords?: string[];
  createdAt?: string;
  categories?: string[];
}

export async function getArticles(
  request: Request,
  limit?: number
): Promise<Article[]> {
  const response = await fetch("/content/articles.json", {
    cache: "force-cache",
    signal: request.signal,
  });
  const articles: Article[] = await response.json();

  return articles.slice(0, limit ?? articles.length);
}

export async function getArticle(
  request: Request,
  slug: string
): Promise<Article> {
  const article = await fetch(`/content/articles/${slug}.json`, {
    cache: "force-cache",
    signal: request.signal,
  });
  if (!article.ok) throw article;
  return article.json();
}

export async function getArticlesCategories(
  request: Request
): Promise<string[]> {
  const response = await fetch("/content/articles/categories.json", {
    cache: "force-cache",
    signal: request.signal,
  });
  return await response.json();
}

export async function getArticlesByCategory(
  request: Request,
  category: string
): Promise<Article[]> {
  const response = await fetch(
    `/content/articles/categories/${category}.json`,
    {
      cache: "force-cache",
      signal: request.signal,
    }
  );

  return await response.json();
}
