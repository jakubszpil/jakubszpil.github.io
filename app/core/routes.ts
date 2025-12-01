import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(({ index, route }) => [
  index("feature/home.tsx"),
  route("search", "feature/search.tsx"),
  route("handbook", "feature/handbook.tsx"),
  route("me", "feature/about.tsx"),
  route("*", "feature/not-found.tsx"),
]);
