import {
  data,
  useLoaderData,
  type LoaderFunctionArgs as LFA,
} from "react-router";

import { Seo } from "~/components/ui/seo";
import { capitalize } from "~/lib/string";

import {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
} from "../lib/articles";
import CategoryList from "../components/categories";
import Articles from "../components/articles";

export async function loader({ params, request }: LFA) {
  const category = params.category;
  const categories = await getArticlesCategories(request);

  if (category) {
    if (!categories.includes(category))
      throw new Response(null, {
        status: 404,
        statusText: "Nie znaleziono",
      });

    return data({
      articles: await getArticlesByCategory(request, category),
      categories,
      category,
    });
  }

  return data({
    articles: await getArticles(request),
    categories,
    category,
  });
}

export default function ArticleList() {
  const { articles, categories, category } = useLoaderData<typeof loader>();

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
