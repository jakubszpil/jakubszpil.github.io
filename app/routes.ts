import {
  type RouteConfig,
  layout,
  route,
  index,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    route("blog", "routes/article-list.tsx"),
    route("blog/kategorie/:category", "routes/article-list.tsx", {
      id: "article-list-with-category",
    }),
    route("blog/:slug", "routes/article-detail.tsx"),
    route("learning", "routes/course-list.tsx"),
    route("learning/kategorie/:category", "routes/course-list.tsx", {
      id: "course-list-with-category",
    }),
    route("learning/:slug", "routes/course-detail.tsx"),
    route("portfolio", "routes/project-list.tsx"),
    route("portfolio/technologie/:technology", "routes/project-list.tsx", {
      id: "project-list-with-technology",
    }),
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("me", "routes/about.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
