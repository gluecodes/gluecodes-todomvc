const path = require('path')
const webpack = require('webpack')
const configs = require('./configs/index')

const targetPage = process.argv[(process.argv.findIndex(arg => (arg === '--page')) + 1) || -1]

console.log('\n\nBundling prerenders...\n\n')

module.exports = {
  entry: configs.pageSettings
    .filter(({ bundleName }) => (!targetPage || bundleName === targetPage))
    .reduce((acc, { bundleName }) => ({
      ...acc,
      [bundleName]: `${__dirname}/../src/pages/${bundleName}/prerender.js`
    }), {}),
  module: {
    rules: [
      configs.cssRules,
      ...configs.mediaFileRules
    ]
  },
  plugins: [
    configs.miniCssExtractPlugin,
    new webpack.DefinePlugin({
      'global.ENV': JSON.stringify(process.env.NODE_ENV),
      'global.LOCATION_ORIGIN': JSON.stringify(process.env.LOCATION_ORIGIN)
    })
  ],
  output: {
    filename: '[name]-prerender.js',
    chunkFilename: '[id]-prerender.chunk.js',
    path: path.resolve(__dirname, '../dist/bundles'),
    publicPath: '/bundles/',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
}
