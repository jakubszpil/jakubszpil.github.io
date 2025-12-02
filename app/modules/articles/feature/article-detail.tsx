import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Banner } from "../../../shared/ui/banner";
import { EditResource } from "../../../shared/ui/edit-resource";
import { Seo } from "../../../shared/ui/seo";
import { ArticleService } from "../data-access/article-service";
import { ArticleCategories } from "../ui/article-categories";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const article = await ArticleService.findUnique(slug);

  if (!article) {
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });
  }

  return article;
}

export default function ArticleDetail() {
  const article = useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
        keywords={article.keywords}
        publishedTime={article.createdAt}
        type="article"
      />

      <header className="prose container">
        <h1 className="mb-5">{article.title}</h1>
        <Banner
          className="my-6"
          createdAt={article.createdAt}
          readingTime={article.readingTime}
        />
        <ArticleCategories categories={article.categories} />
      </header>

      <article
        className="prose container pt-0 prose-emerald"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <EditResource slug={article.slug} resourceType="articles" />
    </>
  );
}
