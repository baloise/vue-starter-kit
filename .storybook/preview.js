import '../src/plugins/baloise-design-system.scss'

import { app } from '@storybook/vue3'
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('bal-')

export const decorators = [
  (story) => ({
    components: { story },
    template: '<bal-app><story /></bal-app>',
  }),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'grey',
        value: '#fafafa',
      },
      {
        name: 'blue',
        value: '#003399',
      },
    ],
  },
  viewport: {
    viewports: {
      small: {
        name: 'Small (Mobile) from 320px to 768px',
        styles: {
          width: '320px',
          height: '667px',
        },
        type: 'mobile',
      },
      medium: {
        name: 'Medium (Tablet)',
        styles: {
          width: '1023px',
          height: '834px',
        },
        type: 'tablet',
      },
      large: {
        name: 'Large (Desktop)',
        styles: {
          width: '1216px',
          height: '801px',
        },
        type: 'desktop',
      },
      'x-large': {
        name: 'X-Large (Desktop)',
        styles: {
          width: '1408px',
          height: '801px',
        },
        type: 'desktop',
      },
    },
  },
}
