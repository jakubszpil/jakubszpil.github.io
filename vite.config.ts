/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "import.meta.env.TIMESTAMP": Date.now(),
    "import.meta.env.HYBRID_SSG": true,
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
});
