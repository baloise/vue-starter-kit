import { RouteRecordRaw } from 'vue-router'
import Home from '../app/pages/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../app/pages/About.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../app/pages/Form.vue'),
  },
]
