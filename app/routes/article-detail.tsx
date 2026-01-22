import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import {
  Banner,
  createMetaTags,
  EditResource,
  notFound,
} from "@packages/shared";

import { ArticleCategories } from "../components/article-categories";
import { ArticleService } from "../lib/article-service";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const article = await ArticleService.findUnique(slug);

  if (!article) throw notFound();

  return article;
}

export const meta = createMetaTags<typeof loader>(
  ({ loaderData: article }) => ({
    title: article?.title,
    description: article?.description,
    keywords: article?.keywords,
    publishedTime: article?.createdAt,
    type: "article",
  }),
);

export default function ArticleDetail() {
  const article = useLoaderData<typeof loader>();

  return (
    <>
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
