const path = require('path');
const webpack = require('webpack');
// 分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 处理html
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

const Devwebpack = Object.assign({}, config,  {
  // 插件 用于生产模板和各项功能
  plugins: [
    // 配置第三方库 不需要直接在项目里引用
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    // html
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 分离css
    new ExtractTextPlugin('public/css/index.css'),
    // 热更新 解决server不能热更新问题
    // new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = Devwebpack;