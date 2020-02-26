const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// CleanWebpackPlugin 中文文档未更新
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }

  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"]
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: ["file-loader"]
  //     }
  //   ]
  // }
};
