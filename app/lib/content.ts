import matter from "gray-matter";
import { unified } from "unified";

import { getRemarkPlugins } from "./remark-plugins";
import { getRehypePlugins } from "./rehype-plugins";

export async function processContent(content: string) {
  const processor = unified().use(getRemarkPlugins()).use(getRehypePlugins());

  const results = await processor.process(content);

  const readingTime = results.data.readingTime as {
    time: number;
  };

  return [results.toString(), readingTime.time] as const;
}

export function getReadingTimeLabel(readingTime: number) {
  const minutes = Math.round(readingTime / 60000);
  const minutesAsString = minutes.toString();

  if (minutesAsString === "1") {
    return "1 minuta";
  }

  if (
    minutesAsString.at(-2) !== "1" &&
    (minutesAsString.endsWith("2") ||
      minutesAsString.endsWith("3") ||
      minutesAsString.endsWith("4"))
  ) {
    return `${minutes} minuty`;
  }

  return `${minutes} minut`;
}

export function processFile(file: string) {
  const { data, content } = matter(file);
  return { data, content };
}
