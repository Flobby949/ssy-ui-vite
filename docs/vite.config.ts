import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx({}),
    // 添加unoCSS插件
    Unocss(),
  ],
});
