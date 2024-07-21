import { type RouteBuilder, createRoute } from "@libs/shared";

export const routes: RouteBuilder[] = [
  createRoute("")
    .addModule(() => import("./feature/project-list"))
    .setIndex(true),
];
