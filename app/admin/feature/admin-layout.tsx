import { Outlet } from "react-router";
import { requireAuthSession } from "../../auth/data-access/auth";

export async function clientLoader() {
  await requireAuthSession();
}

export default function AdminLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
