import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
