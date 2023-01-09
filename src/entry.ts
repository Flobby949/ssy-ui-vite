import { App } from "vue";
import SButton from "./button/Button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

// 导出单独组件
export { SButton, SFCButton, JSXButton };

// 编写插件，实现install方法
export default {
  install(app: App): void {
    app.component(SButton.name, SButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
