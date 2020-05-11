const path = require('path')
const configs = require('./configs/index')

console.log('\n\nBundling media files...\n\n')

module.exports = {
  entry: {
    mediaFiles: `${__dirname}/../src/mediaFiles/index.js`
  },
  module: {
    rules: [
      ...configs.mediaFileRules
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, '../dist/bundles'),
    publicPath: '/bundles/',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  }
}
