import type { Location } from "react-router";

export function getScrollRestorationKey(location: Location) {
  return Object.values({
    ...location,
    key: location.hash ? undefined : location.key,
  })
    .filter(Boolean)
    .join(".");
}

export function getScrollRestorationStorageKey() {
  return "react-router-scroll-positions";
}

export function getScrollRestorationEntries(): Record<string, number> {
  return JSON.parse(
    sessionStorage.getItem(getScrollRestorationStorageKey()) || "{}"
  );
}

export function restoreScroll(location: Location) {
  const key = getScrollRestorationKey(location);
  const entries = getScrollRestorationEntries();

  if (location.hash && !(key in entries)) {
    const hash = decodeURI(location.hash);
    const element = document.querySelector(hash);
    if (element) element.scrollIntoView({ behavior: "instant" });
    return;
  }

  const entry = entries?.[key] ?? 0;

  scrollTo(0, entry);
}
