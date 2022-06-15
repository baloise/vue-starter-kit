import '../src/ui/plugins/baloise-design-system.sass'

import { app } from '@storybook/vue3'
import { i18n } from '../src/ui/plugins/i18n.plugin'

app.use(i18n)
app.provide('i18n', i18n)
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('bal-')

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    canvas: {},
    'storybook/docs/panel': {},
    ['@geometricpanda/storybook-addon-iframe']: {
      title: 'Slides',
    },
  },
  backgrounds: {
    grid: {
      cellSize: 8,
    },
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#fff',
      },
      {
        name: 'dark',
        value: '#039',
      },
    ],
  },
}
