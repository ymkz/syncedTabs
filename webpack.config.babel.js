import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'

export default {
  devtool: 'inline-source-map',

  entry: './src/index',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: [ '', '.js', '.jsx' ],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],

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
        loaders: [ 'style', 'css?modules&localIdentName=[name]-[local]', 'postcss' ],
      },
    ],
  },

  postcss: [
    autoprefixer,
  ],
}
