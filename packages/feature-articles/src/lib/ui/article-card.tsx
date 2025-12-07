import {
  Banner,
  LinkWithPrefetch,
  Button,
  type ButtonProps,
} from "@packages/shared";

import type { ArticleFeed } from "../data-access/article-feed";

export interface ArticleCardProps {
  article: ArticleFeed;
  variant?: ButtonProps["variant"];
}

export function ArticleCard({ article, variant }: ArticleCardProps) {
  return (
    <Button
      key={article.slug}
      asChild
      variant={variant ?? "outline"}
      className="inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap! no-underline truncate p-6"
    >
      <LinkWithPrefetch to={`/blog/${article.slug}`}>
        <h2 className="line-clamp-3 text-base font-semibold flex-1 m-0!">
          {article.title}
        </h2>
        <p className="line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300">
          {article.description}
        </p>
        <Banner
          className="text-xs! text-neutral-500 dark:text-neutral-400 mb-0"
          createdAt={article.createdAt}
          readingTime={article.readingTime}
        />
      </LinkWithPrefetch>
    </Button>
  );
}
