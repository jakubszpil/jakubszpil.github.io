import type { Config } from "@react-router/dev/config";
import { join } from "node:path";
import { readdir, readFile, rename, writeFile } from "node:fs/promises";
import { minify } from "uglify-js";

import {
  getArticleSlugs,
  getArticleCategories,
} from "@packages/feature-articles/server";
import {
  getCourseSlugs,
  getCourseCategories,
} from "@packages/feature-courses/server";
import { getProjectTechnologies } from "@packages/feature-projects/server";

function minifyContent(content: string) {
  const { code } = minify({ "file.js": content }, { toplevel: true });
  return code.replace(/\bvar\b/g, "let");
}

export default {
  ssr: false,
  buildDirectory: "dist",
  routeDiscovery: { mode: "initial" },
  future: {
    v8_viteEnvironmentApi: true,
    v8_splitRouteModules: "enforce",
    unstable_optimizeDeps: true,
  },
  async buildEnd({ reactRouterConfig }) {
    const __clientDirname = join(reactRouterConfig.buildDirectory, "client");

    const files = await readdir(__clientDirname, { recursive: true });

    for (const file of files) {
      if (file.includes("index.html") && file !== "index.html") {
        const path = join(__clientDirname, file);
        const targetPath = `${join(path, "..")}.html`;
        await rename(path, targetPath);
      }

      if (file.includes("fetch.js")) {
        const targetPath = join(__clientDirname, file);
        const fileContent = await readFile(targetPath, "utf-8");
        await writeFile(targetPath, minifyContent(fileContent), "utf-8");
      }
    }
  },
  async prerender({ getStaticPaths }) {
    const blogArticles = await getArticleSlugs();
    const blogCategories = await getArticleCategories();

    const learningCourses = await getCourseSlugs();
    const learningCategories = await getCourseCategories();

    const portfolioTechnologies = await getProjectTechnologies();

    return [
      ...getStaticPaths(),
      ...blogArticles.map((slug) => `/blog/${slug}`),
      ...blogCategories.map((cat) => `/blog/kategorie/${cat}`),
      ...learningCourses.map((slug) => `/learning/${slug}`),
      ...learningCategories.map((cat) => `/learning/kategorie/${cat}`),
      ...portfolioTechnologies.map((cat) => `/portfolio/technologie/${cat}`),
      "/404",
    ];
  },
} satisfies Config;
