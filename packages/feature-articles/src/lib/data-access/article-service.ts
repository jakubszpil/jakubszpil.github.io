import { createResourceService } from "@packages/shared/server";

import type { Article } from "./article";
import type { ArticleFeed } from "./article-feed";
import { ArticleParsingStrategy } from "./article-parsing-strategy";
import { ArticleMinifingStrategy } from "./article-minifing-strategy";

export class ArticleService extends createResourceService<Article, ArticleFeed>(
  {
    files: import.meta.glob<string>("../../../content/*.md", {
      import: "default",
      query: "?raw",
    }),
    minifingStrategy: new ArticleMinifingStrategy(),
    parsingStrategy: new ArticleParsingStrategy(),
  }
) {}
