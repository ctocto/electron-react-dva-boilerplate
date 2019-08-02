// https://github.com/arackaf/customize-cra/blob/master/api.md
const path = require('path')
const { override, addWebpackAlias, addBabelPlugin } = require('customize-cra')

module.exports = {
  webpack: override(
    addBabelPlugin(['react-require']),
    addWebpackAlias({
      '@pages': path.resolve(__dirname, 'app/pages'),
      '@models': path.resolve(__dirname, 'app/models'),
      '@components': path.resolve(__dirname, 'app/components'),
      '@utils': path.resolve(__dirname, 'app/utils'),
      '@common': path.resolve(__dirname, 'app/common'),
    }),
  ),
  paths(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, 'app/index.js')
    paths.appSrc = path.resolve(__dirname, 'app')
    return paths
  },
}
