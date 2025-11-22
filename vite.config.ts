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
      tailwindcss({
        optimize: {
          minify: true,
        },
      }),
      !process.env.VITEST && reactRouter(),
      babel({
        include: ["./app/**/*"],
        babelConfig: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      tsconfigPaths(),
    ],
    test: {
      include: ["app/**/*.{test,spec}.{ts,tsx}"],
      globals: true,
      watch: false,
      environment: "happy-dom",
      passWithNoTests: true,
      pool: "threads",
    },
  };
});
