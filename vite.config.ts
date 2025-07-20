import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      "import.meta.env.TIMESTAMP": Date.now(),
    },
    plugins: [!process.env.VITEST && reactRouter(), tsconfigPaths()],
    css: {
      postcss: {
        plugins: [tailwindcss(), autoprefixer()],
      },
    },
    esbuild: {
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
    },
    test: {
      include: ["app/**/*.{test,spec}.{ts,tsx}"],
      globals: true,
      watch: false,
      environment: "jsdom",
      passWithNoTests: true,
    },
  };
});
