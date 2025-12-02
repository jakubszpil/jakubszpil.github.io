import {
  getAppDirectory,
  relative,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { join, relative as relativePathResolver } from "node:path";

export function defineRoutes(
  dirname: string,
  setup: (helpers: ReturnType<typeof relative>) => RouteConfigEntry[]
) {
  return () => {
    const path = join(
      getAppDirectory(),
      relativePathResolver(getAppDirectory(), dirname)
    );
    return setup(relative(path));
  };
}
