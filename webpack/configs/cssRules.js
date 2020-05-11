const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getLoaders = cssLoader => [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: process.env.NODE_ENV === 'local',
      publicPath: '/bundles/'
    }
  },
  cssLoader,
  {
    loader: 'postcss-loader',
    options: { config: { path: `${__dirname}/../../postcss.config.js` } }
  }
]

module.exports = {
  test: /\.css$/,
  exclude: path.resolve(__dirname, '../../dist'),
  oneOf: [
    {
      resourceQuery: /external/,
      use: getLoaders({
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: false,
          sourceMap: false
        }
      })
    },
    {
      use: getLoaders({
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: { localIdentName: '[local]--[hash:base64:5]' },
          sourceMap: process.env.NODE_ENV !== 'production'
        }
      })
    }
  ]
}
