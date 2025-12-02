import { type RouteConfig, prefix } from "@react-router/dev/routes";

import setupRoutesForArticles from "./modules/articles/routes";
import setupRoutesForCourses from "./modules/courses/routes";
import setupRoutesForProjects from "./modules/projects/routes";
import setupRoutesForCore from "./core/routes";

export default [
  ...setupRoutesForCore(
    ...prefix("blog", setupRoutesForArticles()),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects())
  ),
] satisfies RouteConfig;
