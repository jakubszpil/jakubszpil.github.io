import type { LoaderFunctionArgs } from "react-router";

import Categories from "~/components/categories";
import EditResource from "~/components/edit-resource";
import { Banner } from "~/components/ui/banner";
import { Seo } from "~/components/ui/seo";
import { ArticleService } from "~/lib/articles";
import { encode, useDecodedLoaderData } from "~/lib/compress";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  const article = await ArticleService.findUnique(slug!);

  if (!article) {
    throw new Response(null, {
      status: 404,
      statusText: "Nie znaleziono",
    });
  }

  return encode(article);
}

export default function ArticleDetails() {
  const article = useDecodedLoaderData<typeof loader>();

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
        <Categories
          categories={article.categories}
          baseUrl="/blog"
          categoryPrefixUrl="/blog/kategorie"
        />
      </header>

      <article
        className="prose container pt-0 prose-emerald"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <EditResource slug={article.slug} resourceType="articles" />
    </>
  );
}
