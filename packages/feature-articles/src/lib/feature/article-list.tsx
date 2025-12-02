import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Seo, getCapitalizedIndividualName } from "@packages/shared";

import { ArticleService } from "../data-access/article-service";
import { ArticleCards } from "../ui/article-cards";
import { ArticleCategories } from "../ui/article-categories";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return {
    articles: await ArticleService.findAllByCategory(category),
    categories: await ArticleService.getCategories(),
    title: category && getCapitalizedIndividualName(category),
  };
}

export default function ArticleList() {
  const { articles, categories, title } = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={title ? `Artykuły / ${title}` : "Artykuły"}
        description="Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."
      />

      <header className="prose container">
        <h1>{title ?? "Artykuły"}</h1>
        <ArticleCategories showAllCategory categories={categories} />
      </header>

      <ArticleCards articles={articles} />
    </>
  );
}
