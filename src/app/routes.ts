import type { RouteObject } from "react-router";

import { index, prefix, route } from "./lib/routing";
import { routes as articlesRoutes } from "./modules/articles/articles.routes";
import { routes as coursesRoutes } from "./modules/courses/courses.routes";
import { routes as projectsRoutes } from "./modules/projects/projects.routes";

export const routes: RouteObject[] = [
  index(() => import("./routes/home")),
  prefix("blog", articlesRoutes),
  prefix("learning", coursesRoutes),
  prefix("portfolio", projectsRoutes),
  route("search", () => import("./routes/search")),
  route("handbook", () => import("./routes/handbook")),
  route("me", () => import("./routes/about")),
  route("*", () => import("./routes/not-found")),
];
