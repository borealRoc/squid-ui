import { App } from "vue";
import RenderButton from "./button/RenderButton";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";
import SButton from './button/'

// 1. 重置样式 这里引入自定义的重置样式也可
// import '@unocss/reset/tailwind.css'
/** 
 *  2. 项目内的样式，
 *  注意：最好放在重置样式后，uno.css前
 */
import '../styles/index.css'
/** 3. 引入uno.css，不引入不生效 */
import "uno.css";


// 导出单独组件
export { RenderButton, SFCButton, JSXButton, SButton };

// 编写一个插件，实现一个install方法
export default {
    install(app: App): void {
        app.component(RenderButton.name, RenderButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
        app.component(SButton.name, SButton);
    },
};
