import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { v4 } from "uuid";

export const processContent = async (content: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {
      properties: {
        className:
          "mr-1.5 no-underline hover:underline focus-visible:underline",
      },
      headingProperties: {
        className: "scroll-mt-20 lg:scroll-mt-4",
      },
      behavior: "prepend",
      content: [
        {
          type: "raw",
          value: "#",
        },
      ],
    })
    .use(rehypeHighlight)
    .use(rehypeStringify);

  const results = await processor.process(content);

  return results.toString();
};

export interface ContentResource {
  id: string;
  slug: string;
  content: string;
  resourceUrl: string;
  title: string;
  description: string;
  keywords: string[];
  createdAt: string;
}

export const parseMarkdownFile = async <T extends ContentResource>(
  file: string,
  slug: string,
  resourceType: string
): Promise<T> => {
  const { data, content } = matter(file);

  return {
    ...data,
    id: v4(),
    slug,
    content: await processContent(content),
    resourceUrl: `https://github.com/jakubszpil/jakubszpil.github.io/edit/main/app/content/${resourceType}/${slug}.md`,
  } as T;
};
