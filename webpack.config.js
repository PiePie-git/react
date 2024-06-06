const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
      historyApiFallback: true,
      compress: true,
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
