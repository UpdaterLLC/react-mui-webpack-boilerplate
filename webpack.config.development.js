'use strict';

var webpack = require('webpack');
var config = require('./webpack.config.base.js');

if (process.env.NODE_ENV !== 'test') {
  config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  ].concat(config.entry);
}

config.devtool = '#inline-source-map';

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin()
]);

config.module.loaders = config.module.loaders.concat([
  {test: /\.jsx?$/, loaders: [ 'react-hot', 'babel'], exclude: /node_modules/},
  {test: /\.js?$/, loaders: [ 'react-hot', 'babel'], include: /node_modules\/react-googlemaps/}
]);

module.exports = config;
