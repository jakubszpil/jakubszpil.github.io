import { createResourceService } from "@packages/shared/server";

import type { Article } from "./article";
import { articleFeedMapper, type ArticleFeed } from "./article-feed";
import { articleParser } from "./article-parser";

export class ArticleService extends createResourceService<Article, ArticleFeed>(
  {
    files: import.meta.glob<string>("../../../content/*.md", {
      import: "default",
      query: "?raw",
      eager: true,
    }),
    minifingStrategy: articleFeedMapper,
    parsingStrategy: articleParser,
  }
) {}
