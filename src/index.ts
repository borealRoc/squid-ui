import { createApp } from "vue";

// import SButton from "./button/RenderButton";
// import SButton from './button/SFCButton.vue'
// import SButton from './button/JSXButton'

import App from '../src/App.vue'
// 全局引入
// import SquidUI from "../dist/squid-ui.mjs"
// createApp(App).use(SquidUI).mount("#app");
// 按需引入
import { RenderButton, SFCButton, JSXButton } from "../dist/squid-ui.mjs"
createApp(App)
    .component(RenderButton.name, RenderButton)
    .component(SFCButton.name, SFCButton)
    .component(JSXButton.name, JSXButton)
    .mount("#app")