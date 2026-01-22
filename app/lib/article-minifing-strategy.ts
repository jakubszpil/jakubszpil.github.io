import type { Article } from "./article";
import type { ArticleFeed } from "./article-feed";
import type { MinifingStrategy } from "./content";

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
