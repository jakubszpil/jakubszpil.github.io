import {
  Resource,
  ResourceFrontmatter,
  createResourceUtils,
} from "@libs/shared";

export type ArticleFrontmatter = ResourceFrontmatter<{
  categories?: string[];
}>;

export type Article = Resource<ArticleFrontmatter>;

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
