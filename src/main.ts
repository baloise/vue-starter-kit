/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue'

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Sass is used for this boilerplate.
 *
 * https://sass-lang.com/
 */

import '@/styles/main.scss'

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 * The order is important!
 */
import { router } from './plugins/router.plugin'
import { i18n } from './plugins/i18n.plugin'
import './plugins/vuex.plugin'
import './plugins/composition-api.plugin'
import './plugins/http.plugin'
import './plugins/ui-library.plugin'

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from './app/App.vue'
import { store } from '@/app/store/index'

Vue.config.productionTip = false

new Vue({
  /**
   * Our router plugins, which sync URLs to views in your app.
   * To define a new route open the src/app/router/routes file.
   */
  router,
  /**
   * The localization plugin to support multiple locals.
   * There are located in the src/i18n folder.
   */
  i18n,
  /**
   * Our store gives us the ability to store and share reactive data across the app.
   * To store is located in the src/app/store folder and devided into modules.
   */
  store,
  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: (h) => h(App),
})
  /**
   * Bind the Vue instance to the HTML.
   */
  .$mount('#app')
