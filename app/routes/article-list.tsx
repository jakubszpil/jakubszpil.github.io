import type { LoaderFunctionArgs } from "react-router";

import Categories from "~/components/categories";
import Posts from "~/components/posts";
import { Seo } from "~/components/ui/seo";
import { ArticleService } from "~/lib/articles";
import { encode, useDecodedLoaderData } from "~/lib/compress";
import { getCapitalizedIndividualName } from "~/lib/string";

export async function loader({ params: { category } }: LoaderFunctionArgs) {
  return encode({
    articles: await ArticleService.findAllByCategory(category),
    categories: await ArticleService.getCategories(),
    category,
  });
}

export default function ArticleList() {
  const { articles, categories, category } =
    useDecodedLoaderData<typeof loader>();

  const title = category ? getCapitalizedIndividualName(category) : undefined;

  return (
    <>
      <Seo
        title={title ? `Artykuły / ${title}` : "Artykuły"}
        description="Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."
      />

      <header className="prose container">
        <h1>{title ?? "Artykuły"}</h1>
        <Categories
          showAllCategory
          categories={categories}
          baseUrl="/blog"
          categoryPrefixUrl="/blog/kategorie"
        />
      </header>

      <Posts pathPrefix="/blog" posts={articles} />
    </>
  );
}
