import NotFound from "~/components/not-found";

export async function loader() {
  return null;
}

export default function NotFoundPage() {
  return (
    <header className="container prose">
      <NotFound />
    </header>
  );
}
