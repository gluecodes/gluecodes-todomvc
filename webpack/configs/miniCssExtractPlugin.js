const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const version = require('../../buildStamp')

module.exports = new MiniCssExtractPlugin({
  filename: `[name]-${version}.bundle.css`,
  chunkFilename: `[id]-${version}.chunk.css`
})
