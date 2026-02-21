import { useLoaderData, type LoaderFunctionArgs } from "react-router";

import { Banner } from "~/components/banner";
import { EditResource } from "~/components/edit-resource";
import { BreadcrumbWithCategory } from "~/components/breadcrumb-with-category";
import { getArticle } from "~/lib/articles";
import { notFound } from "~/lib/navigation";
import { createMetaTags } from "~/lib/meta";
import { TableOfContents } from "~/components/table-of-contents";

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

  return (
    <>
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

      <TableOfContents>
        {(ref) => (
          <>
            <article
              ref={ref}
              className="prose container px-0 pt-0 prose-emerald"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <EditResource slug={article.slug} resourceType="articles" />
          </>
        )}
      </TableOfContents>
    </>
  );
}
