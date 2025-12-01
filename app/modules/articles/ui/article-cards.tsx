import type { ButtonProps } from "../../../components/ui/button";
import type { Article } from "../../../lib/articles";
import { cn } from "../../../lib/utils";
import { ArticleCard } from "./article-card";

export interface ArticleCardsProps {
  articles: Pick<
    Article,
    "slug" | "title" | "description" | "createdAt" | "readingTime"
  >[];
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
        className
      )}
    >
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} variant={variant} />
      ))}
    </section>
  );
}
