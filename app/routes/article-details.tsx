import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";

import Articles from "~/components/blog/articles";
import Categories from "~/components/blog/categories";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import { EditResource } from "~/components/ui/edit-resource";
import { Seo } from "~/components/ui/seo";
import { getArticle, getArticleSiblings } from "~/lib/articles";

export async function loader({
  params: { slug, category },
}: LoaderFunctionArgs) {
  const article = await getArticle(slug!);
  const firstCategory = category ?? article.categories![0];
  const siblings = await getArticleSiblings(article.slug, firstCategory);

  return { article, siblings, category, firstCategory };
}

export default function ArticleDetails() {
  const { article, siblings, category, firstCategory } =
    useLoaderData<typeof loader>();

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
        keywords={article.keywords}
      />

      <Breadcrumb className="container pb-0 px-3">
        <BreadcrumbList className="!gap-0">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Button
                asChild
                variant="link"
                size="sm"
                className="text-neutral-500"
              >
                <Link prefetch="intent" to="/blog">
                  Blog
                </Link>
              </Button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {category && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="capitalize">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-neutral-500"
                  >
                    <Link prefetch="intent" to={`/blog/kategorie/${category}`}>
                      {category}
                    </Link>
                  </Button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          <BreadcrumbItem>
            <Button
              asChild
              disabled
              variant="link"
              size="sm"
              className="!no-underline text-wrap w-auto h-auto"
            >
              <BreadcrumbPage>{article.title}</BreadcrumbPage>
            </Button>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <header className="prose container">
        <h1>{article.title}</h1>
        <Categories categories={article.categories} />
      </header>

      <article
        className="prose container"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <EditResource resourceUrl={article.resourceUrl} />

      {siblings.length > 0 && (
        <>
          <div className="prose container pt-0 text-center">
            <p>
              Zobacz więcej artykułów z kategorii:{" "}
              <Link prefetch="intent" to={`/blog/kategorie/${firstCategory}`}>
                #{firstCategory}
              </Link>
            </p>
          </div>

          <Articles
            articles={siblings}
            className="!flex *:!min-w-64 *:md:!max-w-sm *:flex-1 !flex-wrap justify-center"
            path={(slug) => `/blog/kategorie/${firstCategory}/${slug}`}
          />
        </>
      )}
    </>
  );
}
