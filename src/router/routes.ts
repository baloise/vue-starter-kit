import { RouteConfig } from 'vue-router'
import Home from '../app/pages/Home.vue'

export const routes: Array<RouteConfig> = [
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
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../app/pages/About.vue'),
  },
]
