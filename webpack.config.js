'use strict';

var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  context: __dirname.replace('/tasks', '') + '/source',

  entry: {
    caoutchouc: './index.js',
    //vendor: ['debug']
  },

  output: {
    path: 'dist/',
    filename: 'caoutchouc.js',
    libraryTarget: 'umd',
    library: 'caoutchouc',
    //umdNamedDefine: true
  },

  plugins: [
    //new webpack.optimize.CommonsChunkPlugin('shared', 'shared.js', null, 2)
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }]
  },

  //debug: true,
  //devtool: 'eval',

  resolve: {
    modulesDirectories: ['source'],
    alias: {
      vendor: '../vendor',
      debug: 'utils/debug',
      'languages-en': 'vendor/minimal-languages/src/control/en.js',
      'languages-fn': 'vendor/minimal-languages/src/control/fr.js',
      mustache: 'vendor/mustache.js/mustache.js',
      moment: 'vendor/moment/min/moment-with-langs',
      moment_fr: 'vendor/moment/lang/fr',
      moment_de: 'vendor/moment/lang/de'
    }
  }

};
