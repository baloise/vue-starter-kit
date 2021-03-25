/* ============
 * Main File
 * ============
 *
 * The main.ts file is the entry point of our web application.
 * Here we add global styling, plugins and define where the should get mounted.
 */

import Vue from 'vue'

/* ============
 * Styling
 * ============
 *
 * The global styles are defined in the src/styles/main.scss file.
 *
 * https://sass-lang.com/
 */

import '@/styles/main.scss'

/* ============
 * Configure App
 * ============
 *
 * In this section we define our entry component and mount it to a dom
 * element form the index.html. Moreover, the plugins get registered.
 *
 * Plugins usually add global-level functionality to Vue. There is no strictly
 * defined scope for a plugin - there are typically several types of plugins.
 *
 * https://vuejs.org/v2/guide/plugins.html
 */

import { router } from './plugins/router.plugin'
import { i18n } from './plugins/i18n.plugin'
import './plugins/vuex.plugin'
import './plugins/composition-api.plugin'
import './plugins/http.plugin'
import './plugins/ui-library.plugin'

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
   * Bind the Vue instance to the HTML DOM.
   */
  .$mount('#app')
