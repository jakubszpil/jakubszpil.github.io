import type { ClientLoaderFunctionArgs } from "react-router";

import { getArticles } from "../../blog/data-access/articles";
import { getCourses } from "../../learning/data-access/courses";

export async function loader() {
  const articles = await getArticles();
  const courses = await getCourses();

  return {
    articles,
    courses,
  };
}

export async function clientLoader({ serverLoader }: ClientLoaderFunctionArgs) {
  return serverLoader<typeof loader>();
}

clientLoader.hydrate = true;
