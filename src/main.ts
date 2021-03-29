import './styles/main.scss'

import { createApp } from 'vue'
import { baloiseUiLibrary } from '@baloise/ui-library-vue'

import { router } from './plugins/router.plugin'
import { i18n } from './plugins/i18n.plugin'

import App from './app/App.vue'

createApp(App)
  .use(router)
  .use(i18n)
  .use(baloiseUiLibrary, { useVite: true })
  .mount('#app')
