import { RouteBuilder, createRoute } from "@libs/shared";

export const routes: RouteBuilder[] = [
  createRoute("").addModule(() => import("./feature/course-list")),
  createRoute("kategorie/:category").addModule(
    () => import("./feature/course-category")
  ),
  createRoute(":slug").addModule(() => import("./feature/course-details")),
];
