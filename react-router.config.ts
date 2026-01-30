import type { Config } from "@react-router/dev/config";
import { join } from "node:path";
import { readdir, readFile, rename, writeFile } from "node:fs/promises";
import { minify } from "uglify-js";

import { getArticlesSlugs, getArticlesCategories } from "./app/lib/articles";
import { getCoursesSlugs, getCoursesCategories } from "./app/lib/courses";
import { getProjectsTechnologies } from "./app/lib/projects";

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

    process.exit(0);
  },
  async prerender({ getStaticPaths }) {
    const blogArticles = await getArticlesSlugs();
    const blogCategories = await getArticlesCategories();

    const learningCourses = await getCoursesSlugs();
    const learningCategories = await getCoursesCategories();

    const portfolioTechnologies = await getProjectsTechnologies();

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
