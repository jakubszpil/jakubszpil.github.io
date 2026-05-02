import { notFound } from "~/shared/utils/navigation";

export async function clientLoader() {
  throw notFound();
}

export default function NotFound() {
  return null;
}
