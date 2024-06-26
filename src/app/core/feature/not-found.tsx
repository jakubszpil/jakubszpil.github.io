import { defineLoader, notFound } from "@libs/shared";

export const loader = defineLoader(() => {
  throw notFound();
});

export default function NotFound() {
  return <div>NotFound</div>;
}
