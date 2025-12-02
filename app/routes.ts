import { type RouteConfig, prefix } from "@react-router/dev/routes";

import { routes as setupRoutesForArticles } from "@packages/feature-articles/server";
import { routes as setupRoutesForCourses } from "@packages/feature-courses/server";
import { routes as setupRoutesForProjects } from "@packages/feature-projects/server";

import setupRoutesForCore from "./core/routes";

export default [
  ...setupRoutesForCore(
    ...prefix("blog", setupRoutesForArticles()),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects())
  ),
] satisfies RouteConfig;
