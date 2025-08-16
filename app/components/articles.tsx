import "./__styles__/articles.css";
import { Banner } from "./ui/banner";
import { Button, type ButtonProps } from "./ui/button";
import { LinkWithPrefetch } from "./ui/link-with-prefetch";

import type { Article } from "~/lib/articles";
import { cn } from "~/lib/utils";

export interface ArticlesProps {
  articles: Article[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export default function Articles(props: ArticlesProps) {
  return (
    <section className={cn("articles", props.className)}>
      {props.articles.map((article) => (
        <Button
          key={article.id}
          asChild
          variant={props.variant ?? "outline"}
          className="articles__feed"
        >
          <LinkWithPrefetch to={`/blog/${article.slug}`}>
            <h2 className="articles__title">{article.title}</h2>
            <p className="articles__description">{article.description}</p>
            <Banner
              className="articles__banner"
              createdAt={article.createdAt}
              readingTime={article.readingTime}
            />
          </LinkWithPrefetch>
        </Button>
      ))}
    </section>
  );
}
