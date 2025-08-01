import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkReadingTime from "remark-reading-time";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { v4 } from "uuid";
import invariant from "tiny-invariant";

import { shuffleArray } from "./array";

function getAnchorContentBasedOnLevel(level: number): string {
  let content = "";
  for (let i = 0; i < level; i++) {
    content += ">";
  }
  return content;
}

export const processContent = async (content: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkGfm)
    .use(remarkReadingTime, { name: "readingTime" })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      properties: {
        className:
          "mr-2 no-underline hover:underline focus-visible:underline select-none",
      },
      headingProperties: {
        className: "scroll-mt-20 lg:scroll-mt-10",
      },
      behavior: "prepend",
      content: (element) => {
        const tag = element.tagName;
        const level = parseInt(tag[tag.length - 1], 10);

        return [
          {
            type: "raw",
            value: getAnchorContentBasedOnLevel(level),
          },
        ];
      },
    })
    .use(rehypeHighlight)
    .use(rehypeStringify);

  const results = await processor.process(content);

  const readingTime = results.data.readingTime as {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };

  return [results.toString(), readingTime.time] as const;
};

export abstract class ContentQuiz {
  abstract title: string;
  abstract questions: ContentQuizQuestion[];
}

export abstract class ContentQuizQuestion {
  abstract question: string;
  abstract options: string[];
  abstract answer: number;
  abstract explanation?: string;
}

export abstract class ContentResource {
  abstract id: string;
  abstract slug: string;
  abstract title: string;
  abstract description: string;
  abstract createdAt: string;
  abstract readingTime?: string;
  abstract categories?: string[];
  abstract keywords?: string[];
  abstract resourceUrl?: string;
  abstract content?: string;
  abstract quiz?: ContentQuiz;
}

export const parseQuiz = async (
  resource: any
): Promise<ContentQuiz | undefined> => {
  const quiz: ContentQuiz | undefined = resource?.quiz;
  if (!quiz) return undefined;

  const questions = await Promise.all(
    quiz.questions.map(async (question) => {
      const answer = question.options[question.answer];
      const options = shuffleArray(question.options);
      const index = options.indexOf(answer);
      const [content] = await processContent(question.question);

      return {
        ...question,
        question: content,
        answer: index,
        options,
      };
    })
  );

  return {
    ...quiz,
    questions,
  };
};

function getReadingTime(readingTime: number) {
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

export const parseMarkdownFile = async <T extends ContentResource>(
  file: string,
  slug: string,
  resourceType: string
): Promise<T> => {
  const { data, content } = matter(file);

  const quiz = await parseQuiz(data);

  const [fileContent, readingTime] = await processContent(content);

  return {
    ...data,
    id: v4(),
    slug,
    content: fileContent,
    resourceUrl: `/app/content/${resourceType}/${slug}.md`,
    quiz,
    readingTime: getReadingTime(readingTime),
    createdAt: new Date(data.createdAt).toISOString(),
  } as T;
};

export function minifyContentResource<T extends ContentResource>(resource: T) {
  const copy = { ...resource };
  if (!copy.content) delete copy["readingTime"];
  delete copy["content"];
  delete copy["quiz"];
  delete copy["resourceUrl"];
  delete copy["keywords"];
  delete copy["categories"];
  return copy;
}

const CACHE: Record<string, ContentResource[]> = {};

async function mapContentResourceEntries<T extends ContentResource>(
  cacheKey: string,
  files: Record<string, string>
): Promise<T[]> {
  if (cacheKey in CACHE) return CACHE[cacheKey] as T[];

  const entries = Object.entries(files).map(async ([key, file]) => {
    const slug = key.slice(key.lastIndexOf("/") + 1, key.indexOf(".md"));
    const keyWithoutSlug = key.slice(0, key.lastIndexOf("/"));
    const resourceType = keyWithoutSlug.slice(
      keyWithoutSlug.lastIndexOf("/") + 1
    );

    return await parseMarkdownFile<T>(file, slug, resourceType);
  });

  const resources = await Promise.all(entries);

  CACHE[cacheKey] = resources;

  return resources;
}

export async function parseContentResources<T extends ContentResource>(
  cacheKey: string,
  files: Record<string, string>,
  filters?: {
    limit?: number;
    minify?: boolean;
  }
): Promise<T[]> {
  const content = await mapContentResourceEntries<T>(cacheKey, files);

  const resources = content
    .sort((first, second) => {
      invariant(first.createdAt);
      invariant(second.createdAt);

      const firstCreationTime = new Date(first.createdAt).getTime();
      const secondCreationTime = new Date(second.createdAt).getTime();

      return secondCreationTime - firstCreationTime;
    })
    .slice(0, filters?.limit ?? content.length);

  if (filters?.minify ?? true) {
    return resources.map(minifyContentResource);
  }

  return resources;
}
