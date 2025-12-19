import { mergeConfig, defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babel from "vite-plugin-babel";
import tailwindcss from "@tailwindcss/vite";

import preset from "./vite.preset";

// https://vitejs.dev/config/
export default mergeConfig(
  preset,
  defineConfig({
    define: {
      "import.meta.env.TIMESTAMP": Date.now(),
    },
    plugins: [
      tailwindcss({
        optimize: {
          minify: true,
        },
      }),
      !process.env.VITEST && reactRouter(),
      babel({
        include: ["./app/**/*", "./packages/**/src/**/*"],
        babelConfig: {
          plugins: ["babel-plugin-react-compiler"],
        },
      }),
      tsconfigPaths(),
    ],
    test: {
      include: ["app/**/*.test.{ts,tsx}"],
    },
  })
);
