import type { MinifingStrategy } from "@packages/shared/server";

import type { Article } from "./article";
import type { ArticleFeed } from "./article-feed";

export class ArticleMinifingStrategy implements MinifingStrategy<
  Article,
  ArticleFeed
> {
  minify(article: Article): ArticleFeed {
    return {
      createdAt: article.createdAt,
      description: article.description,
      readingTime: article.readingTime,
      slug: article.slug,
      title: article.title,
    };
  }
}
