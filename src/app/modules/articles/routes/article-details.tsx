import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { BackToPreviousPage } from "~/components/ui/back-to-previous-page";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";

import { getArticle, getArticlesSlugs } from "../lib/articles";
import Categories from "../components/categories";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug!;
  const slugs = await getArticlesSlugs();

  if (!slugs.includes(slug))
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });

  const article = await getArticle(slug);

  return article;
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
        <BackToPreviousPage />
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
