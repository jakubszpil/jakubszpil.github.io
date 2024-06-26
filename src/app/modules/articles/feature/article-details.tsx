import { notFound, useLoader, defineLoader, Seo } from "@libs/shared";

import { getArticle } from "../data-access/articles";
import Categories from "../ui/categories";

export const loader = defineLoader((args) => {
  const article = getArticle(args.params.slug!);

  if (!article) throw notFound();

  return article;
});

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
      <article className="prose container">{article.content}</article>
    </>
  );
}
