import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(import.meta.url, ({ layout, index }) => [
  layout("feature/student-layout.tsx", { id: "student-layout" }, [
    index("feature/student-dashboard.tsx", { id: "student-dashboard" }),
  ]),
]);
