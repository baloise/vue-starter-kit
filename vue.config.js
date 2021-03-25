const NODE_ENV =
  process.env.NODE_ENV !== 'development' ? 'production' : 'development'

module.exports = {
  configureWebpack: {
    mode: NODE_ENV,
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(5000000).maxAssetSize(5000000)
  },
  publicPath: NODE_ENV === 'production' ? '/app-name' : '/',
  devServer:
    NODE_ENV !== 'production'
      ? {
          proxy: {
            '/app-name/api': {
              target: 'http://localhost:8080',
              changeOrigin: true,
            },
          },
        }
      : {},
}
