import { Outlet } from "react-router";

import { ClientOnly } from "~/shared/components/ui/client-only";

export default function AuthLayout() {
  return (
    <ClientOnly>
      <main>
        <Outlet />
      </main>
    </ClientOnly>
  );
}
