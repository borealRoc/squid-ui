/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./src/config/unocss";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `assets/squid-ui.css`,
  },
};

export default defineConfig({
  plugins: [vue(), vueJSX(), Unocss()],
  build: {
    rollupOptions,
    minify: `terser`, // boolean | 'terser' | 'esbuild'
    cssCodeSplit: true, // Build 时单独导出 CSS
    lib: {
      entry: "./src/entry.ts",
      name: "SquidUI",
      fileName: "squid-ui",
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,  // enable jest-like global test APIs
    environment: "happy-dom",  // 提供测试所需要的 Dom 仿真
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
