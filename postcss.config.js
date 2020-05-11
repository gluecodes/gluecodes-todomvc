module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: [
        'last 2 versions',
        'safari >= 10',
        'IE >= 11'
      ]
    },
    cssnano: {}
  }
}
