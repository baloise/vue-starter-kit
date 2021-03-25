/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex, { createLogger } from 'vuex'
import { example, ExampleState } from '@/app/store/modules/example'

export interface Store {
  example: ExampleState
}

export const store = new Vuex.Store<Store>({
  modules: {
    example,
  },
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger({})] : [],
})
