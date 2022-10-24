import { createApp } from "vue";
import App from "./App.vue";
// import SquidUI from "./entry";

// 完整引入
// import SquidUI from "../dist/squid-ui.mjs"
// createApp(App).use(SquidUI).mount("#app");

// 按需引入
import { TSXButton, VueButton } from "../dist/squid-ui.mjs";
createApp(App)
.component(TSXButton.name, TSXButton)
.component(VueButton.name, VueButton)
.mount("#app");

