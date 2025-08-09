import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import Categories from "~/components/blog/categories";
import Articles from "~/components/blog/articles";
import { Seo } from "~/components/ui/seo";
import { getArticlesByCategory, getArticlesCategories } from "~/lib/articles";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    articles: await getArticlesByCategory(category),
    categories: await getArticlesCategories(),
    category,
  };
}

export default function ArticleList() {
  const { articles, categories, category } = useLoaderData<typeof loader>();

  const title = category ? getCapitalizedIndividualName(category) : undefined;

  return (
    <>
      <Seo
        title={title ? `Artykuły / ${title}` : "Artykuły"}
        description="Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."
      />

      <header className="prose container">
        <h1>{title ?? "Artykuły"}</h1>
        <Categories showAllCategory categories={categories} />
      </header>

      <Articles articles={articles} />
    </>
  );
}
