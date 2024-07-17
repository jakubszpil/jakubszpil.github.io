import {
  type RouteBuilder,
  createRoute,
  UnderConstruction,
} from "@libs/shared";

export const routes: RouteBuilder[] = [
  createRoute("").addModule(async () => ({ default: UnderConstruction })),
];
