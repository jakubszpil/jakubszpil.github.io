import type { Config } from "@react-router/dev/config";

import { getArticlesCategories, getArticlesSlugs } from "./app/lib/articles";
import { getCoursesCategories, getCoursesSlugs } from "./app/lib/courses";

export default {
  ssr: true,
  buildDirectory: "dist",
  future: {
    unstable_optimizeDeps: true,
  },
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
} satisfies Config;
