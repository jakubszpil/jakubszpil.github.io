/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import { chunks, mdx, minify } from "./vite.plugins";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      chunks(),
      mdx(),
      react(),
      tsconfigPaths(),
      minify(["html", "svg", "json"]),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    build: {
      modulePreload: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      cssCodeSplit: true,
      minify: true,
      manifest: true,
    },
    test: {
      include: ["src/app/**/*.{test,spec}.{js,mjs,cjs,ts,mtsw,cts,jsx,tsx}"],
      exclude: ["node_modules/**", "dist/**"],
      testTimeout: 20000,
      globals: true,
      watch: false,
      environment: "jsdom",
    },
  };
});
