import type { RouteObject } from "react-router";

import { index, route } from "@/shared/utils/routing";

export const routes: RouteObject[] = [
  index(() => import("./feature/article-list")),
  route("kategorie/:category", () => import("./feature/article-list")),
  route(":slug", () => import("./feature/article-details")),
];
