import { RouteBuilder, createRoute } from "@/shared/utils/routing";

export const routes: RouteBuilder[] = [
  createRoute("").addModule(() => import("./feature/home")),
  createRoute("szukaj").addModule(() => import("./feature/search")),
  createRoute("me").addModule(() => import("./feature/about")),
  createRoute("*").addModule(() => import("./feature/not-found")),
];
