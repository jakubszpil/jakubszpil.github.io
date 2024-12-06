import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { Button } from "@/shared/ui/button";
import { LinkWithPrefetch } from "@/shared/ui/link-with-prefetch";

export default function SearchButton() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const ac = new AbortController();

    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "j") {
        e.preventDefault();
        if (location.pathname !== "/search") {
          navigate("/search");
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
      title="Szukaj (CTRL+J)"
    >
      <LinkWithPrefetch to="/search">
        <span className="sr-only">Szukaj</span>
        <IconSearch className="h-6" />
      </LinkWithPrefetch>
    </Button>
  );
}
