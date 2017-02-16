import { resolve } from 'path'
import webpack from 'webpack'

export default {
  devtool: 'inline-source-map',

  entry: {
    'index': './src/index',
    'option': './src/option/option',
  },

  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist/javascripts'),
  },

  resolve: {
    extensions: [ '.js', '.jsx' ],
  },

  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        include: resolve(__dirname, 'src'),
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        include: resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader?importLoader=1&modules&localIdentName=[name]-[local]',
        ],
      },
    ],
  },
};
