import { routes as coreRoutes } from "./core/core.routes";
import { routes as articlesRoutes } from "./modules/articles/articles.routes";
import { routes as coursesRoutes } from "./modules/courses/courses.routes";
import { routes as projectsRoutes } from "./modules/projects/projects.routes";
import { createRoute, RouteBuilder } from "./shared/utils/routing";

export const appRoutes: RouteBuilder[] = [
  createRoute("").addChildren(
    createRoute("blog").addChildren(...articlesRoutes),
    createRoute("learning").addChildren(...coursesRoutes),
    createRoute("portfolio").addChildren(...projectsRoutes),
    createRoute("").addChildren(...coreRoutes)
  ),
];
