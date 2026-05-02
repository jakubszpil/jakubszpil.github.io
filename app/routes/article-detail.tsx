import { useRef } from "react";
import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Banner } from "~/shared/ui/banner";
import { EditResource } from "~/shared/ui/edit-resource";
import { BreadcrumbWithCategory } from "~/shared/ui/breadcrumb-with-category";
import { TableOfContents } from "~/shared/ui/table-of-contents";
import { getArticle } from "~/blog/data-access/articles";
import { notFound } from "~/shared/utils/navigation";
import { createMetaTags } from "~/shared/utils/meta";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const article = await getArticle(slug);

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

  const ref = useRef<HTMLElement>(null);

  return (
    <>
      <TableOfContents
        ref={ref}
        additionalActions={
          <EditResource resourceType="articles" slug={article.slug} />
        }
      />

      <BreadcrumbWithCategory
        category={article.category}
        categoryPrefixUrl="/blog/kategorie"
        baseUrl="/blog"
        baseLabel="Artykuły"
      />

      <header className="prose container">
        <h1 className="mb-5">{article.title}</h1>
        <Banner
          className="my-6"
          createdAt={article.createdAt}
          readingTime={article.readingTime}
        />
      </header>

      <article
        className="prose container pt-0 prose-emerald"
        dangerouslySetInnerHTML={{ __html: article.content }}
        ref={ref}
      />
    </>
  );
}
