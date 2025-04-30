export const capitalize = (value: string) =>
  value
    .toLowerCase()
    .split(" ")
    .map((i) => `${i.slice(0, 1).toUpperCase()}${i.slice(1)}`)
    .join(" ");

export const retrieveSpaceInString = (value: string) => {
  return value.replaceAll("-", " ");
};
