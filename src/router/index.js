import home from "../views/home.vue"
import movieCard from "../views/movieCard.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes=[
    {
        path:'/',
        name:'home',
        component:home

    },
    {
        path:'/movie/:id',
        name:'movie',
        component:movieCard

    }

]
const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
export default router