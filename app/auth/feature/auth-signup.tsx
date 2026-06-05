import type { ClientActionFunctionArgs } from "react-router";
import { Button } from "../../shared/ui/button";
import { requireEmptyAuthSession, signUp } from "../data-access/auth";
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

  return await signUp(email, password);
}

export default function AuthSignUp() {
  return (
    <AuthForm>
      <div className="grid grid-flow-row gap-2 pt-2">
        <div className="prose text-xs">
          <p>Twoje hasło musi mieć</p>
          <ul>
            <li>9 lub więcej znaków</li>
            <li>Wielką literę</li>
            <li>Małą literę</li>
            <li>Co najmniej jedną cyfrę</li>
          </ul>
        </div>

        <Button className="cursor-pointer" type="submit">
          Załóż konto
        </Button>
      </div>
    </AuthForm>
  );
}
