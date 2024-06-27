/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeHighlight from "rehype-highlight";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const excludeModuleName = (id: string, matcher: string) => {
  const path = id.slice(id.indexOf(matcher)).replace(matcher, "");
  return path.slice(0, path.indexOf("/"));
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [rehypeHighlight],
    }),
    react(),
    tsconfigPaths(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    emptyOutDir: true,
    reportCompressedSize: true,
    cssMinify: "esbuild",
    cssCodeSplit: false,
    modulePreload: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    minify: true,
    manifest: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("/node_modules/")) return "runtime";
          if (id.includes("core")) return "core";
          if (id.includes("shared")) return "shared";
          if (id.includes("content")) return "content";
          if (id.includes("modules")) {
            return excludeModuleName(id, "/modules/");
          }
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
});
