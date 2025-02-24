import type { Config } from "@react-router/dev/config";

import {
  getArticlesCategories,
  getArticlesSlugs,
  getArticlesSlugsByCategory,
} from "./app/lib/articles";
import {
  getCoursesCategories,
  getCoursesSlugs,
  getCoursesSlugsByCategory,
} from "./app/lib/courses";

async function getModulePaths(
  moduleName: string,
  getCategories: () => Promise<string[]>,
  getSlugs: () => Promise<string[]>,
  getSlugsByCategory: (category: string) => Promise<string[]>
) {
  const slugs = await getSlugs();
  const categories = await getCategories();

  const slugsByCategory: string[] = [];

  for (const category of categories) {
    const slugsByCurrentCategory = await getSlugsByCategory(category);
    slugsByCategory.push(
      ...slugsByCurrentCategory.map(
        (slug) => `/${moduleName}/kategorie/${category}/${slug}`
      )
    );
  }

  return [
    ...slugs.map((s) => `/${moduleName}/${s}`),
    ...categories.map((s) => `/${moduleName}/kategorie/${s}`),
    ...slugsByCategory,
  ];
}

export default {
  ssr: true,
  buildDirectory: "dist",
  async prerender({ getStaticPaths }) {
    return [
      ...getStaticPaths(),
      ...(await getModulePaths(
        "blog",
        getArticlesCategories,
        getArticlesSlugs,
        getArticlesSlugsByCategory
      )),
      ...(await getModulePaths(
        "learning",
        getCoursesCategories,
        getCoursesSlugs,
        getCoursesSlugsByCategory
      )),
      "/404",
    ];
  },
} satisfies Config;
