import { fetchAPI } from "@/shared/utils/fetch";

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

export async function getArticles(limit?: number): Promise<Article[]> {
  const response = await fetchAPI("/content/articles.json");
  const articles: Article[] = await response.json();

  return articles.slice(0, limit ?? articles.length);
}

export async function getArticle(slug: string): Promise<Article> {
  const article = await fetchAPI(`/content/articles/${slug}.json`);
  if (!article.ok) throw article;
  return article.json();
}

export async function getArticlesWithCategories(): Promise<{
  categories: string[];
  articles: Article[];
}> {
  const articles = await getArticles();

  const occurrences: Record<string, number> = {};

  const categories = articles.reduce<string[]>((categories, article) => {
    article.categories?.forEach((category) => {
      if (!(category in occurrences)) occurrences[category] = 0;
      if (!categories.includes(category)) categories.push(category);
      occurrences[category]++;
    });

    return categories;
  }, []);

  return {
    categories: categories.sort((a, b) => occurrences[b] - occurrences[a]),
    articles,
  };
}

export async function getArticlesByCategory(
  articles: Article[],
  category: string
): Promise<Article[]> {
  return articles.filter((article) => article.categories?.includes(category));
}
