import type { Config } from "@react-router/dev/config";
import { join } from "node:path";
import { readdir, rename } from "node:fs/promises";

import { getArticlesCategories, getArticlesSlugs } from "./app/lib/articles";
import { getCoursesCategories, getCoursesSlugs } from "./app/lib/courses";
import { getProjectsTechnologies } from "./app/lib/projects";

export default {
  ssr: false,
  buildDirectory: "dist",
  future: {
    unstable_viteEnvironmentApi: true,
    unstable_optimizeDeps: true,
    unstable_splitRouteModules: true,
    unstable_subResourceIntegrity: true,
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
    }
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
