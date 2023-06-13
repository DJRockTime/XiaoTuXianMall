import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// element-Plus 按需导入
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver({ importStyle: "sass" })]
        })
    ],
    resolve: {
        alias: {
            "@": `${path.resolve(__dirname, "src")}/`
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@/styles/element/index.scss" as *;`
            }
        }
    }
});
