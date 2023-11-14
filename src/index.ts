import { createApp } from "vue";

// import SButton from "./button/RenderButton";
// import SButton from './button/SFCButton.vue'
// import SButton from './button/JSXButton'

import App from '../src/App.vue'

// 一、squid-ui 组件库引入方式
// 1. 全局引入
import SquidUI from "../dist/squid-ui.mjs"
import '../dist/assets/index.css'
createApp(App).use(SquidUI).mount("#app");
// 2. 按需引入
// import { RenderButton, SFCButton, JSXButton, SButton } from "../dist/squid-ui.mjs"
// import '../dist/assets/index.css'
// createApp(App)
//     .component(RenderButton.name, RenderButton)
//     .component(SFCButton.name, SFCButton)
//     .component(JSXButton.name, JSXButton)
//     .component(SButton.name, SButton)
//     .mount("#app")