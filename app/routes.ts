import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("blog", [
    index("routes/article-list.tsx", {
      id: "article-list",
    }),
    route("kategorie/:category/:slug", "routes/article-details.tsx", {
      id: "article-details-with-category",
    }),
    route("kategorie/:category", "routes/article-list.tsx", {
      id: "article-list-with-category",
    }),

    route(":slug", "routes/article-details.tsx", {
      id: "article-details",
    }),
  ]),
  ...prefix("learning", [
    index("routes/course-list.tsx", {
      id: "course-list",
    }),
    route("kategorie/:category/:slug", "routes/course-details.tsx", {
      id: "course-details-with-category",
    }),
    route("kategorie/:category", "routes/course-list.tsx", {
      id: "course-list-with-category",
    }),
    route(":slug", "routes/course-details.tsx", {
      id: "course-details",
    }),
  ]),
  ...prefix("portfolio", [
    index("routes/project-list.tsx", {
      id: "project-list",
    }),
  ]),
  route("search", "routes/search.tsx"),
  route("handbook", "routes/handbook.tsx"),
  route("me", "routes/about.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
