/// <reference types="vitest/config" />

import { defineConfig, type UserConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    define: {
      "import.meta.env.TIMESTAMP": Date.now(),
    },
    plugins: [
      tailwindcss(),
      !process.env.VITEST && reactRouter(),
      babel({
        include: ["./app/**/*", "./packages/**/src/**/*"],
        babelConfig: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      tsconfigPaths(),
    ],
    test: {
      include: ["app/**/*.test.{ts,tsx}", "packages/**/src/**/*.test.{ts,tsx}"],
      setupFiles: ["./setup-tests.ts"],
      globals: true,
      watch: false,
      css: false,
      environment: "happy-dom",
      passWithNoTests: true,
      pool: "threads",
      isolate: false,
      reporters: [["default", { summary: false }]],
    },
  };
});
