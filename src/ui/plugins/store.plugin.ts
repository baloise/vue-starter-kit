/**
 * Vue Store with Pinia
 * --------------------
 * Share global states across you vue application with pinia.
 *
 * https://pinia.vuejs.org/
 *
 */

import { App, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { PiniaLogger } from 'pinia-logger'
import { Router } from 'vue-router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }
}

interface PiniaOptions {
  router: Router
}

type InstallPinia = (app: App, options: PiniaOptions) => void

export const installPinia: InstallPinia = (app, { router }) => {
  const pinia = createPinia()

  pinia
    /**
     * Use PiniaLogger to lag the actions to the console.
     */
    .use(
      PiniaLogger({
        expanded: true,
        disabled: import.meta.env.MODE === 'production',
      }),
    )
    /**
     * Inject the router to store context, so that
     * we can later access the router inside the actions.
     */
    .use(({ store }) => {
      store.router = markRaw(router)
    })

  app.use(pinia)
}
