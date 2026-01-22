import {
  type RouteConfig,
  layout,
  prefix,
  route,
  index,
} from "@react-router/dev/routes";

import { routes as setupRoutesForCourses } from "@packages/feature-courses/server";
import { routes as setupRoutesForProjects } from "@packages/feature-projects/server";

export default [
  layout("routes/layout.tsx", [
    ...prefix("blog", [
      index("routes/article-list.tsx", { id: "article-list" }),
      route("kategorie/:category", "routes/article-list.tsx", {
        id: "article-list-with-category",
      }),
      route(":slug", "routes/article-detail.tsx", { id: "article-detail" }),
    ]),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects()),
    index("routes/home.tsx", { id: "home" }),
    route("search", "routes/search.tsx", { id: "search" }),
    route("me", "routes/about.tsx", { id: "about" }),
    route("*", "routes/not-found.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
