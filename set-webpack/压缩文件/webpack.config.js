/**
 * 参考：
 * http://www.zyiz.net/tech/detail-97333.html
 * 
 */


// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
module.exports = {
  entry: { //入口配置
    index: './src/three.js',
    // ctrl: './ctrls/ctrl.js'
  },
  // 这里[]里的name就是app和search也就是entry里的key值
  //  这里[hash:5]会随机生成一个版本号作为你的打包js版本
  //  建议最后一次打包才加上.[hash:5] 否则每次打包都同一个文件都会生成新的版本号不同的文件
  output: { //出口配置
    // filename: '[name].[hash:5].js',
    filename: '[name].js',
    path: __dirname + '/dist' // 生成新文件的地址
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/, // 处理以.jsx或.js结尾的文件
      use: {
        loader: "babel-loader", // 用babel-loader处理
        options: {
          "presets": [
            ["@babel/preset-env", {
              "targets": {
                "browsers": ["> 1%", "last 2 versions"]
              }
            }]
          ]
        }
      }
    }]
  },
  //html-webpack-plugin生成器通过自动注入所有生成的包为应用程序生成HTML文件
  // plugins: [
  //   new HtmlWebpackPlugin({ // 地址为output对应的path地址dist
  //     template: './src/index.html', //处理模板
  //     filename: '../index.html' //生成模板
  //     // 无chunks参数默认全部注入
  //   }), new HtmlWebpackPlugin({
  //     template: './src/a.html', //处理模板
  //     filename: '../views/view1.html', //生成模板
  //     chunks: ['index'] // 只引入index.js
  //   })
  // ]
}