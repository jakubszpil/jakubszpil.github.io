import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import { appRoutes } from "./app.routes";
import { buildRoutes, createRoute } from "./shared/utils/routing";

export const config = {
  routes: buildRoutes(
    createRoute("")
      .addModule(() => import("./app"))
      .addChildren(...appRoutes)
  ),
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
    titleTemplate: "%s - Jakub Szpil",
    description:
      "Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢",
  },
};
