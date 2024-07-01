import { v4 } from "uuid";
import { Plugin } from "vite";
import { unified } from "unified";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const getProcessor = () =>
  unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify);

export function mdx(): Plugin {
  const processor = getProcessor();

  const process = async (content: string) => {
    const results = await processor.process(content);
    return results.toString();
  };

  return {
    name: "markdown",
    async transform(code, id) {
      if (id.includes(".md")) {
        const slug = id.slice(id.lastIndexOf("/") + 1, id.indexOf(".md"));

        const { data, content } = matter(code);

        return {
          code: `export default ${JSON.stringify({
            id: v4(),
            slug,
            content: await process(content),
            ...data,
          })}`,
        };
      }
    },
  };
}
