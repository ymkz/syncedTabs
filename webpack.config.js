const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    'app': './src/app',
    'option': './src/option',
  },

  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist/javascripts'),
  },

  resolve: {
    extensions: [ '.js' ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[name]-[local]',
          'postcss-loader',
        ],
      },
    ],
  },
};
