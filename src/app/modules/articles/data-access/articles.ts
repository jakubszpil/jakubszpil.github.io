import {
  type Resource,
  createResourceUtils,
} from "@/shared/data-access/resources";

export interface Article extends Resource {
  categories?: string[];
}

const articles = import.meta.glob<{ default: Article }>(
  "../../../../content/articles/*.mdx"
);

export const [
  getArticles,
  getArticle,
  getArticlesCategories,
  getArticlesByCategory,
] = createResourceUtils<Article>(articles, "categories");
