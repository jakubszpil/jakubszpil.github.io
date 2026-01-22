import { notFound } from "../lib/navigation";

export async function clientLoader() {
  throw notFound();
}

export default function NotFound() {
  return null;
}
