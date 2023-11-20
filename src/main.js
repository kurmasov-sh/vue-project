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
import store from "@/store"
import  cart  from "@/components/cart.vue";
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
            {
                path: '/admin',
                component: admin,
            },
            {
                name: 'detail',
                path: '/detail/:id/:name/:description/:price',
                component: detail,
            },
            {
                path: '/cart',
                component: cart,
            },
        ]
    }
)
createApp(App)
    .use(router)
    .use(store)
    .mount('#app')