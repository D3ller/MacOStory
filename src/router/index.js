import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IMessage from "@/views/IMessage/IMessage.vue";
import MessageContact from "@/views/IMessage/MessageContact.vue";

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
      name: 'imessage_contact',
      component: MessageContact
    },
    {
      path:'/imessage/:id',
      name: 'imessage',
      component: IMessage
    }
  ]
})

export default router
