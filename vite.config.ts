/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

import { mdx } from "./vite.plugins";

const excludeModuleName = (id: string, matcher: string) => {
  const path = id.slice(id.indexOf(matcher)).replace(matcher, "");
  return path.slice(0, path.indexOf("/"));
};

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [mdx(), react(), tsconfigPaths()],
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
      minify: true,
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("/node_modules/")) return "vendor";
            if (id.includes("core")) return "core";
            if (id.includes("shared")) return "shared";
            if (id.includes("content")) return "content";
            if (id.includes("modules"))
              return excludeModuleName(id, "/modules/");

            return "index";
          },
        },
      },
    },
    test: {
      include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mtsw,cts,jsx,tsx}"],
      exclude: ["node_modules/**", "dist/**"],
      testTimeout: 20000,
      globals: true,
      watch: false,
      environment: "jsdom",
    },
  };
});
