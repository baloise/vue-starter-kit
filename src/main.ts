import './styles/main.scss'

import { createApp } from 'vue'
import { baloiseUiLibrary } from '@baloise/ui-library-vue'

import { i18n } from './plugins/i18n.plugin'

import App from './app/App.vue'

createApp(App).use(i18n).use(baloiseUiLibrary).mount('#app')
