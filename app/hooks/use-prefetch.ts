import { useEffect } from "react";

export function usePrefetch(resource?: string) {
  useEffect(() => {
    if (!resource) return;
    const link = document.createElement("link");
    link.setAttribute("rel", "prefetch");
    link.setAttribute("as", "fetch");
    link.setAttribute("href", resource);
    document.head.appendChild(link);
  }, [resource]);
}
