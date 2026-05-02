import { type RouteConfig, prefix } from "@react-router/dev/routes";

import defineCoreRoutes from "./core/routes";
import defineBlogRoutes from "./blog/routes";
import defineLearningRoutes from "./learning/routes";
import definePortfolioRoutes from "./portfolio/routes";

export default [
  ...defineCoreRoutes(
    ...prefix("blog", defineBlogRoutes()),
    ...prefix("learning", defineLearningRoutes()),
    ...prefix("portfolio", definePortfolioRoutes()),
  ),
] satisfies RouteConfig;
