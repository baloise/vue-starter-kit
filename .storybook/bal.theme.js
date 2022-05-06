import { create, themes } from '@storybook/theming'

export default create({
  ...themes.dark,

  appBg: '#15212a',
  appBg: '#161A38',
  appBg: '#13162D',
  appBg: '#12152D',
  appContentBg: '#1b2730',
  appContentBg: '#181D41',
  appContentBg: '#1E234A',
  appBorderRadius: 12,

  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  barTextColor: '#e5e7f0',
  barBg: '#181D41',

  inputBg: '#12152D',
  inputBorder: '#e5e7f0',
  inputBorderRadius: 4,

  brandTitle: 'Vue Stater Kit',
  brandUrl: 'https://github.com/baloise/vue-starter-kit',
  // brandImage: Logo,
})
