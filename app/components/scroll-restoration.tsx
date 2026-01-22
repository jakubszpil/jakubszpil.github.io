import { useEffect, useEffectEvent } from "react";
import { useLocation } from "react-router";

import { restoreScroll } from "../lib/scroll-restoration";

export function ScrollRestoration() {
  const location = useLocation();

  const restoreScrollByLocation = useEffectEvent(() => {
    restoreScroll(location);
  });

  useEffect(() => {
    restoreScrollByLocation();
  }, []);

  return null;
}
