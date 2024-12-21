import { Link } from "react-router";

import type { Article } from "~/lib/articles";
import { getLocalizedDate } from "~/lib/date";

import { Button, type ButtonProps } from "../ui/button";

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
          <Link to={`/blog/${article.slug}`}>
            <h2 className="line-clamp-3 text-base font-semibold flex-1 m-0">
              {article.title}
            </h2>
            <p className="line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300">
              {article.description}
            </p>
            {article.createdAt && (
              <span className="text-neutral-600 text-xs dark:text-neutral-400">
                {getLocalizedDate(article.createdAt)}
              </span>
            )}
          </Link>
        </Button>
      ))}
    </section>
  );
}