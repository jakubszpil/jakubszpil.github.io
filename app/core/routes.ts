import { defineRoutes } from "@packages/shared/server";

export default defineRoutes(import.meta.url, ({ index, route, children }) => [
  route("", "feature/layout.tsx", [
    ...children(),
    index("feature/home.tsx"),
    route("search", "feature/search.tsx"),
    route("handbook", "feature/handbook.tsx"),
    route("me", "feature/about.tsx"),
    route("*", "feature/not-found.tsx"),
  ]),
]);
