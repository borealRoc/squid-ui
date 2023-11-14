import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'

import Unocss from './src/config/unocss'

// 由于 Vite 的构建是通过 rollup 完成的，所以 rollup 中的一些配置通过这个属性传递给 vite
const rollupOptions = {
  // 将该模块保留在 bundle 之外，不让 vue 打包到组件库中
  external: ["vue"],
  // 这个配置用于 umd/iffe 包中，意思是全局中的某个模块在组件库中叫什么名字
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: 'assets/[name].[ext]'
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    rollupOptions,
    minify: `terser`, // 压缩混淆选项：boolean | 'terser' | 'esbuild'
    cssCodeSplit: true, // Build 时单独导出 CSS
    lib: {
      entry: "./src/components/",
      name: "SquidUI", // 生成包的名字
      fileName: "squid-ui", // 文件名，一个输出文件名的前缀，默认情况下会和模块类型配合组成最终的文件名
      formats: ["es", "umd", "iife"], // 导出模块格式
    },
  }
});
