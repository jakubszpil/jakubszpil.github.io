import { createRoute, type RouteBuilder } from "@/shared/utils/routing";

export const routes: RouteBuilder[] = [
  createRoute("")
    .addModule(() => import("./feature/article-list"))
    .setIndex(true),
  createRoute("kategorie/:category").addModule(
    () => import("./feature/article-list")
  ),
  createRoute(":slug").addModule(() => import("./feature/article-details")),
];
