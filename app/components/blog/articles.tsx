import type { Article } from "~/lib/articles";

import { Banner } from "../ui/banner";
import { Button, type ButtonProps } from "../ui/button";
import { LinkWithPrefetch } from "../ui/link-with-prefetch";

export interface ArticlesProps {
  articles: Article[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export default function Articles(props: ArticlesProps) {
  return (
    <section
      className={`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${
        props.className ?? ""
      }`}
    >
      {props.articles.map((article) => (
        <Button
          key={article.id}
          asChild
          variant={props.variant ?? "outline"}
          className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6"
        >
          <LinkWithPrefetch to={`/blog/${article.slug}`}>
            <h2 className="line-clamp-3 text-base font-semibold flex-1 m-0">
              {article.title}
            </h2>
            <p className="line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300">
              {article.description}
            </p>
            <Banner
              className="!text-xs !text-neutral-500 dark:!text-neutral-400 !mb-0"
              createdAt={article.createdAt}
              readingTime={article.readingTime}
            />
          </LinkWithPrefetch>
        </Button>
      ))}
    </section>
  );
}
