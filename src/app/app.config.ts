export interface AppConfig {
  socials: {
    github: string;
    linkedin: string;
  };
  meta: {
    title: string;
    titleTemplate: string;
    description: string;
  };
}

export const config: AppConfig = {
  socials: {
    github: "https://github.com/jakubszpil/",
    linkedin: "https://www.linkedin.com/in/jakubszpil/",
  },
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
