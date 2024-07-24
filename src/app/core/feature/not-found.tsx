export async function loader() {
  throw new Response(null, {
    status: 404,
    statusText: "Nie znaleziono strony",
  });
}

export default function NotFound() {
  return (
    <div>
      <h1>Nie znaleziono strony</h1>
    </div>
  );
}
