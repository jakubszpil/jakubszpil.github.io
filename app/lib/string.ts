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

  switch (textAsLowerCase) {
    case "javascript":
      return "JavaScript";

    case "typescript":
      return "TypeScript";

    case "github":
      return "GitHub";

    case "css":
      return "CSS";

    case "sql":
      return "SQL";

    case "html":
      return "HTML";

    case "ci":
      return "CI/CD";

    case "devops":
      return "DevOps";

    case "nestjs":
      return "NestJS";

    default:
      return text;
  }
};
