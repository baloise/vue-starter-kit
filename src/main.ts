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

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
