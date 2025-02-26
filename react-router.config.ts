import type { Config } from "@react-router/dev/config";

import { getArticlesCategories, getArticlesSlugs } from "./app/lib/articles";
import { getCoursesCategories, getCoursesSlugs } from "./app/lib/courses";

export default {
  ssr: true,
  buildDirectory: "dist",
  async prerender({ getStaticPaths }) {
    const blogArticles = await getArticlesSlugs();
    const blogCategories = await getArticlesCategories();

    const learningCourses = await getCoursesSlugs();
    const learningCategories = await getCoursesCategories();

    return [
      ...getStaticPaths(),
      ...blogArticles.map((slug) => `/blog/${slug}`),
      ...blogCategories.map((cat) => `/blog/kategorie/${cat}`),
      ...learningCourses.map((slug) => `/learning/${slug}`),
      ...learningCategories.map((cat) => `/learning/kategorie/${cat}`),
      "/404",
    ];
  },
} satisfies Config;
