import type { RouteObject } from "react-router";

import { prefix } from "./shared/utils/routing";
import { routes as coreRoutes } from "./core/core.routes";
import { routes as articlesRoutes } from "./modules/articles/articles.routes";
import { routes as coursesRoutes } from "./modules/courses/courses.routes";
import { routes as projectsRoutes } from "./modules/projects/projects.routes";

export const routes: RouteObject[] = [
  prefix("blog", articlesRoutes),
  prefix("learning", coursesRoutes),
  prefix("portfolio", projectsRoutes),
  prefix("", coreRoutes),
];
