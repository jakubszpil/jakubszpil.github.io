import { defineRoutes } from "../../shared/utils/routing";

export default defineRoutes(({ index, route }) => [
  index("feature/article-list.tsx"),
  route("kategorie/:category", "feature/article-list.tsx", {
    id: "article-list-with-category",
  }),
  route(":slug", "feature/article-detail.tsx"),
]);
