import { INDIVIDUAL_NAMES } from "./config";

export const capitalize = (value: string) =>
  value
    .toLowerCase()
    .split(" ")
    .map((i) => `${i.slice(0, 1).toUpperCase()}${i.slice(1)}`)
    .join(" ");

export const retrieveSpaceInString = (value: string) => {
  return value.replaceAll("-", " ");
};

export const retrieveIndividualName = (text?: string) => {
  const textAsLowerCase = text?.toLowerCase();

  if (textAsLowerCase && textAsLowerCase in INDIVIDUAL_NAMES) {
    return INDIVIDUAL_NAMES[textAsLowerCase as keyof typeof INDIVIDUAL_NAMES];
  }

  return text;
};

export const getCapitalizedIndividualName = (value: string) =>
  retrieveIndividualName(capitalize(retrieveSpaceInString(value)));
