import { notFound } from "@packages/shared";

export async function clientLoader() {
  throw notFound();
}

export default function NotFound() {
  return null;
}
