import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(
  import.meta.url,
  ({ index, route, layout, children }) => [
    layout("feature/layout.tsx", [
      ...children(),
      index("feature/home.tsx"),
      route("search", "feature/search.tsx"),
      route("me", "feature/about.tsx"),
      route("*", "feature/not-found.tsx"),
    ]),
  ],
);
