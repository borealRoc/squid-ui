import { App } from "vue";
import RenderButton from "./button/RenderButton";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

// 导出单独组件
export { RenderButton, SFCButton, JSXButton };

// 编写一个插件，实现一个install方法
export default {
    install(app: App): void {
        app.component(RenderButton.name, RenderButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    },
};
