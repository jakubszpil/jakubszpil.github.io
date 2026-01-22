import { createResourceService } from "./resources";
import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type MinifingStrategy,
  type ParsingStrategy,
} from "./content";

export interface ArticleFeed {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime: string;
}

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

export class ArticleParsingStrategy implements ParsingStrategy<Article> {
  async parse(slug: string, file: string): Promise<Article> {
    const { data, content } = processFile(file);

    const [fileContent, readingTime] = await processContent(content);

    return {
      slug,
      content: fileContent,
      readingTime: getReadingTimeLabel(readingTime),
      createdAt: new Date(data.createdAt).toISOString(),
      categories: data.categories,
      keywords: data.keywords,
      description: data.description,
      title: data.title,
    } satisfies Article;
  }
}

export class ArticleService extends createResourceService<Article, ArticleFeed>(
  {
    files: import.meta.glob<string>("../../content/articles/*.md", {
      import: "default",
      query: "?raw",
    }),
    minifingStrategy: new ArticleMinifingStrategy(),
    parsingStrategy: new ArticleParsingStrategy(),
  },
) {}
