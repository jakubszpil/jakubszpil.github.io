/// <reference types="vitest/config" />

import { mergeConfig, defineConfig } from "vite";

import preset from "../../vite.preset";

// https://vitejs.dev/config/
export default mergeConfig(
  preset,
  defineConfig({
    test: {
      include: ["src/**/*.test.{ts,tsx}"],
    },
  })
);
