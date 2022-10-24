import { App } from "vue";
import SButton from "./components/button/index";

export { SButton };

export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
  },
};
