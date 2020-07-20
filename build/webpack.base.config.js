


const PATHS = require('./globals');

const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {

  externals: {
    paths: PATHS
  },
  output: {
    path: `${PATHS.dist}/`,
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  target: 'web',
  devtool: 'source-map',

  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-templates-loader',
          options: {
            beautify: true
          }
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.css$/,
        use:[MiniCssExtractPlugin.loader, 'css-loader']
      }
      // {
      //   test: /\.css$/,
      //   use:['style-loader', 'css-loader']
      // }
    ]
  },


  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new CleanWebpackPlugin(),
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
      filename: 'main.html',
      template: './src/html/main.ejs',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutUs.html',
      template: './src/html/aboutUs.ejs',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/html/login.ejs',
      chunks: ['main','login']
    }),
    new HtmlWebpackPlugin({
      filename: 'chat.html',
      template: './src/html/chat.ejs',
      chunks: ['main','chat']
    }),
    new HtmlWebpackPlugin({
      filename: 'regist.html',
      template: './src/html/regist.ejs',
      chunks: ['main','regist']
    }),
  ]

}