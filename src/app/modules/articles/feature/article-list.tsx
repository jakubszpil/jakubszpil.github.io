import { type LoaderFunctionArgs as LFA } from "react-router-dom";

import { capitalize, json, Seo, useLoader } from "@libs/shared";

import {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
} from "../data-access/articles";
import CategoryList from "../ui/categories";
import Articles from "../ui/articles";

export async function loader({ params }: LFA) {
  const category = params.category;
  const categories = await getArticlesCategories();

  if (category) {
    if (!categories.includes(category))
      throw new Response(null, {
        status: 404,
        statusText: "Nie znaleziono",
      });

    return json({
      articles: await getArticlesByCategory(category),
      categories,
      category,
    });
  }

  return json({
    articles: await getArticles(),
    categories,
    category,
  });
}

export default function ArticleList() {
  const { articles, categories, category } = useLoader<typeof loader>();

  const title = category ? capitalize(category) : undefined;

  return (
    <>
      <Seo
        title={title ? `Artykuły / ${title}` : "Artykuły"}
        description="Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."
      />

      <header className="prose container">
        <h1>{title ?? "Artykuły"}</h1>
        <CategoryList showAllCategory categories={categories} />
      </header>

      <Articles articles={articles} />
    </>
  );
}
