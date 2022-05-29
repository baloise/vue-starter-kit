/**
 * Vue Router
 * --------------------
 * The official router for Vue.js.
 *
 * https://next.router.vuejs.org/
 *
 */

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../router'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
