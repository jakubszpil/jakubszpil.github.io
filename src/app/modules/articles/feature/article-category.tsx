import { defineLoader, notFound, Seo, useLoader } from "@libs/shared";

import {
  getArticlesByCategory,
  getArticlesCategories,
} from "../data-access/articles";
import Categories from "../ui/categories";
import Articles from "../ui/articles";

export const loader = defineLoader(({ params }) => {
  const category = params.category!;
  const categories = getArticlesCategories();

  if (!categories.includes(category)) throw notFound();

  const articles = getArticlesByCategory(category);

  return {
    category,
    categories,
    articles,
  };
});

export default function ArticleCategory() {
  const { articles, categories, category } = useLoader<typeof loader>();

  return (
    <>
      <Seo title={`Kategoria: ${category}`} />

      <header className="prose container">
        <h1 className="capitalize">{category}</h1>
        <Categories showAllCategory categories={categories} />
      </header>

      <Articles articles={articles} />
    </>
  );
}
