import { config } from "./config";

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

  if (textAsLowerCase && textAsLowerCase in config.individualNames) {
    return config.individualNames[
      textAsLowerCase as keyof typeof config.individualNames
    ];
  }

  return text;
};

export const getCapitalizedIndividualName = (value: string) =>
  retrieveIndividualName(capitalize(retrieveSpaceInString(value)));
