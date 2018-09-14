/* eslint import/no-extraneous-dependencies: ["off"] */

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const autoprefixer = require('autoprefixer');
const lessToJs = require('less-vars-to-js');
// 方式一，获取自定义样式文件
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, '../themes.less'), 'utf8'));
/*
 * 方式二，读取 package.json 字段上配置的主题样式：
 * 
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
var join = path.join;
var existsSync = require('fs').existsSync;
const pkgPath = join(__dirname, '../package.json');
const pkg = existsSync(pkgPath) ? require(pkgPath) : {};
let themeVariables = {};
if (pkg.theme && typeof(pkg.theme) === 'string') {
  let cfgPath = pkg.theme;
  // relative path
  if (cfgPath.charAt(0) === '.') {
    cfgPath = resolve(args.cwd, cfgPath);
  }
  const getThemeConfig = require(cfgPath);
  themeVariables = getThemeConfig();
} else if (pkg.theme && typeof(pkg.theme) === 'object') {
  themeVariables = pkg.theme;
};
*/

new WebpackDevServer(webpack({
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://galaxyw.317hu.com:3001/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index'
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
        include: [
          path.join(__dirname, '../src'),
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015','stage-2', 'react']
            }
          },
          { 
            loader: require.resolve('ts-loader') 
          }
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(css|less)$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            // options: {
            //   importLoaders: 1,
            // },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: require.resolve("less-loader"),
            options: {
              modifyVars: themeVariables
            }
          },
        ]
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
}).listen(3001, 'galaxyw.317hu.com', error => {
  if (error) {
    throw error;
  }
});
