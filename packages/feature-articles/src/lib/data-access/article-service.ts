import { ResourceService } from "@packages/shared/server";

import type { Article } from "./article";

export class ArticleService extends ResourceService<Article>(
  import.meta.glob<string>("../../../content/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
