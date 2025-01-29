import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { VitePWA as pwa } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      "import.meta.env.TIMESTAMP": Date.now(),
    },
    plugins: [
      reactRouter(),
      tsconfigPaths(),
      pwa({
        disable: true,
        registerType: "autoUpdate",
        injectRegister: "script",
        workbox: {
          cleanupOutdatedCaches: true,
          navigateFallback: null,
          runtimeCaching: [
            {
              urlPattern: ({ sameOrigin }) => sameOrigin,
              handler: "CacheFirst",
              options: {
                cacheName: "jakubszpil.cache",
              },
            },
          ],
        },
        pwaAssets: {
          config: true,
          disabled: false,
          includeHtmlHeadLinks: true,
          injectThemeColor: true,
        },
        manifest: {
          name: "Jakub Szpil",
          short_name: "jakubszpil",
          description: "Blog, portfolio i kursy frontendowe",
          theme_color: "#0a0a0a",
          background_color: "#ffffff",
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
              src: "/static/media/pwa-64x64.webp",
              sizes: "64x64",
              type: "image/webp",
            },
            {
              src: "/static/media/pwa-192x192.webp",
              sizes: "192x192",
              type: "image/webp",
            },
            {
              src: "/static/media/pwa-512x512.webp",
              sizes: "512x512",
              type: "image/webp",
            },
            {
              src: "/static/media/maskable-icon-512x512.webp",
              sizes: "512x512",
              type: "image/webp",
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
      include: ["app/**/*.{test,spec}.{js,mjs,cjs,ts,mtsw,cts,jsx,tsx}"],
      exclude: ["node_modules/**", "dist/**"],
      testTimeout: 20000,
      globals: true,
      watch: false,
      environment: "jsdom",
      passWithNoTests: true,
    },
  };
});
