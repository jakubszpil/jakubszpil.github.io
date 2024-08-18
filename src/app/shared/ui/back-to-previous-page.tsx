import { type Location, useLocation, useNavigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";

import { Button } from "./button";
import {
  LinkWithPrefetch,
  type LinkWithPrefetchLocationState,
} from "./link-with-prefetch";

export function BackToPreviousPage() {
  const location = useLocation() as Location<
    LinkWithPrefetchLocationState | undefined
  >;
  const navigate = useNavigate();

  const state = location.state;

  if (!state) return null;

  return (
    <Button
      asChild
      variant="link"
      size="sm"
      className="-ml-3 mb-3 inline-flex gap-2 no-underline hover:underline"
    >
      <LinkWithPrefetch
        to={state.pathname}
        onClick={(event) => {
          event.preventDefault();
          navigate(-1);
        }}
      >
        <IconArrowLeft className="h-5" /> {state.label}
      </LinkWithPrefetch>
    </Button>
  );
}
