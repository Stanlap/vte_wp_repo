const PATHS = require('./globals');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: `${PATHS.pre_js}/main.js`,
    login: `${PATHS.pre_js}/login.js`,
    chat: `${PATHS.pre_js}/chat_2.js`,
    regist: `${PATHS.pre_js}/regist.js`,
  },
  output: {
    path: `${PATHS.dist}/`,
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: []
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{
          from: 'favicon.ico',
          from: `${PATHS.src}/img`,
          to: `${PATHS.dist}/public/img`
        },
        {
          from: `${PATHS.src}/js/back_js`,
          to: `${PATHS.dist}/back_js`
        },
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'about_us.html',
      template: `${PATHS.pre}/about_us.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'chat.html',
      template: `${PATHS.pre}/chat.ejs`,
      chunks: ['main', 'chat']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: `${PATHS.pre}/login.ejs`,
      chunks: ['main', 'login']
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: `${PATHS.pre}/main.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'main_auth.html',
      template: `${PATHS.pre}/main_auth.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'profile.html',
      template: `${PATHS.pre}/profile.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'prog_list.html',
      template: `${PATHS.pre}/prog_list.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'programs.html',
      template: `${PATHS.pre}/programs.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'regist.html',
      template: `${PATHS.pre}/regist.ejs`,
      chunks: ['main', 'regist']
    }),
  ]
}