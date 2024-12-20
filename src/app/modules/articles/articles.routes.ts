import type { RouteObject } from "react-router";

import { route } from "~/lib/routing";

export const routes = [
  route("", () => import("./routes/article-list")),
  route("kategorie/:category", () => import("./routes/article-list")),
  route(":slug", () => import("./routes/article-details")),
] as const satisfies RouteObject[];
