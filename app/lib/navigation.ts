export function notFound(message?: string) {
  return new Response(null, {
    status: 404,
    statusText: message,
  });
}
