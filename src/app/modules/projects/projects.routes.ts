import type { RouteObject } from "react-router";

import { index } from "~/lib/routing";

export const routes = [
  index(() => import("./routes/project-list")),
] as const satisfies RouteObject[];
