import { createRoute, type RouteBuilder } from "@/shared/utils/routing";

export const routes: RouteBuilder[] = [
  createRoute("")
    .addModule(() => import("./feature/course-list"))
    .setIndex(true),
  createRoute("kategorie/:category").addModule(
    () => import("./feature/course-list")
  ),
  createRoute(":slug").addModule(() => import("./feature/course-details")),
];
