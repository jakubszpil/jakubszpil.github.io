import type { Config } from "@react-router/dev/config";
import { join } from "node:path";
import { readdir, rename, rm } from "node:fs/promises";

import {
  getArticlesSlugs,
  getArticlesCategories,
} from "./app/blog/data-access/articles";
import {
  getCoursesSlugs,
  getCoursesCategories,
} from "./app/learning/data-access/courses";
import { getProjectsTechnologies } from "./app/portfolio/data-access/projects";

export default {
  ssr: false,
  buildDirectory: "dist",
  routeDiscovery: { mode: "initial" },
  future: {
    v8_viteEnvironmentApi: true,
    v8_splitRouteModules: true,
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

    await rm(join(__clientDirname, "search.json.data"));

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
