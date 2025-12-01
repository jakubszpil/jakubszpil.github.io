import {
  getAppDirectory,
  relative,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { join } from "node:path";

export function defineRoutes(
  setup: (helpers: ReturnType<typeof relative>) => RouteConfigEntry[]
) {
  return (relativeModulePath: string) => {
    const path = join(getAppDirectory(), relativeModulePath);
    return setup(relative(path));
  };
}
