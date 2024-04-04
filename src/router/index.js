import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IMessage from "@/views/IMessage.vue";
import Localization from "@/views/Localization.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/imessage',
      name: 'imessage',
      component: IMessage
    },
    {
      path:'/localization',
      name: 'localization',
      component: Localization
    }
  ]
})

export default router
