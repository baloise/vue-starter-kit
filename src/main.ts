import { createApp } from 'vue'
import App from './app/App.vue'

import { router } from './plugins/router.plugin'
import { http } from './plugins/http.plugin'
import { i18n } from './plugins/i18n.plugin'

createApp(App).use(router).use(http).use(i18n).mount('#app')
