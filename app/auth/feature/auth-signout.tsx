import { Navigate } from "react-router";
import { requireAuthSession, signOut } from "../data-access/auth";

export async function clientAction() {
  await requireAuthSession();

  return await signOut();
}

export default function AuthSignOut() {
  return <Navigate replace to="/auth" />;
}
