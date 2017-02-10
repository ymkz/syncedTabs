import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'

export default {
  devtool: 'inline-source-map',

  entry: {
    'index': './src/index',
    'option': './src/option/option',
  },

  output: {
    path: path.join(__dirname, 'dist/javascripts'),
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },

  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: [ 'style', 'css?importLoader=1&modules&localIdentName=[name]-[local]', 'postcss' ],
      },
    ],
  },

  postcss: [
    autoprefixer,
  ],
}
