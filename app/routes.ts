import {
  type RouteConfig,
  layout,
  route,
  index,
  prefix,
} from "@react-router/dev/routes";

import defineCoreRoutes from "./core/routes";
import defineBlogRoutes from "./blog/routes";
import defineLearningRoutes from "./learning/routes";
import definePortfolioRoutes from "./portfolio/routes";

export default [
  layout("routes/layout.tsx", [
    ...defineCoreRoutes(
      ...prefix("blog", defineBlogRoutes()),
      ...prefix("learning", defineLearningRoutes()),
      ...prefix("portfolio", definePortfolioRoutes()),
    ),

    route("portfolio", "routes/project-list.tsx"),
    route("portfolio/technologie/:technology", "routes/project-list.tsx", {
      id: "project-list-with-technology",
    }),
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("me", "routes/about.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
