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
import { join } from "node:path";
import { existsSync } from "node:fs";
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { v4 } from "uuid";

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

export function minifyAndPrerender(config?: {
  include?: string[];
  exclude?: string[];
  prerender?: boolean;
}): Plugin {
  return {
    name: "minify",
    async closeBundle() {
      const dist = join("./dist");
      if (!existsSync(dist)) return;

      let files = await readdir(dist, { recursive: true });

      if (config?.include) {
        files = files.filter((file) =>
          config.include?.some((ext) => file.endsWith(ext))
        );
      }

      if (config?.exclude) {
        files = files.filter(
          (file) => !config.exclude?.some((ext) => file.endsWith(ext))
        );
      }

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

      if (config?.prerender) {
        const sitemap = await readFile(join(dist, "sitemap.txt"), "utf-8");
        const index = await readFile(join(dist, "index.html"), "utf-8");

        const paths = sitemap
          .split(`https://jakubszpil.github.io`)
          .map((path) => path.replace("\n", "").replace("\r", ""))
          .filter(Boolean)
          .filter((path) => path !== "/");

        for (const path of paths) {
          const dir = join(dist, path);
          console.log(dir);
          await mkdir(dir, { recursive: true });
          await writeFile(join(dir, "index.html"), index, "utf-8");
        }
      }
    },
  };
}

export function chunks(): Plugin {
  const chunkName = (id: string, matcher: string) => {
    const path = id.slice(id.indexOf(matcher)).replace(matcher, "");
    return path
      .slice(0, path.indexOf("/"))
      .replace(/\.tsx?/, "")
      .replace(/\.mdx?/, "");
  };

  return {
    name: "chunks",
    config(config) {
      if (!config.build) config.build = {};
      if (!config.build.rollupOptions) config.build.rollupOptions = {};
      if (!config.build.rollupOptions.output)
        config.build.rollupOptions.output = {};

      config.build.rollupOptions.output = {
        manualChunks: (id) => {
          if (id.includes("/node_modules/")) {
            const name = chunkName(id, "/node_modules/");

            const is = (...libs: string[]) => libs.includes(name);

            if (is("react-router-dom", "@remix-run", "react-router"))
              return `vendor/routing`;

            if (
              is(
                "react",
                "react-dom",
                "scheduler",
                "react-fast-compare",
                "shallowequal"
              )
            )
              return `vendor/react`;

            return `vendor/libs`;
          }

          if (id.includes("feature"))
            return `pages/${chunkName(id, "/feature/")}`;

          if (id.includes("core")) return "core";
          if (id.includes("shared")) return "shared";
          if (id.includes("content")) {
            const contentType = chunkName(id, "/content/");
            const slug = chunkName(id, `/${contentType}/`);

            return `content/${contentType}/${slug}`;
          }
          if (id.includes("modules"))
            return `modules/${chunkName(id, "/modules/")}`;

          return "index";
        },
      };
    },
  };
}
