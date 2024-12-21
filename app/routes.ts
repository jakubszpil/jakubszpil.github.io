import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("blog", [
    route("", "routes/article-list.tsx", {
      id: "article-list",
    }),
    route("kategorie/:category", "routes/article-list.tsx", {
      id: "article-list-with-category",
    }),
    route(":slug", "routes/article-details.tsx", {
      id: "article-details",
    }),
  ]),
  ...prefix("learning", [
    route("", "routes/course-list.tsx", {
      id: "course-list",
    }),
    route("kategorie/:category", "routes/course-list.tsx", {
      id: "course-list-with-category",
    }),
    route(":slug", "routes/course-details.tsx", {
      id: "course-details",
    }),
  ]),
  ...prefix("portfolio", [
    route("", "routes/project-list.tsx", {
      id: "project-list",
    }),
  ]),
  route("search", "routes/search.tsx"),
  route("handbook", "routes/handbook.tsx"),
  route("me", "routes/about.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
