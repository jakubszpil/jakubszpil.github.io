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

export interface ContentResource {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  readingTime?: string;
  categories?: string[];
  keywords?: string[];
  content?: string;
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

export interface ParsingStrategy<T extends ContentResource> {
  parse(slug: string, file: string): Promise<T>;
}

export interface MinifingStrategy<T extends ContentResource, F> {
  minify(resource: T): F;
}

export async function parseContentResources<T extends ContentResource>(
  files: Record<string, string>,
  parsingStrategy: ParsingStrategy<T>
): Promise<T[]> {
  const entries = Object.entries(files).map(([key, file]) =>
    parsingStrategy.parse(
      key.slice(key.lastIndexOf("/") + 1, key.indexOf(".md")),
      file
    )
  );

  const content = await Promise.all(entries);

  const resources = content.toSorted((first, second) => {
    invariant(first.createdAt);
    invariant(second.createdAt);

    const firstCreationTime = new Date(first.createdAt).getTime();
    const secondCreationTime = new Date(second.createdAt).getTime();

    return secondCreationTime - firstCreationTime;
  });

  return resources;
}
