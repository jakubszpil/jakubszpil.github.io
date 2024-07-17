import {
  type Icon,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export interface AppConfig {
  socials: Array<{ href: string; label: string; icon: Icon }>;
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
  };
}

export const config: AppConfig = {
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
    title: "Jakub Szpil",
    titleTemplate: "%s - Jakub Szpil",
    description:
      "Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢",
  },
};

declare module "@libs/shared" {
  interface Config extends AppConfig {}
}
