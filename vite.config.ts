/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./src/config/unocss";

// 由于 Vite 的构建是通过 rollup 完成的，所以 rollup 中的一些配置通过这个属性传递给 rollup
const rollupOptions = {
  // 将该模块保留在 bundle 之外，比如在数组中添加了 vue ，就是为了不让 vue 打包到组件库中
  external: ["vue"],
  // 这个配置用于 umd/iffe 包中，意思是全局中的某个模块在组件库中叫什么名字
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
    minify: `terser`,   // 压缩混淆选项：boolean | 'terser' | 'esbuild'
    cssCodeSplit: true, // Build 时单独导出 CSS
    sourcemap: true,    // 导出 SourceMap
    reportCompressedSize: true,  // 生成压缩大小报告
    lib: {
      entry: "./src/entry.ts",
      name: "SquidUI",      // 生成包的名字，在 iife/umd 包，同一页上的其他脚本可以访问它
      fileName: "squid-ui", // 是文件名，其实只是一个输出文件名的前缀，默认情况下会和模块类型配合组成最终的文件名
      formats: ["es", "umd", "iife"], // 导出模块类型
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
