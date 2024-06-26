import { RouteBuilder, createRoute } from "@libs/shared";

export const routes: RouteBuilder[] = [
  createRoute("").addModule(() => import("./feature/article-list")),
  createRoute(":slug").addModule(() => import("./feature/article-details")),
  createRoute("kategorie/:category").addModule(
    () => import("./feature/article-category")
  ),
];
