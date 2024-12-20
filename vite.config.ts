import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { VitePWA as pwa } from "vite-plugin-pwa";
import invariant from "tiny-invariant";
import { unified } from "unified";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import { join } from "node:path";
import { existsSync } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { v4 } from "uuid";

const timestamp = Date.now().toString();

function mdxToApiJSON(): Plugin {
  const process = async (content: string) => {
    const processor = unified()
      .use(remarkParse)
      .use(remarkHtml)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSlug)
      .use(rehypeHighlight)
      .use(rehypeStringify);

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
      const contentDir = join("./src/app/content");

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

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      "import.meta.env.VITE_ETAG": timestamp,
    },
    plugins: [
      mdxToApiJSON(),
      react(),
      tsconfigPaths(),
      pwa({
        registerType: "autoUpdate",
        workbox: {
          cacheId: timestamp,
          globPatterns: [
            "assets/**/*.{js,css}",
            "content/**/*.json",
            "static/**/*.{css,woff2,png}",
            "./*.{html,webp,ico,svg,js}",
          ],
          runtimeCaching: [
            {
              urlPattern: ({ sameOrigin, url }) =>
                sameOrigin && url.pathname.endsWith(".js"),
              handler: "CacheFirst",
              options: {
                cacheName: "module-cache",
              },
            },
            {
              urlPattern: ({ sameOrigin, url }) =>
                sameOrigin && url.pathname.startsWith("/content"),
              handler: "CacheFirst",
              options: {
                cacheName: "api-content-cache",
              },
            },
          ],
        },
        pwaAssets: {
          config: true,
          disabled: false,
          includeHtmlHeadLinks: true,
        },
        manifest: {
          name: "Jakub Szpil",
          short_name: "jakubszpil",
          description: "Blog, portfolio i kursy frontendowe",
          theme_color: "#0a0a0a",
          background_color: "#ffffff",
          lang: "pl",
          display: "standalone",
          start_url: "/",
          id: "/",
          screenshots: [
            {
              src: "/static/media/screenshot-iphone-home.png",
              sizes: "750x1334",
              type: "image/png",
              form_factor: "narrow",
              label: "Strona główna",
            },
            {
              src: "/static/media/screenshot-iphone-blog.png",
              sizes: "750x1334",
              type: "image/png",
              form_factor: "narrow",
              label: "Lista artykułów",
            },
            {
              src: "/static/media/screenshot-iphone-learning.png",
              sizes: "750x1334",
              type: "image/png",
              form_factor: "narrow",
              label: "Lista kursów",
            },
            {
              src: "/static/media/screenshot-ipad-home.png",
              sizes: "2048x1536",
              type: "image/png",
              form_factor: "wide",
              label: "Strona główna",
            },
            {
              src: "/static/media/screenshot-ipad-blog.png",
              sizes: "2048x1536",
              type: "image/png",
              form_factor: "wide",
              label: "Lista artykułów",
            },
            {
              src: "/static/media/screenshot-ipad-learning.png",
              sizes: "2048x1536",
              type: "image/png",
              form_factor: "wide",
              label: "Lista kursów",
            },
          ],
          icons: [
            {
              src: "/static/media/pwa-64x64.webp",
              sizes: "64x64",
              type: "image/webp",
            },
            {
              src: "/static/media/pwa-192x192.webp",
              sizes: "192x192",
              type: "image/webp",
            },
            {
              src: "/static/media/pwa-512x512.webp",
              sizes: "512x512",
              type: "image/webp",
            },
            {
              src: "/static/media/maskable-icon-512x512.webp",
              sizes: "512x512",
              type: "image/webp",
              purpose: "maskable",
            },
          ],
        },
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    resolve: {
      alias: {
        "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
      },
    },
    build: {
      modulePreload: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      cssCodeSplit: true,
      minify: true,
      manifest: true,
    },
    test: {
      include: ["src/app/**/*.{test,spec}.{js,mjs,cjs,ts,mtsw,cts,jsx,tsx}"],
      exclude: ["node_modules/**", "dist/**"],
      testTimeout: 20000,
      globals: true,
      watch: false,
      environment: "jsdom",
    },
  };
});
