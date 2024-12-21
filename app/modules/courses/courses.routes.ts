import type { RouteObject } from "react-router";

import { route } from "~/lib/routing";

export const routes = [
  route("", () => import("./routes/course-list")),
  route("kategorie/:category", () => import("./routes/course-list")),
  route(":slug", () => import("./routes/course-details")),
] as const satisfies RouteObject[];
