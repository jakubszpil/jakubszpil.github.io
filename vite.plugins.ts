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
import { join, resolve } from "node:path";
import { existsSync } from "node:fs";
import { readdir, readFile, writeFile } from "node:fs/promises";

export function mdx(): Plugin {
  const processor = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify);

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

export function minify(extensions: string[]): Plugin {
  return {
    name: "minify",
    async closeBundle() {
      const dist = join(resolve("."), "dist");
      if (!existsSync(dist)) return;

      const files = (await readdir(dist, { recursive: true })).filter((i) =>
        extensions.some((ext) => i.includes(ext))
      );

      for (const file of files) {
        const content = await readFile(join(dist, file), "utf-8");

        let result = content
          .replace(/(\r\n|\n|\r)/gm, "")
          .replace(/[>]\s\s+[<]/g, "><")
          .replace(/\s\s+/g, " ")
          .replace(/\s\/[>]/g, "/>");

        if (file.includes("json")) result = result.replace(/\s/g, "");

        await writeFile(join(dist, file), result, "utf-8");
      }
    },
  };
}
