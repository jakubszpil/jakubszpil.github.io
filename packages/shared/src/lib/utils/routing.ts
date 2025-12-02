import {
  getAppDirectory,
  relative,
  type RouteConfigEntry,
} from "@react-router/dev/routes";
import { dirname, join, relative as relativePathResolver } from "node:path";
import { fileURLToPath } from "node:url";

type Helpers = ReturnType<typeof relative> & {
  children: () => RouteConfigEntry[];
};

export function defineRoutes(
  importUrl: string,
  setup: (helpers: Helpers) => RouteConfigEntry[]
) {
  const __filename = fileURLToPath(importUrl);
  const __dirname = dirname(__filename);

  return (...children: RouteConfigEntry[]) => {
    const path = join(
      getAppDirectory(),
      relativePathResolver(getAppDirectory(), __dirname)
    );

    const helpers = relative(path);

    return setup({ ...helpers, children: () => children });
  };
}
