import { type LoaderFunctionArgs as LFA } from "react-router-dom";

import { Seo, useLoader } from "@libs/shared";

import { getArticle } from "../data-access/articles";
import Categories from "../ui/categories";

export async function loader({ params }: LFA) {
  const article = await getArticle(params.slug);

  if (!article)
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });

  return article;
}

export default function ArticleDetails() {
  const article = useLoader<typeof loader>();

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
    </>
  );
}
