/**
 * Vue Store with Pinia
 * --------------------
 * Share global states across you vue application with pinia.
 *
 * https://pinia.vuejs.org/
 *
 */

import { markRaw } from 'vue'
import { createPinia } from 'pinia'
import { PiniaLogger } from 'pinia-logger'
import { router } from './router.plugin'
import { Router } from 'vue-router'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }
}

export const pinia = createPinia()

pinia
  .use(
    PiniaLogger({
      expanded: true,
      disabled: import.meta.env.MODE === 'production',
    }),
  )
  .use(({ store }) => {
    store.router = markRaw(router)
  })
