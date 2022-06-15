/* ============
 * Main File
 * ============
 *
 * The main.ts file is the entry point of our web application.
 * Here we add global styling, plugins and define where the should get mounted.
 */

import { createApp } from 'vue'

import { setAutoFreeze } from 'immer'
setAutoFreeze(false)

/* ============
 * Configure App
 * ============
 *
 * In this section we define our entry component and mount it to a dom
 * element form the index.html. Moreover, the plugins get registered.
 *
 * Plugins are self-contained code that usually add global-level functionality to Vue.
 * It is either an object that exposes an install() method, or a function.
 *
 * https://v3.vuejs.org/guide/plugins.html
 */

import { installPinia } from './plugins/store.plugin'
import { installI18n } from './plugins/i18n.plugin'
import { installRouter } from './plugins/router.plugin'
import { installBaloise } from './plugins/baloise.plugin'
import App from './App.vue'

const app = createApp(App)
/**
 * Our router plugins, which sync URLs to views in your app.
 * To define a new route open the src/router folder.
 */
const router = installRouter(app)
/**
 * The localization plugin to support multiple locals.
 * There are located in the src/locales folder.
 */
const i18n = installI18n(app)
/**
 * Share data across your components with pinia.
 * Create new stores in the folder src/stores
 */
installPinia(app, { router })
/**
 * Define the Baloise specific plugins.
 */
installBaloise(app, { i18n })

/**
 * Bind the Vue instance to the HTML DOM.
 */
app.mount('#app')
