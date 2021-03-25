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

import { Plugin } from 'vue'
import { $http, createRest } from '../lib/http'

export const http: Plugin = {
  async install(app) {
    app.config.globalProperties.$http = $http
    app.config.globalProperties.$rest = createRest
  },
}
