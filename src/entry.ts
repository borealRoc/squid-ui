import { App } from "vue";
import TSXButton from "./components/button/index";
import VueButton from "./components/button/index.vue";

export { TSXButton, VueButton };

export default {
  install(app: App): void {
    app.component(TSXButton.name, TSXButton);
    app.component(VueButton.name, VueButton);
  },
};
