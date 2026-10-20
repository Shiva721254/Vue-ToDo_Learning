import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskView from "../views/TaskView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/tasks',
            name:'tasks',
            component: TaskView
        },
        {
            path:'/about',
            name:'about',
            component:AboutView
        }
    ]

})

export default router