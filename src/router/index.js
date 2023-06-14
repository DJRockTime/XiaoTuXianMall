import { createRouter, createWebHistory } from "vue-router";

// components
const Login = () => import("@/views/Login/index.vue");
const Layout = () => import("@/views/Layout/index.vue");
const Home = () => import("@/views/Home/index.vue");
const Category = () => import("@/views/Category/index.vue");

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                component: Home
            },
            {
                path: "category",
                component: Category
            }
        ]
    },
    {
        path: "/login",
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
