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
import invariant from "tiny-invariant";

import { shuffleArray } from "./array";

function getAnchorContentBasedOnLevel(level: number): string {
  let content = "";
  for (let i = 0; i < level; i++) {
    content += ">";
  }
  return content;
}

export async function processContent(content: string) {
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
        className: "scroll-mt-20",
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
    time: number;
  };

  return [results.toString(), readingTime.time] as const;
}

export interface ContentQuiz {
  title: string;
  questions: ContentQuizQuestion[];
}

export interface ContentQuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}

export interface ContentResource {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime?: string;
  categories?: string[];
  keywords?: string[];
  content?: string;
  quiz?: ContentQuiz;
}

export async function parseQuiz(
  resource: any
): Promise<ContentQuiz | undefined> {
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
}

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

export async function parseMarkdownFile<T extends ContentResource>(
  file: string,
  slug: string
): Promise<T> {
  const { data, content } = matter(file);

  const [fileContent, readingTime] = await processContent(content);

  const resource = {
    ...data,
    slug,
    content: fileContent,
    readingTime: getReadingTime(readingTime),
    createdAt: new Date(data.createdAt).toISOString(),
  } as T;

  if (data.quiz) {
    const quiz = await parseQuiz(data);
    resource.quiz = quiz;
  }

  return resource;
}

async function mapContentResourceEntries<T extends ContentResource>(
  files: Record<string, string>
): Promise<T[]> {
  const entries = Object.entries(files).map(([key, file]) =>
    parseMarkdownFile<T>(
      file,
      key.slice(key.lastIndexOf("/") + 1, key.indexOf(".md"))
    )
  );

  return Promise.all(entries);
}

export async function parseContentResources<T extends ContentResource>(
  files: Record<string, string>
): Promise<T[]> {
  const content = await mapContentResourceEntries<T>(files);

  const resources = content.sort((first, second) => {
    invariant(first.createdAt);
    invariant(second.createdAt);

    const firstCreationTime = new Date(first.createdAt).getTime();
    const secondCreationTime = new Date(second.createdAt).getTime();

    return secondCreationTime - firstCreationTime;
  });

  return resources;
}
