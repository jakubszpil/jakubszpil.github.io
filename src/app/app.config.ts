export interface AppConfig {
  socials: {
    github: string;
    linkedin: string;
  };
  meta: {
    title: string;
    titleTemplate: string;
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
  },
};

declare module "@libs/shared" {
  interface Config extends AppConfig {}
}
