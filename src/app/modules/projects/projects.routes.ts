import type { RouteObject } from "react-router";

import { index } from "@/shared/utils/routing";

export const routes: RouteObject[] = [
  index(() => import("./feature/project-list")),
];
