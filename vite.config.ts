/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { randomUUID } from "crypto";

declare global {
  interface ImportMetaEnvVariables {
    BUILD_ID: string;
    HYBRID_SSG: boolean;
  }

  interface ImportMetaEnv extends ImportMetaEnvVariables {}
}

type Variables = {
  [K in keyof ImportMetaEnvVariables as `import.meta.env.${K}`]: ImportMetaEnvVariables[K];
};

function defineVariables<T>(variables: Variables): Variables {
  return variables;
}

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    resolve: {
      tsconfigPaths: true,
    },
    define: {
      ...defineVariables({
        "import.meta.env.BUILD_ID": JSON.stringify(randomUUID().split("-")[0]),
        "import.meta.env.HYBRID_SSG": false,
      }),
    },
    plugins: [
      tailwindcss({
        optimize: {
          minify: true,
        },
      }),
      !process.env.VITEST && reactRouter(),
    ],
    test: {
      include: ["./app/**/*.test.{ts,tsx}"],
      setupFiles: ["./setup-tests.ts"],
      globals: false,
      watch: false,
      css: false,
      environment: "happy-dom",
      passWithNoTests: true,
      pool: "threads",
      reporters: [["default", { summary: false }]],
      isolate: false,
      deps: {
        web: {
          transformAssets: false,
          transformCss: false,
        },
      },
      typecheck: {
        enabled: false,
      },
    },
  };
});
