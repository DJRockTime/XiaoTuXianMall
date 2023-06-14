import ElementPlus from "element-plus";
import "@/styles/common.scss";
import "element-plus/dist/index.css";

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
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount("#app");

/* 
    全局配置
*/
app.config.globalProperties.axios = axios;
