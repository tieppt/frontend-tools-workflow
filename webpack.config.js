const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
// 3rd party plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
});

const config = {
  entry: './src/js/main.js',
  output: {
    // must be absolute path
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'compressed'
              }
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    extractSass
  ]
};

module.exports = config;
