import { RouteBuilder, createRoute } from "@libs/shared";

export const routes: RouteBuilder[] = [
  createRoute("").addModule(() => import("./feature/home")),
  createRoute("search").addModule(() => import("./feature/search")),
  createRoute("me").addModule(() => import("./feature/about")),
  createRoute("*").addModule(() => import("./feature/not-found")),
];
