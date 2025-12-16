/// <reference types="vitest/config" />

import { defineConfig, type UserConfig } from "vite";

export default defineConfig((): UserConfig => {
  return {
    test: {
      name: "shared",
      include: ["./src/**/*.test.{ts,tsx}"],
      globals: true,
      watch: false,
      css: false,
      environment: "happy-dom",
      passWithNoTests: true,
      pool: "threads",
      reporters: [["default", { summary: false }]],
    },
  };
});
