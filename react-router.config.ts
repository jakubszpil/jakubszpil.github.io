import type { Config } from "@react-router/dev/config";

import {
  getArticlesCategories,
  getArticlesSlugs,
} from "./app/client/lib/articles";
import {
  getCoursesCategories,
  getCoursesSlugs,
} from "./app/client/lib/courses";
import { getProjectsTechnologies } from "./app/client/lib/projects";

export default {
  ssr: false,
  buildDirectory: "dist",
  future: {
    unstable_viteEnvironmentApi: true,
    unstable_optimizeDeps: true,
    unstable_splitRouteModules: true,
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
