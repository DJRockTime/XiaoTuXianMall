import "@/styles/common.scss";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { createApp } from "vue";
import axios from "axios";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";

const app = createApp(App);
const pinia = createPinia();

/* 
    安装插件，挂载根节点
*/
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount("#app");

/* 
    全局配置
*/
app.config.globalProperties.axios = axios;
