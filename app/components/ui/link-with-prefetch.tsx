import { Link, type LinkProps } from "react-router";

export interface LinkWithPrefetchProps extends LinkProps {}

export function LinkWithPrefetch(props: LinkWithPrefetchProps) {
  return <Link {...props} reloadDocument prefetch="viewport" />;
}
