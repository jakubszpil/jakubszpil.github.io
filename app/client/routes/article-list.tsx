import {
  Await,
  useLoaderData,
  type LoaderFunctionArgs,
  type ShouldRevalidateFunctionArgs,
} from "react-router";

import { Seo } from "@/shared/components/ui/seo";
import { capitalize } from "@/shared/lib/string";

import Articles from "../components/blog/articles";
import Categories from "../components/blog/categories";
import {
  getArticles,
  getArticlesByCategory,
  getArticlesCategories,
} from "../lib/articles";

export function shouldRevalidate({
  currentParams,
  nextParams,
}: ShouldRevalidateFunctionArgs) {
  const currentCategory = currentParams.category;
  const nextCategory = nextParams.category;
  return currentCategory !== nextCategory;
}

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  const categories = getArticlesCategories();

  if (category) {
    return {
      articles: getArticlesByCategory(category),
      categories,
      category,
    };
  }

  return {
    articles: getArticles(),
    categories,
    category,
  };
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

      <Await resolve={categories}>
        {(categories) => (
          <header className="prose container">
            <h1>{title ?? "Artykuły"}</h1>
            <Categories showAllCategory categories={categories} />
          </header>
        )}
      </Await>

      <Await resolve={articles}>
        {(articles) => <Articles articles={articles} />}
      </Await>
    </>
  );
}
