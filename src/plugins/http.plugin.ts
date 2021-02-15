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
import Axios from 'axios'

import { appConfig } from '@/config/app.config'

/**
 * HTTP Defaults
 */
Axios.defaults.baseURL = appConfig.apiPath
Axios.defaults.timeout = 5000
Axios.defaults.headers.common.Accept = 'application/json'
Axios.defaults.headers.common.ContentType = 'application/json'

/**
 * HTTP Interceptors
 */
Axios.interceptors.request.use(
  request => {
    // Add a token to every request
    // request.headers.Authorization = `Bearer ${token}`;
    return request
  },
  error => error,
)
Axios.interceptors.response.use(
  response => response,
  error => {
    // TODO: Handle network errors
    // if (!error.response) {
    //   store.dispatch(MetaDataActions.SetServerUnavailable);
    // }

    // TODO: Handle 401 responses
    // if (error.response && error.response.status === 401 && store.state.auth.isAuthenticated) {
    //   store.dispatch(AuthActions.SignOutUser);
    // }

    return Promise.reject(error)
  },
)

/**
 * HTTP Vue plugin
 */
export const http: Plugin = {
  async install(app) {
    app.config.globalProperties.$http = Axios
    app.provide<typeof Axios>('$http', Axios)
  },
}
