import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/HomePage.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/poke',
    name: 'Poke',
    component: () => import('../pages/PokePage.vue'),
  },
]
