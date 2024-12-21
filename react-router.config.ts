import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  appDirectory: "src/app",
  buildDirectory: "dist",
  async prerender() {
    return [
      "/",
      "/me",
      "/search",
      "/blog",
      "/blog/dependency-injection-kontra-typescript",
      "/blog/obserwatorium-czyli-wzorzec-projektowy-obserwatora",
      "/blog/signalizacja-czyli-koncept-signals-w-typescript",
      "/blog/kategorie/typescript",
      "/blog/kategorie/wzorce",
      "/learning",
      "/learning/kategorie/wprowadzenie",
      "/learning/kategorie/html",
      "/learning/kategorie/javascript",
      "/learning/kategorie/css",
      "/learning/kategorie/seo",
      "/learning/nowoczesny-javascript",
      "/learning/szybszy-css-czyli-wprowadzenie-do-bem",
      "/learning/wprowadzenie-do-css",
      "/learning/wprowadzenie-do-dom",
      "/learning/wprowadzenie-do-html",
      "/learning/wprowadzenie-do-javascript",
      "/learning/semantyczny-html",
      "/portfolio",
      "/handbook",
      "/404",
    ];
  },
} satisfies Config;
