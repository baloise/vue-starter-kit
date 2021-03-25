import { RouteRecordRaw } from 'vue-router'
import Home from '../app/pages/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/form',
    name: 'Form',
    component: () =>
      import(/* webpackChunkName: "form" */ '../app/pages/Form.vue'),
  },
]
