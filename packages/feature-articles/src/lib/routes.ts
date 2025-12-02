import { defineRoutes } from "@packages/shared/server";

export const routes = defineRoutes(import.meta.url, ({ index, route }) => [
  index("feature/article-list.tsx"),
  route("kategorie/:category", "feature/article-list.tsx", {
    id: "article-list-with-category",
  }),
  route(":slug", "feature/article-detail.tsx"),
]);
