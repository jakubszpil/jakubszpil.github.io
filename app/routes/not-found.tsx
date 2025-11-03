export async function clientLoader() {
  throw new Response(null, {
    status: 404,
  });
}

export default function NotFound() {
  return null;
}
