import { Resource, createResourceUtils } from "@libs/shared";

export interface Article extends Resource {
  categories?: string[];
}

export const [
  getArticles,
  getArticle,
  getArticlesCategories,
  getArticlesByCategory,
] = createResourceUtils<Article>(
  import.meta.glob(
    ["../../../../content/articles/*.md", "../../../../content/articles/*.mdx"],
    { eager: true }
  ),
  "categories"
);
