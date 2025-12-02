import { ResourceService } from "../../../shared/data-access/resources";
import type { Article } from "./article";

export class ArticleService extends ResourceService<Article>(
  import.meta.glob<string>("../../../../content/articles/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
