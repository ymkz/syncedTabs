const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  stats:  'minimal',

  entry: {
    'app': './src/app',
    'option': './src/option',
  },

  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist/javascripts'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, './src'),
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        include: resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]',
            }
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.png$/,
        include: resolve(__dirname, 'src'),
        use: [
          'url-loader',
        ],
      },
    ],
  },
};
