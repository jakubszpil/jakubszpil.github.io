import { createResourceUtils } from "./resources";

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

const articles = import.meta.glob<string>("../content/articles/*.md", {
  import: "default",
  query: "?raw",
  eager: true,
});

export const [
  getArticles,
  getArticle,
  getArticlesCategories,
  getArticlesByCategory,
  getArticlesSlugs,
  getArticlesSlugsByCategory,
  getArticleSiblings,
] = createResourceUtils<Article>(articles, "categories");
