import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      "import.meta.env.TIMESTAMP": Date.now(),
    },
    plugins: [
      tailwindcss(),
      !process.env.VITEST && reactRouter(),
      babel({
        include: ["./app/**/*"],
        babelConfig: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      tsconfigPaths(),
    ],
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
      pool: "typescript",
    },
  };
});
