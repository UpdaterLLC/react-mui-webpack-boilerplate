'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base.js');

var SaveAssetsJson = require('assets-webpack-plugin');

config.bail = true;
config.debug = false;
config.profile = false;
config.devtool = '#source-map';

config.output = {
  path: './public',
  pathInfo: true,
  publicPath: '/client/dist/',
  filename: 'bundle.js',
  sourceMapFilename: false
};

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    output: {
      comments: false
    },
    compress: {
      warnings: false,
      screw_ie8: true
    }
  }),
  new SaveAssetsJson({
    path: process.cwd(),
    filename: 'assets.json'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
]);

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: [ 'babel'], exclude: /node_modules/},
  {test: /\.js?$/ , loaders: [ 'babel'], include: /node_modules\/react-googlemaps/},
]);

module.exports = config;
