import { createPagesFunctionHandler } from "@react-router/cloudflare";

import { getLoadContext } from "../app/context";

export const onRequest = createPagesFunctionHandler({
  // @ts-expect-error
  build: () => import("../build/server/index.js"),
  getLoadContext,
});
