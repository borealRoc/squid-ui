import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../src/config/unocss";

export default defineConfig({
  plugins: [vueJsx(), Unocss()],
});
