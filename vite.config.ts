import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./src/config/unocss"

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJSX(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: `terser`, // boolean | 'terser' | 'esbuild'
    lib: {
      entry: "./src/entry.ts",
      name: "SquidUI",
      fileName: "squid-ui",
      formats: ["es", "umd", "iife"],
    },
  },
});
