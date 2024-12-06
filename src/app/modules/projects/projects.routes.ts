import type { RouteObject } from "react-router";

import { index } from "~/lib/routing";

export const routes: RouteObject[] = [
  index(() => import("./routes/project-list")),
];
