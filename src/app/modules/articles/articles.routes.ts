import type { RouteObject } from "react-router";

import { index, route } from "~/lib/routing";

export const routes: RouteObject[] = [
  index(() => import("./routes/article-list")),
  route("kategorie/:category", () => import("./routes/article-list")),
  route(":slug", () => import("./routes/article-details")),
];
