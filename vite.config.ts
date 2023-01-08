import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import Unocss from "./config/unocss"

const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "vue"
        }
    }
}

export default defineConfig({
    plugins: [
        vue(),
        // 添加JSX插件
        vueJsx({}),
        // 添加unoCSS插件
        Unocss()
    ],
    // 添加库模式配置
    build: {
        rollupOptions,
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: "./src/entry.ts",
            name: "SSYUI",
            fileName: "ssy-ui",
            // 导出模块格式
            formats: ["esm", "umd", "iife"]
        }
    },
    // 添加Vitest配置
    test: {
        // enable jest-like global test APIS
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        // 支持tsx组件，很关键
        transformMode: {
            web: [/.[tj]sx$/]
        }
    }
})