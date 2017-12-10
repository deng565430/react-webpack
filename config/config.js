const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const Vendors = require('./ddl.config');
// 分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: config.devtool, // 配置生成Source Maps，选择合适的选项
  // 入口文件
  entry: {
    app: path.join(__dirname, '../src/app.js'),
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  // 不处理依赖的库
  externals: Vendors,
  // 编译生成文件
  output: {
    // 打包路径
    path: path.join(__dirname, '../build/'), // 打包后的文件存放的地方
    // 静态资源目录。 可以用线上地址 https://public/
    publicPath: config.publicPath,
    filename: 'public/js/[name].[hash:5].js', // 打包后输出文件的文件名
    libraryTarget: 'umd'
  },
  // 模块
  module: {
    // 规则
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
            // 添加webkit前缀  配合 autoprefixer
            'postcss-loader'
          ]
        })
        // include 哪些文件进行处理 exclude 哪些不需要处理 query 额外配置项
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 200,
            outputPath: 'public/image/'
          }
        }]
      },
      {
        // 匹配html里面引入的图片
        test: /\.(htm|html)$/i,
        use: ['html-withimg-loader']
      },
      {
        test: /\.less$/,
        // 分离less
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          },
            // 添加webkit前缀  配合 autoprefixer
            'postcss-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(jsx|js)/,
        use: [{
          loader: 'babel-loader'
        }],
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  // 配置webpack开发服务功能
  devServer: {
    // 设置基本目录结构 服务哪里的代码 这里是public下面的
    contentBase: path.join(__dirname, '../build'),
    // 服务器的IP地址， 可以使用IP也可以使用localhost
    host: 'localhost',
    // 服务端压缩是否开启
    compress: true,
    // 配置服务端口
    port: config.port
  },
  // 监测代码自动打包
  watchOptions: {
    // 监测时间
    poll: 1000,
    // 防止重复按键打包  延时
    aggregateTimeout: 500,
    // 排除的文件
    ignored: /node_modules/ 
  }
}