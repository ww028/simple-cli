const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// CleanWebpackPlugin 中文文档未更新
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.js'
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true,
    overlay:true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash].css",//所有抽离出的样式文件，放进dist下的css目录
      chunkFilename: "css/[name]-[hash].css"
  }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'html-withimg-loader!' + path.resolve('./src', 'index.html'),
      filename: 'index.html'
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [process.env.NODE_ENV=== 'production'? MiniCssExtractPlugin.loader:'style-loader',  'css-loader'],
        // use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [process.env.NODE_ENV=== 'production'? MiniCssExtractPlugin.loader:'style-loader',  'css-loader',  'sass-loader']
        // use: ['style-loader', 'css-loader', 'sass-loader'], 
        // use: [{
        //     loader: "style-loader"
        //   },
        //   {
        //     loader: "css-loader"
        //   },
        //   {
        //     loader: "sass-loader"
        //   }
        // ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "images",
            esModule: false,
          }
        }]
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader'
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: '$'
        }]
      },
    ]
  }
};