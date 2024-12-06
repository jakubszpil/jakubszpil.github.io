import type { RouteObject } from "react-router";

import { index, route } from "@/shared/utils/routing";

export const routes: RouteObject[] = [
  index(() => import("./feature/home")),
  route("search", () => import("./feature/search")),
  route("me", () => import("./feature/about")),
  route("*", () => import("./feature/not-found")),
];
