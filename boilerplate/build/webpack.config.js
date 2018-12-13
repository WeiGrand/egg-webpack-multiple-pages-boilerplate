'use strict';

const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const getEntry = require('./get-entry');

const entry = getEntry();

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  const output = devMode ? {
    publicPath: 'http://localhost:8080/',
    filename: 'js/[name].js',
  } : {
    publicPath: '/public/',
    path: path.resolve(__dirname, '..', 'app/public'),
    filename: 'js/[name].[hash].js',
  };

  return {
    entry,

    output,

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
    },

    plugins: [
      new AssetsPlugin({
        filename: 'assets.json',
        prettyPrint: true,
        useCompilerPath: true,
      }),
    ],
  };
};
