import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { ArticleCards } from "../components/article-cards";
import { ArticleCategories } from "../components/article-categories";
import { ArticleService } from "../lib/article-service";
import { createMetaTags } from "../lib/meta";
import { getCapitalizedIndividualName } from "../lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    articles: await ArticleService.findAllByCategory(category),
    categories: await ArticleService.getCategories(),
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
        <ArticleCategories showAllCategory categories={categories} />
      </header>

      <ArticleCards articles={articles} />
    </>
  );
}
