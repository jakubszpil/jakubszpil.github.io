import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(import.meta.url, ({ layout, index }) => [
  layout("feature/admin-layout.tsx", { id: "admin-layout" }, [
    index("feature/admin-dashboard.tsx", { id: "admin-dashboard" }),
  ]),
]);
