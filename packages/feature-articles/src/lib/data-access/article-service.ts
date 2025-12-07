import {
  createResourceService,
  defaultParsingStrategy,
} from "@packages/shared/server";

import type { Article } from "./article";
import { articleFeedMapper, type ArticleFeed } from "./article-feed";

export class ArticleService extends createResourceService<Article, ArticleFeed>(
  {
    files: import.meta.glob<string>("../../../content/*.md", {
      import: "default",
      query: "?raw",
      eager: true,
    }),
    minifingStrategy: articleFeedMapper,
    parsingStrategy: defaultParsingStrategy,
  }
) {}
