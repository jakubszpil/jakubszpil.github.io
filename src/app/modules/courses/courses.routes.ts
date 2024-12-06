import type { RouteObject } from "react-router";

import { index, route } from "@/shared/utils/routing";

export const routes: RouteObject[] = [
  index(() => import("./feature/course-list")),
  route("kategorie/:category", () => import("./feature/course-list")),
  route(":slug", () => import("./feature/course-details")),
];
