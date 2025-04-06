import { Await, useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Seo } from "~/shared/components/ui/seo";

import Categories from "../components/blog/categories";
import EditResource from "../components/edit-resource";
import { getArticle } from "../lib/articles";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const article = getArticle(slug!);

  return { article };
}

export default function ArticleDetails() {
  const { article } = useLoaderData<typeof loader>();

  return (
    <Await resolve={article}>
      {(article) => (
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
      )}
    </Await>
  );
}
