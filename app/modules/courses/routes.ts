import { defineRoutes } from "@packages/shared/server";

export default defineRoutes(import.meta.url, ({ index, route }) => [
  index("feature/course-list.tsx"),
  route("kategorie/:category", "feature/course-list.tsx", {
    id: "course-list-with-category",
  }),
  route(":slug", "feature/course-detail.tsx"),
]);
