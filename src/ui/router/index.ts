import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/HomePage.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pokemon',
    name: 'Pokemon',
    component: () => import('../views/PokemonPage.vue'),
  },
]
