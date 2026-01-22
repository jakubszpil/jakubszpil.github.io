import {
  getReadingTimeLabel,
  processContent,
  processFile,
  type ParsingStrategy,
} from "./content";
import type { Article } from "./article";

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
