import { Link, type LinkProps } from "react-router";

import { useIsMobile } from "../data-access/use-mobile";

export interface LinkWithPrefetchProps extends LinkProps {}

export function LinkWithPrefetch(props: LinkWithPrefetchProps) {
  const isMobile = useIsMobile();

  const prefetch = props.prefetch ?? (isMobile ? "viewport" : "intent");

  return <Link {...props} prefetch={prefetch} />;
}
