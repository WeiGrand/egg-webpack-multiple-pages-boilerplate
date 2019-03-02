'use strict';

const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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

  const plugins = [
    new MiniCssExtractPlugin({
      filename: devMode ? "css/[name].css" : "css/[name].[hash].css"
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      prettyPrint: true,
      useCompilerPath: true,
    })
  ];

  if (!devMode) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    );
  }

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
        {
          test: /\.less$/,
          use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {}
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
        },
      ],
    },

    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            test: "vendor",
            name: "vendor",
            enforce: true
          }
        }
      }
    },

    plugins,
  };
};
