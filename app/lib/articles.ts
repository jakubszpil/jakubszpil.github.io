import { parseContentResources, type ContentResource } from "./content";

export abstract class Article implements ContentResource {
  abstract id: string;
  abstract slug: string;
  abstract content: string;
  abstract resourceUrl: string;
  abstract title: string;
  abstract description: string;
  abstract keywords: string[];
  abstract createdAt: string;
  abstract categories: string[];
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
  const articles = await parseContentResources<Article>(CONTENT, filters);

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
  category: string
): Promise<Article[]> {
  const articles = await getArticles();
  return articles.filter((article) => article.categories.includes(category));
}

export async function getArticlesCategories(): Promise<string[]> {
  const articles = await getArticles();

  const occurrences: Record<string, number> = {};

  const categories = articles.reduce<string[]>((categories, article) => {
    article.categories.forEach((category) => {
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
