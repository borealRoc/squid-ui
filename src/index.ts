import { createApp } from "vue";
import App from "./App.vue";
// import SquidUI from "./entry";
import SquidUI from "../dist/squid-ui.mjs";

createApp(App).use(SquidUI).mount("#app");
