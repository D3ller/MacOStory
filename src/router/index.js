import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IMessage from "@/views/IMessage/IMessage.vue";
import MessageContact from "@/views/IMessage/MessageContact.vue";
import Calc from "@/views/Calc.vue";
import Notes from "@/views/Notes.vue";

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
      path:'/albums/gallery',
      name: 'gallery',
      component: () => import('../views/Gallery.vue')
    },
    {
      path:'/albums',
      name: 'albums',
      component: () => import('../views/ALBUMS.vue')
    },
    {
      path:'/imessage/:id',
      name: 'imessage',
      component: IMessage
    },
    {
      path: '/localization',
        name: 'localization',
        component: () => import('../views/Localization.vue')
    },
    {
      path: '/calc',
      name: 'Calculatrice',
      component: Calc
    },
    {
      path: '/instagram',
      name: 'Instagram',
      component: () => import('../views/Instagram.vue')
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/reglages',
      name: 'Systeme',
      component: () => import('../views/Reglage.vue')
    }
  ]
})

export default router
