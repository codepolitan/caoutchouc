'use strict';

var webpack = require('webpack');

module.exports = {
  context: __dirname + '/source',

  entry: {
    caoutchouc: 'index.js',
    //vendor: ['debug']
  },

  output: {
    path: 'dist/',
    filename: 'caoutchouc.js',
    libraryTarget: 'umd',
    library: 'caoutchouc'
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    //new webpack.optimize.CommonsChunkPlugin('shared', 'shared.js', null, 2)
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: __dirname + '/node_modules',
      include: __dirname + '/source'
    }]
  },

  //debug: true,
  //devtool: 'eval',

  resolve: {
    modulesDirectories: ['source'],
    alias: {
      vendor: __dirname + '/vendor',
      'languages-en': 'vendor/minimal-languages/src/control/en',
      'languages-fn': 'vendor/minimal-languages/src/control/fr',
      mustache: 'vendor/mustache.js/mustache',
      utils: 'vendor/minimal-utils/src',
      ScrollSpy: 'vendor/ScrollSpy/Source/ScrollSpy',
      DatePicker: 'vendor/mootools-pack/DatePicker',
      moment: 'vendor/moment/min/moment-with-langs',
      moment_fr: 'vendor/moment/lang/fr',
      moment_de: 'vendor/moment/lang/de'
    }
  }

};
