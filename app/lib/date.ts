export function getLocalizedDate(date: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getDifferenceInYears(startDate: Date): number {
  const currentDate = new Date();
  const date = new Date(currentDate.getTime() - startDate.getTime());
  const fullYear = date.getUTCFullYear();

  return Math.abs(fullYear - 1970);
}
