import type { RouteObject } from "react-router";

import { index, route } from "~/lib/routing";

export const routes: RouteObject[] = [
  index(() => import("./routes/course-list")),
  route("kategorie/:category", () => import("./routes/course-list")),
  route(":slug", () => import("./routes/course-details")),
];
