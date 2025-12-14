import { defineRoutes } from "@packages/shared/server";

export const routes = defineRoutes(import.meta.url, ({ index, route }) => [
  index("feature/course-list.tsx", { id: "course-list" }),
  route("kategorie/:category", "feature/course-list.tsx", {
    id: "course-list-with-category",
  }),
  route(":slug", "feature/course-detail.tsx", { id: "course-detail" }),
]);
