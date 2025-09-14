import { ResourceService } from "./resources";

export interface Article {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
  categories: string[];
  keywords: string[];
  content: string;
}

export class ArticleService extends ResourceService<Article>(
  import.meta.glob<string>("../content/articles/*.md", {
    import: "default",
    query: "?raw",
    eager: true,
  })
) {}
