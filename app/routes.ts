import { type RouteConfig, prefix, route } from "@react-router/dev/routes";

import articleRoutes from "./modules/articles/routes";
import courseRoutes from "./modules/courses/routes";
import projectRoutes from "./modules/projects/routes";
import coreRoutes from "./core/routes";

export default [
  route("", "core/feature/layout.tsx", [
    ...prefix("blog", articleRoutes("modules/articles")),
    ...prefix("learning", courseRoutes("modules/courses")),
    ...prefix("portfolio", projectRoutes("modules/projects")),
    ...prefix("", coreRoutes("core")),
  ]),
] satisfies RouteConfig;
