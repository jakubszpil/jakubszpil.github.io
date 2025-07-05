export function getLocalizedDate(date: string | Date) {
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

  if (isNaN(startDate.getTime())) {
    throw new Error("Invalid startDate date format");
  }

  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  const diffInYears = diffInDays / 365;

  return Math.round(diffInYears * 2) / 2;
}
