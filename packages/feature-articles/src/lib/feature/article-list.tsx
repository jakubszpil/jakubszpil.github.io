import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { createMetaTags, getCapitalizedIndividualName } from "@packages/shared";

import {
  findAllArticlesByCategory,
  getArticleCategories,
} from "../data-access/article-service";
import { ArticleCards } from "../ui/article-cards";
import { ArticleCategories } from "../ui/article-categories";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    articles: await findAllArticlesByCategory(category),
    categories: await getArticleCategories(),
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
