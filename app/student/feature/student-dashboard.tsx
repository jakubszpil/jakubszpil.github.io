import { requireAuthSession } from "../../auth/data-access/auth";

export async function clientLoader() {
  await requireAuthSession();

  return null;
}

export default function StudentDashboard() {
  return (
    <div>
      <h2>StudentDashboard</h2>
    </div>
  );
}
