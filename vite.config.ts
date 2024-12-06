/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// import { VitePWA } from "vite-plugin-pwa";

import { mdxToApiJSON, minify } from "./vite.plugins";

const timestamp = Date.now().toString();

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      "import.meta.env.VITE_ETAG": timestamp,
    },
    plugins: [
      mdxToApiJSON(),
      react(),
      tsconfigPaths(),
      minify({
        include: ["html", "svg"],
        exclude: ["js"],
      }),
      // VitePWA({
      //   registerType: "autoUpdate",
      //   minify: true,
      //   workbox: {
      //     cacheId: timestamp,
      //     globPatterns: [
      //       "assets/**/*.{js,css}",
      //       "content/**/*.json",
      //       "static/**/*.{css,woff2,png}",
      //       "./*.{html,webp,ico,svg,js}",
      //     ],
      //     runtimeCaching: [
      //       {
      //         urlPattern: ({ sameOrigin, url }) =>
      //           sameOrigin && url.pathname.endsWith(".js"),
      //         handler: "CacheFirst",
      //         options: {
      //           cacheName: "module-cache",
      //         },
      //       },
      //       {
      //         urlPattern: ({ sameOrigin, url }) =>
      //           sameOrigin && url.pathname.startsWith("/content"),
      //         handler: "CacheFirst",
      //         options: {
      //           cacheName: "api-content-cache",
      //         },
      //       },
      //     ],
      //   },
      //   pwaAssets: {
      //     config: true,
      //     disabled: false,
      //     includeHtmlHeadLinks: true,
      //   },
      //   manifest: {
      //     name: "Jakub Szpil",
      //     short_name: "jakubszpil",
      //     description: "Blog, portfolio i kursy frontendowe",
      //     theme_color: "#0a0a0a",
      //     background_color: "#ffffff",
      //     lang: "pl",
      //     display: "standalone",
      //     start_url: "/",
      //     id: "/",
      //     screenshots: [
      //       {
      //         src: "/static/media/screenshot-iphone-home.png",
      //         sizes: "750x1334",
      //         type: "image/png",
      //         form_factor: "narrow",
      //         label: "Strona główna",
      //       },
      //       {
      //         src: "/static/media/screenshot-iphone-blog.png",
      //         sizes: "750x1334",
      //         type: "image/png",
      //         form_factor: "narrow",
      //         label: "Lista artykułów",
      //       },
      //       {
      //         src: "/static/media/screenshot-iphone-learning.png",
      //         sizes: "750x1334",
      //         type: "image/png",
      //         form_factor: "narrow",
      //         label: "Lista kursów",
      //       },
      //       {
      //         src: "/static/media/screenshot-ipad-home.png",
      //         sizes: "2048x1536",
      //         type: "image/png",
      //         form_factor: "wide",
      //         label: "Strona główna",
      //       },
      //       {
      //         src: "/static/media/screenshot-ipad-blog.png",
      //         sizes: "2048x1536",
      //         type: "image/png",
      //         form_factor: "wide",
      //         label: "Lista artykułów",
      //       },
      //       {
      //         src: "/static/media/screenshot-ipad-learning.png",
      //         sizes: "2048x1536",
      //         type: "image/png",
      //         form_factor: "wide",
      //         label: "Lista kursów",
      //       },
      //     ],
      //     icons: [
      //       {
      //         src: "/images/pwa-64x64.webp",
      //         sizes: "64x64",
      //         type: "image/webp",
      //       },
      //       {
      //         src: "/images/pwa-192x192.webp",
      //         sizes: "192x192",
      //         type: "image/webp",
      //       },
      //       {
      //         src: "/images/pwa-512x512.webp",
      //         sizes: "512x512",
      //         type: "image/webp",
      //       },
      //       {
      //         src: "/images/maskable-icon-512x512.webp",
      //         sizes: "512x512",
      //         type: "image/webp",
      //         purpose: "maskable",
      //       },
      //     ],
      //   },
      // }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    preview: {
      headers: {
        "cache-control": "max-age=600,public",
      },
    },
    resolve: {
      alias: {
        "@tabler/icons-react": "@tabler/icons-react/dist/esm/icons/index.mjs",
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
