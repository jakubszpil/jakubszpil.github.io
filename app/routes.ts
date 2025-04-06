import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  route("", "client/routes/layout.tsx", [
    index("client/routes/home.tsx"),
    ...prefix("blog", [
      index("client/routes/article-list.tsx", {
        id: "article-list",
      }),
      route("kategorie/:category", "client/routes/article-list.tsx", {
        id: "article-list-with-category",
      }),
      route(":slug", "client/routes/article-details.tsx", {
        id: "article-details",
      }),
    ]),
    ...prefix("learning", [
      index("client/routes/course-list.tsx", {
        id: "course-list",
      }),
      route("kategorie/:category", "client/routes/course-list.tsx", {
        id: "course-list-with-category",
      }),
      route(":slug", "client/routes/course-details.tsx", {
        id: "course-details",
      }),
    ]),
    ...prefix("portfolio", [
      index("client/routes/project-list.tsx", {
        id: "project-list",
      }),
      route("technologie/:technology", "client/routes/project-list.tsx", {
        id: "project-list-with-technology",
      }),
    ]),
    route("search", "client/routes/search.tsx"),
    route("handbook", "client/routes/handbook.tsx"),
    route("me", "client/routes/about.tsx"),
    route("*", "client/routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
