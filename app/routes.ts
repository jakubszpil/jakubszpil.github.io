import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  route("", "routes/layout.tsx", [
    index("routes/home.tsx"),
    ...prefix("blog", [
      index("routes/article-list.tsx", {
        id: "article-list",
      }),
      route("kategorie/:category", "routes/article-list.tsx", {
        id: "article-list-with-category",
      }),
      route(":slug", "routes/article-detail.tsx", {
        id: "article-detail",
      }),
    ]),
    ...prefix("learning", [
      index("routes/course-list.tsx", {
        id: "course-list",
      }),
      route("kategorie/:category", "routes/course-list.tsx", {
        id: "course-list-with-category",
      }),
      route(":slug", "routes/course-detail.tsx", {
        id: "course-detail",
      }),
    ]),
    ...prefix("portfolio", [
      index("routes/project-list.tsx", {
        id: "project-list",
      }),
      route("technologie/:technology", "routes/project-list.tsx", {
        id: "project-list-with-technology",
      }),
    ]),
    route("search", "routes/search.tsx"),
    route("handbook", "routes/handbook.tsx"),
    route("me", "routes/about.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
