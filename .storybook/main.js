const { resolve } = require('path')
const { mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@geometricpanda/storybook-addon-iframe',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ['../public', '../src/stories/assets'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(__dirname, '../src'),
          'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        },
      },
      optimizeDeps: {
        exclude: ['@stencil/core', '@types/jest'],
      },
    })
  },
}
