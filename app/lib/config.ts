export const HYBRID_SSG_ENABLED = Boolean(import.meta.env.HYBRID_SSG);

export const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/jakubszpil/",
    label: "LinkedIn",
    icon: "brand-linkedin",
  },
  {
    href: "https://github.com/jakubszpil/",
    label: "GitHub",
    icon: "brand-github",
  },
] as const;

export const DEFAULT_TITLE = "Jakub Szpil";

export const DEFAULT_TITLE_TEMPLATE = "%s - Jakub Szpil";

export const DEFAULT_DESCRIPTION =
  "Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢";

export const INDIVIDUAL_NAMES = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  github: "GitHub",
  css: "CSS",
  sql: "SQL",
  html: "HTML",
  ci: "CI/CD",
  devops: "DevOps",
  nestjs: "NestJS",
} as const;
