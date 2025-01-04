import { useLoaderData } from "react-router";

import Categories from "~/components/blog/categories";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";
import { getArticle } from "~/lib/articles";
import { cacheClientLoader } from "~/lib/cache";

import type { Route } from "./+types/article-details";

export async function loader({ params }: Route.LoaderArgs) {
  const article = await getArticle(params.slug);

  return article;
}

export const clientLoader = cacheClientLoader;

export default function ArticleDetails() {
  const article = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
        keywords={article.keywords}
      />

      <header className="prose container">
        <h1>{article.title}</h1>
        <Categories categories={article.categories} />
      </header>

      <article
        className="prose container"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <EditResource resourceUrl={article.resourceUrl} />
    </>
  );
}
