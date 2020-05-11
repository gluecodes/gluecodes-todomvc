const { existsSync } = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const version = require('../buildStamp')
const configs = require('./configs/index')

const pages = configs.pageSettings.map(page => ({
  ...page,
  prerenderedPage: existsSync(`${__dirname}/../dist/bundles/${page.bundleName}-prerender.js`)
    ? require(`${__dirname}/../dist/bundles/${page.bundleName}-prerender`).default()
    : '<div id="layout"></div>'
}))

const mediaFiles = existsSync(`${__dirname}/../dist/bundles/mediaFiles.js`)
  ? require(`${__dirname}/../dist/bundles/mediaFiles`)
  : {}

const targetPage = process.argv[(process.argv.findIndex(arg => (arg === '--page')) + 1) || -1]

console.log('\n\nBundling app...\n\n')

module.exports = {
  entry: pages
    .filter(({ bundleName }) => (!targetPage || bundleName === targetPage))
    .reduce((acc, { bundleName }) => ({
      ...acc,
      [bundleName]: `${__dirname}/../src/pages/${bundleName}/index.js`
    }), {}),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, '../lib'),
          path.resolve(__dirname, '../src')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../dist')
        ],
        use: { loader: 'babel-loader' }
      },
      configs.cssRules,
      ...configs.mediaFileRules
    ]
  },
  plugins: [
    configs.miniCssExtractPlugin,
    ...pages
      .filter(({ bundleName }) => (!targetPage || bundleName === targetPage))
      .map(page => (
        new HtmlWebpackPlugin({
          chunks: [],
          filename: `${__dirname}/../dist/${page.bundleName}.html`,
          inject: false,
          template: path.resolve(__dirname, `../src/pageTemplates/${page.template || 'index'}/index.ejs`),
          templateParameters: {
            ...page,
            env: process.env.NODE_ENV,
            cssBundleFile: `/bundles/${page.bundleName}-${version}.bundle.css`,
            jsBundleFile: `/bundles/${page.bundleName}-${version}.bundle.js`,
            mediaFiles
          }
        })
      )),
    ...(process.env.NODE_ENV === 'production' ? [
      new ImageminPlugin({
        pngquant: {
          quality: '95-100'
        }
      })
    ] : []),
    new webpack.DefinePlugin({
      'global.ENV': JSON.stringify(process.env.NODE_ENV),
      'global.LOCATION_ORIGIN': JSON.stringify(process.env.LOCATION_ORIGIN)
    })
  ],
  output: {
    filename: `[name]-${version}.bundle.js`,
    chunkFilename: `[id]-${version}.chunk.js`,
    path: path.resolve(__dirname, '../dist/bundles/'),
    publicPath: '/bundles/',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devServer: {
    host: '0.0.0.0',
    port: 5000,
    publicPath: '/bundles/',
    contentBase: path.resolve(__dirname, '../dist/'),
    inline: true,
    hot: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}
