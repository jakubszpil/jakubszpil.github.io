import type { ClientActionFunctionArgs } from "react-router";
import { Button } from "../../shared/ui/button";
import { LinkWithPrefetch } from "../../shared/ui/link-with-prefetch";
import { requireEmptyAuthSession, signIn } from "../data-access/auth";
import { AuthForm } from "../ui/auth-form";

export async function clientLoader() {
  await requireEmptyAuthSession();

  return;
}

export async function clientAction({ request }: ClientActionFunctionArgs) {
  await requireEmptyAuthSession();

  const values = await request.formData();

  const email = String(values.get("email"));
  const password = String(values.get("password"));

  return await signIn(email, password);
}

export default function AuthSignIn() {
  return (
    <AuthForm>
      <div className="grid grid-flow-row gap-2 pt-2">
        <Button variant="link" asChild className="w-max px-0">
          <LinkWithPrefetch to="/auth/forgot-password">
            Nie pamiętasz hasła?
          </LinkWithPrefetch>
        </Button>
        <Button className="cursor-pointer" type="submit">
          Zaloguj się
        </Button>
      </div>
    </AuthForm>
  );
}
