import { RouteBuilder, createRoute } from "@libs/shared";
import { routes as articlesRoutes } from "@libs/articles";
import { routes as coursesRoutes } from "@libs/courses";
import { routes as projectsRoutes } from "@libs/projects";

import { routes as coreRoutes } from "./core/core.routes";

export const routes: RouteBuilder[] = [
  createRoute("").addChildren(
    createRoute("blog").addChildren(...articlesRoutes),
    createRoute("learning").addChildren(...coursesRoutes),
    createRoute("portfolio").addChildren(...projectsRoutes),
    createRoute("").addChildren(...coreRoutes)
  ),
];
