/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue, { PluginObject } from 'vue'
import { $http, createRest } from '../lib/http'

export const Http: PluginObject<void> = {
  install(VueInstance): void {
    VueInstance.$http = $http
    VueInstance.prototype.$http = $http
    VueInstance.$rest = createRest
    VueInstance.prototype.$rest = createRest
  },
}

Vue.use(Http)
