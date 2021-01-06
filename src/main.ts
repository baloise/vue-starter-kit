/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import "reflect-metadata";
import Vue from "vue";

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 * Sass is used for this boilerplate.
 *
 * https://sass-lang.com/
 */

import "@/scss/styles.scss";

/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 * The order is important!
 */
import "@/plugins/logdown.plugin";
import "@/plugins/axios.plugin";
import "@/plugins/eventbus.plugin";
import "@/plugins/vuex.plugin";
import { i18n } from "@/plugins/i18n.plugin";
import { router } from "@/plugins/vue-router.plugin";
// import store from './app/store'

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */
import App from "./app/App.vue";
import { appConfig } from "@/config/app.config";
import { store } from "@/app/store/index";

Vue.config.productionTip = false;

new Vue({
  /**
   * The localization plugin to support multiple locals.
   * There are located in the src/i18n folder.
   */
  i18n,
  /**
   * Our router plugins, which sync URLs to views in your app.
   * To define a new route open the src/app/router/routes file.
   */
  router,
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
  .$mount("#app");

const log = Vue.$createLogger("main");
log.info(`The environment is ${appConfig.env}.`);
log.info(`The version is ${appConfig.version}.`);
log.info(`The language is set to ${i18n.locale}.`);
