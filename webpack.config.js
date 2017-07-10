//import resolve from 'path'
const { resolve } = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appDir = resolve(__dirname, 'app')
const publicDir = resolve(__dirname, 'public')

module.exports = {
  entry: `${appDir}/app.js`,
  output: {
    filename: 'bundle.js',
    path: publicDir
  },
  module: {
    rules: [
      {
        //TODO: change to eslint rule once config is established
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,camelCase,localIdentName="[name]_[local]-[hash:base64:6]"'
        })
      }
  ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css"),
    new DashboardPlugin()
  ]
}
