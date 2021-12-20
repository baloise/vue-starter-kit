import { RouteRecordRaw } from 'vue-router'
import Home from '../app/views/Home.vue'

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
      import(/* webpackChunkName: "form" */ '../app/views/Form.vue'),
  },
]
