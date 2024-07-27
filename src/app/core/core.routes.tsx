import { createRoute, type RouteBuilder } from "@/shared/utils/routing";

export const routes: RouteBuilder[] = [
  createRoute("")
    .addModule(() => import("./feature/home"))
    .setIndex(true),
  createRoute("search").addModule(() => import("./feature/search")),
  createRoute("me").addModule(() => import("./feature/about")),
  createRoute("*").addModule(() => import("./feature/not-found")),
];
