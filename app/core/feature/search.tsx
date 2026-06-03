import type { ClientLoaderFunctionArgs } from "react-router";

import { getArticles } from "../../blog/data-access/articles";
import { getCourses } from "../../learning/data-access/courses";
import type { SearchEntry } from "../data-access/search";

export async function loader() {
  const articles = await getArticles();
  const courses = await getCourses();

  return {
    articles: articles.map(
      (article): SearchEntry => ({
        href: `/blog/${article.slug}`,
        title: article.title,
      }),
    ),
    courses: courses.map(
      (course): SearchEntry => ({
        href: `/learning/${course.slug}`,
        title: course.title,
      }),
    ),
  };
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  return serverLoader<typeof loader>();
}

clientLoader.hydrate = true;
