/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { VitePWA as pwa } from "vite-plugin-pwa";

import { chunks, mdx, minifyAndPrerender } from "./vite.plugins";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      chunks(),
      mdx(),
      react(),
      tsconfigPaths(),
      minifyAndPrerender({
        include: ["html", "svg", "json"],
        exclude: ["js"],
        prerender: false,
      }),
      pwa({
        registerType: "autoUpdate",
        includeAssets: ["robots.txt", "sitemap.txt", "static/**", "assets/**"],
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg,ttf,txt}"],
        },
        pwaAssets: {
          config: true,
          disabled: false,
          includeHtmlHeadLinks: true,
        },
        manifest: {
          name: "Jakub Szpil",
          short_name: "jakubszpil",
          description: "Blog, portfolio i kursy frontendowe",
          theme_color: "#0a0a0a",
          lang: "pl",
          display: "standalone",
          start_url: "/",
          id: "/",
          screenshots: [
            {
              src: "/static/media/screenshot-iphone-home.png",
              sizes: "750x1334",
              type: "image/png",
              form_factor: "narrow",
              label: "Strona główna",
            },
            {
              src: "/static/media/screenshot-iphone-blog.png",
              sizes: "750x1334",
              type: "image/png",
              form_factor: "narrow",
              label: "Lista artykułów",
            },
            {
              src: "/static/media/screenshot-iphone-learning.png",
              sizes: "750x1334",
              type: "image/png",
              form_factor: "narrow",
              label: "Lista kursów",
            },
            {
              src: "/static/media/screenshot-ipad-home.png",
              sizes: "2048x1536",
              type: "image/png",
              form_factor: "wide",
              label: "Strona główna",
            },
            {
              src: "/static/media/screenshot-ipad-blog.png",
              sizes: "2048x1536",
              type: "image/png",
              form_factor: "wide",
              label: "Lista artykułów",
            },
            {
              src: "/static/media/screenshot-ipad-learning.png",
              sizes: "2048x1536",
              type: "image/png",
              form_factor: "wide",
              label: "Lista kursów",
            },
          ],
          icons: [
            {
              src: "/pwa-64x64.png",
              sizes: "64x64",
              type: "image/png",
            },
            {
              src: "/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/maskable-icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
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
