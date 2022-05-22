import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/HomePage.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/CheckoutPage.vue'),
  },
]
