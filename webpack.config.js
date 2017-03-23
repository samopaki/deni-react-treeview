var path = require('path');
var webpack = require('webpack');

var entry = ['./examples/index.js'];

if (process.env.NODE_ENV === 'development') {
  entry = entry.concat([
    'webpack-dev-server/client?http://localhost:3005/examples',
    'webpack/hot/only-dev-server',
  ]);
}

module.exports = {
  devtool: 'eval',
  entry: entry,
  output: {
    path: path.join(__dirname, 'examples'),
    filename: 'bundle.js',
    publicPath: '/examples/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, './node_modules/react-icons/md'), path.resolve(__dirname, './node_modules/react-icons/fa')],
        // query: {
        //   presets: ['es2015', 'react']
        // }
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /build|lib|node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /build|lib|node_modules/,
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      }
    ],
  },
};
