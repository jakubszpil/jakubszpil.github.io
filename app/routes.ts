import { type RouteConfig, prefix } from "@react-router/dev/routes";

import defineCoreRoutes from "./core/routes";
import defineAuthRoutes from "./auth/routes";
import defineStudentRoutes from "./student/routes";
import defineAdminRoutes from "./admin/routes";
import defineBlogRoutes from "./blog/routes";
import defineLearningRoutes from "./learning/routes";
import definePortfolioRoutes from "./portfolio/routes";

export default [
  ...prefix("auth", defineAuthRoutes()),
  ...prefix("admin", defineAdminRoutes()),
  ...prefix("student", defineStudentRoutes()),

  ...defineCoreRoutes(
    ...prefix("blog", defineBlogRoutes()),
    ...prefix("learning", defineLearningRoutes()),
    ...prefix("portfolio", definePortfolioRoutes()),
  ),
] satisfies RouteConfig;
