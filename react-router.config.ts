import type { Config } from "@react-router/dev/config";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir, rename, rm } from "node:fs/promises";
import { existsSync } from "node:fs";

import { getArticlesCategories, getArticlesSlugs } from "./app/lib/articles";
import { getCoursesCategories, getCoursesSlugs } from "./app/lib/courses";

export default {
  ssr: true,
  buildDirectory: "dist",
  async prerender({ getStaticPaths }) {
    const articlesSlugs = await getArticlesSlugs();
    const articlesCategories = await getArticlesCategories();

    const coursesSlugs = await getCoursesSlugs();
    const coursesCategories = await getCoursesCategories();

    return [
      ...getStaticPaths(),
      ...articlesSlugs.map((s) => `/blog/${s}`),
      ...articlesCategories.map((s) => `/blog/kategorie/${s}`),
      ...coursesSlugs.map((s) => `/learning/${s}`),
      ...coursesCategories.map((s) => `/learning/kategorie/${s}`),
      "/404",
    ];
  },
  async buildEnd() {
    const files = import.meta.glob("./dist/client/**/index.html", {
      eager: true,
      import: "default",
      query: "?raw",
    });

    const __dirname = dirname(fileURLToPath(new URL(import.meta.url)));
    const __clientDirname = join(__dirname, "dist/client/");

    await Promise.all(
      Object.keys(files).map(async (key) => {
        const file = relative(__clientDirname, join(__dirname, key));
        if (file === "index.html") return;

        await rename(
          join(__clientDirname, file),
          join(__clientDirname, file.replace("\\index.html", ".html"))
        );

        const dir = join(__clientDirname, file.replace("\\index.html", ""));

        if (!existsSync(dir)) return;

        const { length } = await readdir(dir);

        if (!length) await rm(dir, { recursive: true });
      })
    );
  },
} satisfies Config;
