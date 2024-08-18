import type { LoaderFunctionArgs as LFA } from "react-router-dom";

import { Seo } from "@/shared/ui/seo";
import { json, useLoader } from "@/shared/utils/routing";
import { capitalize } from "@/shared/utils/string";

import {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
} from "../data-access/articles";
import CategoryList from "../ui/categories";
import Articles from "../ui/articles";

export async function loader({ params, request }: LFA) {
  const category = params.category;
  const categories = await getArticlesCategories(request);

  if (category) {
    if (!categories.includes(category))
      throw new Response(null, {
        status: 404,
        statusText: "Nie znaleziono",
      });

    return json({
      articles: await getArticlesByCategory(request, category),
      categories,
      category,
    });
  }

  return json({
    articles: await getArticles(request),
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

      <Articles
        articles={articles}
        locationState={{
          pathname: category ? `/blog/kategorie/${category}` : "/blog",
          label: "Powrót do listy artykułów",
        }}
      />
    </>
  );
}
