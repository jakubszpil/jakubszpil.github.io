import { defineLoader, notFound, Seo, useLoader } from "@libs/shared";

import {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
} from "../data-access/articles";
import CategoryList from "../ui/categories";
import Articles from "../ui/articles";

export const loader = defineLoader(({ params }) => {
  const category = params.category;
  const categories = getArticlesCategories();

  if (category) {
    if (!categories.includes(category)) throw notFound();

    const articles = getArticlesByCategory(category);

    return {
      articles,
      categories,
      category,
    };
  }

  const articles = getArticles();

  return {
    articles,
    categories,
  };
});

export default function ArticleList() {
  const { articles, categories, category } = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title={category ? `Kategoria: ${category}` : "Artykuły"}
        description="Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."
      />
      <header className="prose container">
        <h1 className="capitalize">{category ?? "Artykuły"}</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Articles articles={articles} />
    </>
  );
}
