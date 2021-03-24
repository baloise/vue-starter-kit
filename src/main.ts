import { createApp } from 'vue'
import App from './app/App.vue'

import { i18n } from './plugins/i18n.plugin'

createApp(App).use(i18n).mount('#app')
