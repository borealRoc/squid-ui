import Theme from "vitepress/dist/client/theme-default";
import SquidUI from "../../../src/entry";

import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
    app.use(SquidUI);
  },
};
