import {
  type RouteConfig,
  layout,
  prefix,
  route,
  index,
} from "@react-router/dev/routes";

import { routes as setupRoutesForArticles } from "@packages/feature-articles/server";
import { routes as setupRoutesForCourses } from "@packages/feature-courses/server";
import { routes as setupRoutesForProjects } from "@packages/feature-projects/server";

export default [
  layout("feature/layout.tsx", [
    ...prefix("blog", setupRoutesForArticles()),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects()),
    index("feature/home.tsx", { id: "home" }),
    route("search", "feature/search.tsx", { id: "search" }),
    route("handbook", "feature/handbook.tsx", { id: "handbook" }),
    route("me", "feature/about.tsx", { id: "about" }),
    route("*", "feature/not-found.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
