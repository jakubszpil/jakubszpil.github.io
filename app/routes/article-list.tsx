import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Categories } from "~/components/ui/categories";
import { ArticleCards } from "~/components/article-cards";
import { getArticlesCategories, getArticlesByCategory } from "~/lib/articles";
import { createMetaTags } from "~/lib/meta";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    articles: await getArticlesByCategory(category),
    categories: await getArticlesCategories(),
    title: category && getCapitalizedIndividualName(category),
  };
}

export const meta = createMetaTags<typeof loader>(({ loaderData }) => ({
  title: loaderData?.title ? `Artykuły / ${loaderData.title}` : "Artykuły",
  description:
    "Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych.",
}));

export default function ArticleList() {
  const { articles, categories, title } = useLoaderData<typeof loader>();

  return (
    <>
      <header className="prose container">
        <h1>{title ?? "Artykuły"}</h1>

        <Categories
          categories={categories}
          showAllCategory={true}
          baseUrl="/blog"
          categoryPrefixUrl="/blog/kategorie"
        />
      </header>

      <ArticleCards articles={articles} />
    </>
  );
}
