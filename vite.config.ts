/// <reference types="vitest/config" />

import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  define: {
    "import.meta.env.TIMESTAMP": Date.now(),
    "import.meta.env.HYBRID_SSG": false,
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
