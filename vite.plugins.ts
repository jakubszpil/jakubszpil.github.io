import invariant from "tiny-invariant";
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
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { v4 } from "uuid";

export function minify(config?: {
  include?: string[];
  exclude?: string[];
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
              return "routing";

            if (
              is(
                "react",
                "react-dom",
                "scheduler",
                "react-fast-compare",
                "shallowequal"
              )
            )
              return "react";

            return "runtime";
          }

          if (id.includes("/content/"))
            return `content/${chunkName(
              id,
              `/${chunkName(id, "/content/")}/`
            )}`;

          if (id.includes("/feature/"))
            return `pages/${chunkName(id, "/feature/")}`;

          if (id.includes("/ui/")) return "components";

          if (id.includes("/utils/")) return "utils";

          if (id.includes("app.")) return "app";
        },
      };
    },
  };
}

export function mdxToApiJSON(): Plugin {
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

  interface Resource {
    id: string;
    slug: string;
    content: string;
    resourceUrl?: string;
    title?: string;
    description?: string;
    keywords?: string[];
    categories?: string[];
    createdAt?: string;
  }

  function excludeFieldsFromResource({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    content,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    keywords,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    categories,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resourceUrl,
    ...resource
  }: Resource): Omit<
    Resource,
    "content" | "keywords" | "categories" | "resourceUrl"
  > {
    return resource;
  }

  return {
    name: "mdx-to-api-json",
    async config(_, env) {
      const publicDir = join("./public");

      const publicContentDir = join(publicDir, "content");
      const contentDir = join("./content");

      if (env.command === "build") {
        if (existsSync(publicContentDir)) return;
      }

      const resourceTypes = await readdir(contentDir);

      if (!existsSync(publicContentDir)) await mkdir(publicContentDir);

      const searchResults: Record<string, Resource[]> = {};

      for (const resourceType of resourceTypes) {
        const resourcesByType: Resource[] = [];

        const resourceTypeDir = join(contentDir, resourceType);
        const publicResourceTypeDir = join(publicContentDir, resourceType);

        if (!existsSync(publicResourceTypeDir))
          await mkdir(publicResourceTypeDir);

        const filenames = await readdir(resourceTypeDir);

        for (const filename of filenames) {
          const file = await readFile(join(resourceTypeDir, filename), "utf-8");
          const slug = filename.replace(".mdx", "");

          const { data, content } = matter(file);

          const resource: Resource = {
            id: v4(),
            slug,
            content: await process(content),
            resourceUrl: `https://github.com/jakubszpil/jakubszpil.github.io/edit/main/content/${resourceType}/${filename}`,
            ...data,
          };

          resourcesByType.push(resource);

          await writeFile(
            join(publicResourceTypeDir, `${slug}.json`),
            JSON.stringify(resource),
            "utf-8"
          );
        }

        const resources = resourcesByType.sort((first, second) => {
          invariant(first.createdAt);
          invariant(second.createdAt);

          const firstCreationTime = new Date(first.createdAt).getTime();
          const secondCreationTime = new Date(second.createdAt).getTime();

          return secondCreationTime - firstCreationTime;
        });

        const categoriesDir = join(publicResourceTypeDir, "categories");

        if (!existsSync(categoriesDir)) await mkdir(categoriesDir);

        const categoriesOccurrences: Record<string, number> = {};

        const slugs = resources.map((resource) => resource.slug);

        await writeFile(
          join(publicResourceTypeDir, "slugs.json"),
          JSON.stringify(slugs),
          "utf-8"
        );

        const categories = resources
          .reduce<string[]>((categories, resource) => {
            resource.categories?.forEach((category) => {
              if (!(category in categoriesOccurrences))
                categoriesOccurrences[category] = 0;
              if (!categories.includes(category)) categories.push(category);

              categoriesOccurrences[category]++;
            });

            return categories;
          }, [])
          .sort((a, b) => categoriesOccurrences[b] - categoriesOccurrences[a]);

        await writeFile(
          join(publicResourceTypeDir, "categories.json"),
          JSON.stringify(categories),
          "utf-8"
        );

        for (const category of categories) {
          const resourcesByCategory = resources.filter((resource) =>
            resource.categories?.includes(category)
          );

          await writeFile(
            join(categoriesDir, `${category}.json`),
            JSON.stringify(resourcesByCategory.map(excludeFieldsFromResource)),
            "utf-8"
          );
        }

        await writeFile(
          join(publicContentDir, `${resourceType}.json`),
          JSON.stringify(resources.map(excludeFieldsFromResource)),
          "utf-8"
        );

        searchResults[resourceType] = resources;
      }

      await writeFile(
        join(publicContentDir, "search.json"),
        JSON.stringify(
          Object.fromEntries(
            Object.entries(searchResults).map(([key, value]) => [
              key,
              value.map((r) => {
                delete r.resourceUrl;
                return r;
              }),
            ])
          )
        ),
        "utf-8"
      );
    },
  };
}
