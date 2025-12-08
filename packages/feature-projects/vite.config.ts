/// <reference types="vitest/config" />

import { defineConfig, type UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    test: {
      include: ["src/**/*.test.{ts,tsx}"],
      globals: true,
      watch: false,
      environment: "happy-dom",
      passWithNoTests: true,
      pool: "threads",
    },
  };
});
