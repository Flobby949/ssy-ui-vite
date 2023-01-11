import { App } from "vue";
import { Button } from "./Button";

// 导出单独组件
export { Button };

// 编写插件，实现install方法
export default {
  install(app: App): void {
    app.component(Button.name, Button);
  },
};
