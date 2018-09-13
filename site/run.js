/* eslint import/no-extraneous-dependencies: ["off"] */

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack({
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index-jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, '../site'),
          path.join(__dirname, '../src'),
          path.join(__dirname, '../libs')
        ]
      },
      // Compile .tsx?
      {
        test: /\.(ts|tsx)$/,
        include: path.join(__dirname, '../src'),
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.+)?$/,
        loader : 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif)(\?.+)?$/,
        loader : 'url-loader'
      },
      {
        test: /\.md$/,
        loader : 'raw-loader'
      }
    ]
  }
}), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3001, 'localhost', error => {
  if (error) {
    throw error;
  }
});
