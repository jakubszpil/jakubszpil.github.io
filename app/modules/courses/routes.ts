import { defineRoutes } from "../../shared/utils/routing";

export default defineRoutes(({ index, route }) => [
  index("feature/course-list.tsx"),
  route("kategorie/:category", "feature/course-list.tsx", {
    id: "course-list-with-category",
  }),
  route(":slug", "feature/course-detail.tsx"),
]);
