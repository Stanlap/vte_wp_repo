const PATHS = require('./globals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    chat: `${PATHS.pre_js}/chat_2.js`,
    date_manager: `${PATHS.pre_js}/general/date_manager.js`,
    login: `${PATHS.pre_js}/login.js`,
    main: `${PATHS.pre_js}/main.js`,
    regist: `${PATHS.pre_js}/regist.js`,
    vte_user_profile: `${PATHS.pre_js}/vte_watch/vte_user_profile.js`,
    vte_patient_profile: `${PATHS.pre_js}/vte_watch/vte_patient_profile.js`,
    vte_reference: `${PATHS.pre_js}/vte_watch/vte_reference.js`,

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
      filename: 'prog_list.html',
      template: `${PATHS.pre}/prog_list.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'regist.html',
      template: `${PATHS.pre}/regist.ejs`,
      chunks: ['main', 'regist']
    }),

    // vte_watch

    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_patient_profile.html`,
      template: `${PATHS.pre}/vte_watch/vte_patient_profile.ejs`,
    date_manager: `${PATHS.pre_js}general/date_manager.js`,
      chunks: ['main', 'date_manager', 'vte_patient_profile']
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_user_profile.html`,
      template: `${PATHS.pre}/vte_watch/vte_user_profile.ejs`,
      chunks: ['main','vte_user_profile']
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_reference.html`,
      template: `${PATHS.pre}/vte_watch/vte_reference.ejs`,
      chunks: ['main','vte_reference'],
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_scales.html`,
      template: `${PATHS.pre}/vte_watch/vte_scales.ejs`,
      chunks: ['main','vte_reference'],
      minify: false

    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_outer_ref.html`,
      template: `${PATHS.pre}/vte_watch/vte_outer_ref.ejs`,
      chunks: ['main','vte_reference'],
      minify: false

    }),
  ]
}