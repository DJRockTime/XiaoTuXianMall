import ElementPlus from "element-plus";
import "./assets/main.css";
import "element-plus/dist/index.css";

import { createApp } from "vue";
import axios from "axios";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

/* 
    安装插件，挂载根节点
*/
app.use(ElementPlus);
app.use(pinia);
app.mount("#app");

/* 
    全局配置
*/
app.config.globalProperties.axios = axios;
