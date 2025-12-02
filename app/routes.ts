import { type RouteConfig, prefix, route } from "@react-router/dev/routes";

import setupRoutesForArticles from "./modules/articles/routes";
import setupRoutesForCourses from "./modules/courses/routes";
import setupRoutesForProjects from "./modules/projects/routes";
import setupRoutesForCore from "./core/routes";

export default [
  route("", "core/feature/layout.tsx", [
    ...prefix("blog", setupRoutesForArticles()),
    ...prefix("learning", setupRoutesForCourses()),
    ...prefix("portfolio", setupRoutesForProjects()),
    ...prefix("", setupRoutesForCore()),
  ]),
] satisfies RouteConfig;
