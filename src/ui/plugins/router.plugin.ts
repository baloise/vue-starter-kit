/**
 * Vue Router
 * --------------------
 * The official router for Vue.js.
 *
 * https://next.router.vuejs.org/
 *
 */

import { App } from 'vue'
import { createRouter, createWebHistory, Router } from 'vue-router'
import { routes } from '../router'

type InstallRouter = (app: App) => Router

export const installRouter: InstallRouter = (app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
      return { top: 0 }
    },
  })

  app.use(router)

  return router
}
