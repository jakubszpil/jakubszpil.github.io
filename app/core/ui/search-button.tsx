import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { usePrefetchLink } from "../../hooks/use-prefetch-link";
import { Button } from "../../shared/ui/button";
import { LinkWithPrefetch } from "../../shared/ui/link-with-prefetch";
import { IconSearch } from "../../shared/ui/icons";

const state = { focus: true };

export default function SearchButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const prefetchLink = usePrefetchLink("/search.data");

  useEffect(() => {
    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (location.pathname !== "/search") {
          navigate("/search", { state });
        }
      }
    };

    document.addEventListener("keydown", down, { signal: ac.signal });

    return () => ac.abort();
  }, [navigate, location]);

  return (
    <Button
      size="icon"
      variant="ghost"
      asChild
      className="inline-flex items-center justify-center"
      aria-label="Szukaj"
      title="Szukaj (CTRL+K)"
    >
      <LinkWithPrefetch to="/search" state={state}>
        {prefetchLink}
        <span className="sr-only">Szukaj</span>
        <IconSearch className="size-6" />
      </LinkWithPrefetch>
    </Button>
  );
}
