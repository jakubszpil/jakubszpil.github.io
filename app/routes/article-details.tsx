import { useLoaderData } from "react-router";

import Categories from "~/components/blog/categories";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";
import { getArticle, getArticlesSlugs } from "~/lib/articles";

import type { Route } from "./+types/article-details";
import { cacheServerLoader } from "~/lib/cache";

export async function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug;
  const slugs = await getArticlesSlugs();

  if (!slugs.includes(slug))
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });

  const article = await getArticle(slug);

  return article;
}

export async function clientLoader({
  serverLoader,
  params,
}: Route.ClientLoaderArgs) {
  return await cacheServerLoader(
    ["course-details", params?.slug],
    serverLoader
  );
}

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
