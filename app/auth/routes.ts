import { defineRoutes } from "../shared/utils/routing";

export default defineRoutes(import.meta.url, ({ index, route }) => [
  index("feature/auth-signin.tsx", { id: "auth-signin" }),
  route("signup", "feature/auth-signup.tsx", { id: "auth-signup" }),
  route("signout", "feature/auth-signout.tsx", { id: "auth-signout" }),
  route("forgot-password", "feature/auth-forgot-password.tsx", {
    id: "auth-forgot-password",
  }),
  route("confirm", "feature/auth-confirm.tsx", { id: "auth-confirm" }),
]);
