const {
  merge
} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',

  entry: {
    main: './src/index.js',
    login: './src/js/login.js',
    chat: './src/js/chat_2.js',
    regist: './src/js/regist.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: {
          minimize: true
        }
      }]
    }, ]
  }
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})