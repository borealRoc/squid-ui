import { createApp } from "vue";
import App from "./App.vue";

import SquidUI from "./entry";
createApp(App).use(SquidUI).mount("#app");

// 完整引入
// import SquidUI from "../dist/squid-ui.mjs"
// createApp(App).use(SquidUI).mount("#app");

// 按需引入
// import { SButton } from "../dist/squid-ui.mjs";
// createApp(App).component(SButton.name, SButton).mount("#app");
