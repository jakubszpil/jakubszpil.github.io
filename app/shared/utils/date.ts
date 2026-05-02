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

  if (isNaN(startDate.getTime())) {
    throw new Error("Invalid startDate date format");
  }

  const diffInMilliseconds = currentDate.getTime() - startDate.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  const diffInYears = diffInDays / 365;

  return Math.round(diffInYears * 2) / 2;
}

export function sortByCreationDate(
  first: {
    createdAt?: string;
  },
  second: {
    createdAt?: string;
  },
) {
  const firstDate = first.createdAt ?? new Date();
  const secondDate = second.createdAt ?? new Date();

  const firstCreationTime = new Date(firstDate).getTime();
  const secondCreationTime = new Date(secondDate).getTime();

  return secondCreationTime - firstCreationTime;
}
