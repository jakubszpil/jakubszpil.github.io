import { IconBrandGithub, IconBrandLinkedin } from "~/components/ui/icons";

export const config = {
  socials: [
    {
      href: "https://www.linkedin.com/in/jakubszpil/",
      label: "LinkedIn",
      icon: IconBrandLinkedin,
    },
    {
      href: "https://github.com/jakubszpil/",
      label: "GitHub",
      icon: IconBrandGithub,
    },
  ],
  meta: {
    defaultTitle: "Jakub Szpil",
    titleTemplate: "%s - Jakub Szpil",
    description:
      "Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢",
  },
  individualNames: {
    javascript: "JavaScript",
    typescript: "TypeScript",
    github: "GitHub",
    css: "CSS",
    sql: "SQL",
    html: "HTML",
    ci: "CI/CD",
    devops: "DevOps",
    nestjs: "NestJS",
  },
};
