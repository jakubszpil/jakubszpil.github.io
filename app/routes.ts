import {
  type RouteConfig,
  layout,
  prefix,
  route,
  index,
} from "@react-router/dev/routes";

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
      index("routes/course-list.tsx", { id: "course-list" }),
      route("kategorie/:category", "routes/course-list.tsx", {
        id: "course-list-with-category",
      }),
      route(":slug", "routes/course-detail.tsx", { id: "course-detail" }),
    ]),
    ...prefix("portfolio", [
      index("routes/project-list.tsx", { id: "project-list" }),
      route("technologie/:technology", "routes/project-list.tsx", {
        id: "project-list-with-technology",
      }),
    ]),
    index("routes/home.tsx", { id: "home" }),
    route("search", "routes/search.tsx", { id: "search" }),
    route("me", "routes/about.tsx", { id: "about" }),
    route("*", "routes/not-found.tsx", { id: "not-found" }),
  ]),
] satisfies RouteConfig;
