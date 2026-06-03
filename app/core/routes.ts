import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(
  import.meta.url,
  ({ index, route, layout, children }) => [
    layout(
      "feature/layout.tsx",
      {
        id: "layout",
      },
      [
        ...children(),
        index("feature/home.tsx", { id: "home" }),
        route("search.json", "feature/search.tsx", { id: "search" }),
        route("me", "feature/about.tsx", { id: "me" }),
        route("*", "feature/not-found.tsx", { id: "not-found" }),
      ],
    ),
  ],
);
