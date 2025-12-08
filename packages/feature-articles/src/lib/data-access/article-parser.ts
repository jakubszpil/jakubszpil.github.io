import {
  type ParsingStrategy,
  getReadingTimeLabel,
  processContent,
  processFile,
} from "@packages/shared/server";

import type { Article } from "./article";

export const articleParser: ParsingStrategy<Article> = async (slug, file) => {
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
};
