import { useEffect, useState } from "react";
import { Link, type LinkProps } from "react-router";

export interface LinkWithPrefetchProps extends LinkProps {}

export function useLinkWithPrefetch(props: LinkWithPrefetchProps) {
  const [prefetch, setPrefetch] = useState(props.prefetch ?? "intent");

  useEffect(() => {
    const regex = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i;
    const isMobile = !!navigator.userAgent.match(regex);

    if (!props.prefetch) setPrefetch(isMobile ? "viewport" : "intent");
  }, [props.prefetch]);

  return prefetch;
}

export function LinkWithPrefetch(props: LinkWithPrefetchProps) {
  const prefetch = useLinkWithPrefetch(props);

  return <Link {...props} prefetch={prefetch} />;
}
