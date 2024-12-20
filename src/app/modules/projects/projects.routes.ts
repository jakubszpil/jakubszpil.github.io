import type { RouteObject } from "react-router";

import { route } from "~/lib/routing";

export const routes = [
  route("", () => import("./routes/project-list")),
] as const satisfies RouteObject[];
