import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(import.meta.url, ({ index, route }) => [
  index("feature/project-list.tsx", { id: "project-list" }),
  route("technologie/:technology", "feature/project-list.tsx", {
    id: "project-list-with-technology",
  }),
]);
