import { defineRoutes } from "@packages/shared/server";

export default defineRoutes(__dirname, ({ index, route }) => [
  index("feature/project-list.tsx"),
  route("technologie/:technology", "feature/project-list.tsx", {
    id: "project-list-with-technology",
  }),
]);
