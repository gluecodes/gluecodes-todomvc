const path = require('path')

module.exports = [
  {
    test: /\.(ico|svg|ttf|eot|gif)$/,
    exclude: path.resolve(__dirname, '../../dist'),
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: '../images',
          publicPath: '/images/'
        }
      }
    ]
  },
  {
    test: /\.(png|jpe?g)$/,
    exclude: path.resolve(__dirname, '../../dist'),
    use: [
      {
        loader: 'responsive-loader',
        options: {
          name: '[name]-[width]-[hash].[ext]',
          outputPath: '../images',
          publicPath: '/images/',
          placeholder: true
        }
      }
    ]
  },
  {
    test: /\.woff2?$/,
    exclude: path.resolve(__dirname, '../../dist'),
    use: [
      {
        loader: 'url-loader',
        options: {
          outputPath: '../images',
          publicPath: '/images/',
          limit: 10000
        }
      }
    ]
  },
  {
    test: /\.mp4$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: '../videos',
          publicPath: '/videos/'
        }
      }
    ]
  }
]
