import {
  getAppDirectory,
  relative,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { join, relative as relativePathResolver } from "node:path";

type Helpers = ReturnType<typeof relative> & {
  children: () => RouteConfigEntry[];
};

export function defineRoutes(
  dirname: string,
  setup: (helpers: Helpers) => RouteConfigEntry[]
) {
  return (...children: RouteConfigEntry[]) => {
    const path = join(
      getAppDirectory(),
      relativePathResolver(getAppDirectory(), dirname)
    );

    const helpers = relative(path);

    return setup({ ...helpers, children: () => children });
  };
}
