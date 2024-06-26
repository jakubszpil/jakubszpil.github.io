import classNames from "classnames";
import { Link } from "react-router-dom";

import { Button, ButtonProps, getLocalizedDate } from "@libs/shared";

import { type Article } from "../data-access/articles";

export interface ArticlesProps {
  articles: Article[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export default function Articles(props: ArticlesProps) {
  return (
    <section
      className={classNames(
        "container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",
        props.className
      )}
    >
      {props.articles.map((article) => (
        <Button
          key={article.id}
          asChild
          variant={props.variant ?? "outline"}
          className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6"
        >
          <Link to={`/blog/${article.slug}`}>
            <h3 className="line-clamp-3 flex-1 m-0">{article.title}</h3>
            <p className="line-clamp-3 mt-2 text-neutral-700 font-normal">
              {article.description}
            </p>
            {article.createdAt && (
              <span className="text-neutral-500 text-xs">
                {getLocalizedDate(article.createdAt)}
              </span>
            )}
          </Link>
        </Button>
      ))}
    </section>
  );
}
