import { createRoute, type RouteBuilder } from "@/shared/utils/routing";

export const routes: RouteBuilder[] = [
  createRoute("")
    .addModule(() => import("./feature/project-list"))
    .setIndex(true),
];
