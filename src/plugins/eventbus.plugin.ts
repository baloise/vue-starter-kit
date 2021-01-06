/* ============
 * Event Bus
 * ============
 *
 */

import Vue, { PluginObject } from 'vue'

export const EventBus: PluginObject<any> = {
  install(VueInstance): void {
    const eventBus = new Vue()
    VueInstance.$eventBus = eventBus
    VueInstance.prototype.$eventBus = eventBus
  },
}

Vue.use(EventBus)
