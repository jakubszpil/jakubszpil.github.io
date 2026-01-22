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
  layout("routes/layout.tsx", [
    ...prefix("blog", setupRoutesForArticles()),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects()),
    index("routes/home.tsx", { id: "home" }),
    route("search", "routes/search.tsx", { id: "search" }),
    route("me", "routes/about.tsx", { id: "about" }),
    route("*", "routes/not-found.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
