const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // removes everything in the output path (/dist)
    new CleanWebpackPlugin(),
    // adds the hashed script and style output to index.html
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      filename: 'index.html',
      hash: true,
      inject: false,
      template: './public/index.html',
    }),
    // hashes the script?
    new WebpackMd5Hash(),
    // gzips build output
    new CompressionPlugin(),
  ],
};
