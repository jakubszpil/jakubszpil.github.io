import { defineLoader, Seo, useLoader } from "@libs/shared";

import { getArticles, getArticlesCategories } from "../data-access/articles";
import CategoryList from "../ui/categories";
import Articles from "../ui/articles";

export const loader = defineLoader(() => {
  const articles = getArticles();
  const categories = getArticlesCategories();

  return {
    articles,
    categories,
  };
});

export default function ArticleList() {
  const { articles, categories } = useLoader<typeof loader>();

  return (
    <>
      <Seo
        title="Artykuły"
        description="Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."
      />
      <header className="prose container">
        <h1>Artykuły</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Articles articles={articles} />
    </>
  );
}
