const path = require('path');
const webpack = require('webpack');
// 压缩js
const uglifyplugin = require('uglifyjs-webpack-plugin');
// 分离css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 处理html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 去除多余css 配合 purify-css
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');

// 打包静态资源目录
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./config');

const Prodwebpack = Object.assign({}, config, {
  // 插件 用于生产模板和各项功能
  plugins: [
    // 优化vendors 抽离重复模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // 配置第三方库 不需要直接在项目里引用
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      ReactRouterDom: 'react-router-dom',
    }),
    // 压缩js
    new uglifyplugin(),
    // html
    new HtmlWebpackPlugin({
      minify: {
        // 去掉属性的引号
        removeAttributeQuotes: true
      },
      // hash值
      hash: true,
      template: 'src/index.html'
    }),
    // 分离css
    new ExtractTextPlugin('public/css/index.css'),
    // 去除多余的css
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, '../src/*.html'))
    }),
    // 配置打包文件上的注释
    new webpack.BannerPlugin('版权所有，翻版请注明出处'),
    // 静态资源打包
    new CopyWebpackPlugin([{
      // 静态资源目录地址
      from: path.join(__dirname, '../src/public/image'),
      // 复制到哪个文件夹
      to: './image'
    }])
  ]
})

module.exports = Prodwebpack;