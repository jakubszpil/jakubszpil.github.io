import {
  useForesight,
  type ForesightRegisterOptionsWithoutElement,
} from "@foresightjs/react";
import { useCallback, useMemo, useState } from "react";
import { Link, type LinkProps } from "react-router";

import { useIsMobile } from "../data-access/use-mobile";

export interface LinkWithPrefetchProps
  extends LinkProps, Omit<ForesightRegisterOptionsWithoutElement, "callback"> {
  ref?: (node: HTMLAnchorElement | null) => void;
}

export function LinkWithPrefetch({
  hitSlop,
  name,
  meta,
  reactivateAfter,
  enabled,
  ref,
  ...props
}: LinkWithPrefetchProps) {
  const [shouldPrefetch, setShouldPrefetch] = useState(false);

  const { elementRef } = useForesight<HTMLAnchorElement>({
    callback: () => {
      console.log(props.to);
      return setShouldPrefetch(true);
    },
    hitSlop,
    name,
    meta,
    reactivateAfter,
    enabled,
  });

  const assignRefs = useCallback(
    (el: HTMLAnchorElement | null) => {
      elementRef(el);
      ref?.(el);
    },
    [elementRef, ref],
  );

  const isMobile = useIsMobile();

  const prefetch = useMemo(
    () =>
      props.prefetch === "none"
        ? "none"
        : shouldPrefetch
          ? "viewport"
          : (props.prefetch ?? (isMobile ? "viewport" : "intent")),
    [props.prefetch, isMobile, shouldPrefetch],
  );

  return <Link {...props} ref={assignRefs} prefetch={prefetch} />;
}
