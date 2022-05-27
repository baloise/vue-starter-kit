/**
 * Vue Store with Pinia
 * --------------------
 * Share global states across you vue application with pinia.
 *
 * https://pinia.vuejs.org/
 *
 */

import { createPinia } from 'pinia'
import { PiniaLogger } from 'pinia-logger'

export const pinia = createPinia()

pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: import.meta.env.MODE === 'production',
  }),
)
