import {
  type RouteConfig,
  prefix,
  route,
  index,
} from "@react-router/dev/routes";

import { routes as setupRoutesForArticles } from "@packages/feature-articles/server";
import { routes as setupRoutesForCourses } from "@packages/feature-courses/server";
import { routes as setupRoutesForProjects } from "@packages/feature-projects/server";

export default [
  route("", "feature/layout.tsx", [
    ...prefix("blog", setupRoutesForArticles()),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects()),
    index("feature/home.tsx"),
    route("search", "feature/search.tsx"),
    route("handbook", "feature/handbook.tsx"),
    route("me", "feature/about.tsx"),
    route("*", "feature/not-found.tsx"),
  ]),
] satisfies RouteConfig;
