import type { ArticleFeed } from "../data-access/articles";
import { cn } from "../../shared/utils/utils";
import { ArticleCard } from "./article-card";
import type { ButtonProps } from "../../components/ui/button";

export interface ArticleCardsProps {
  articles: ArticleFeed[];
  className?: string;
  variant?: ButtonProps["variant"];
}

export function ArticleCards({
  articles,
  className,
  variant,
}: ArticleCardsProps) {
  return (
    <section
      className={cn(
        "container pt-0! prose grid gap-3 grid-cols-fill",
        className,
      )}
    >
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} variant={variant} />
      ))}
    </section>
  );
}
