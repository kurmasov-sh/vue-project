import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App'
import { createRouter, createWebHistory } from "vue-router"
import  footer_temp  from "@/components/footer.vue";
import  header_temp  from "@/components/header.vue";
import  main_temp  from "@/components/main.vue";
import  auth  from "@/components/auth.vue";
import  admin  from "@/components/adminPage.vue";
import detail from "@/components/detail.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: main_temp,
            },
            {
                path: '/auth',
                component: auth,
            },
        ]
    }
)
createApp(App)
    .use(router)
    .mount('#app')