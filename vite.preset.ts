/// <reference types="vitest/config" />

import { join } from "node:path";
import { defineConfig } from "vite";

const setupFile = join(__dirname, "setup-tests.ts");

export default defineConfig({
  test: {
    setupFiles: [setupFile],
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
