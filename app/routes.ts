import {
  type RouteConfig,
  layout,
  prefix,
  route,
  index,
} from "@react-router/dev/routes";

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
    ...prefix("learning", [
      index("feature/course-list.tsx", { id: "course-list" }),
      route("kategorie/:category", "feature/course-list.tsx", {
        id: "course-list-with-category",
      }),
      route(":slug", "feature/course-detail.tsx", { id: "course-detail" }),
    ]),
    ...prefix("portfolio", setupRoutesForProjects()),
    index("routes/home.tsx", { id: "home" }),
    route("search", "routes/search.tsx", { id: "search" }),
    route("me", "routes/about.tsx", { id: "about" }),
    route("*", "routes/not-found.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
