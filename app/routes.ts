import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  route("", "routes/client/layout.tsx", [
    index("routes/client/home.tsx"),
    ...prefix("blog", [
      index("routes/client/article-list.tsx", {
        id: "article-list",
      }),
      route("kategorie/:category", "routes/client/article-list.tsx", {
        id: "article-list-with-category",
      }),
      route(":slug", "routes/client/article-details.tsx", {
        id: "article-details",
      }),
    ]),
    ...prefix("learning", [
      index("routes/client/course-list.tsx", {
        id: "course-list",
      }),
      route("kategorie/:category", "routes/client/course-list.tsx", {
        id: "course-list-with-category",
      }),
      route(":slug", "routes/client/course-details.tsx", {
        id: "course-details",
      }),
    ]),
    ...prefix("portfolio", [
      index("routes/client/project-list.tsx", {
        id: "project-list",
      }),
      route("technologie/:technology", "routes/client/project-list.tsx", {
        id: "project-list-with-technology",
      }),
    ]),
    route("search", "routes/client/search.tsx"),
    route("handbook", "routes/client/handbook.tsx"),
    route("me", "routes/client/about.tsx"),
    route("*", "routes/client/not-found.tsx"),
  ]),
] satisfies RouteConfig;
