'use strict';

var webpack = require('webpack');
var entry = require('./source');
//entry.vendor = ['debug'];

module.exports = {
  context: __dirname + '/source',

  entry: entry,

  output: {
    path: 'dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ui/[name]',
    umdNamedDefine: true
  },

  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('index', 'index.js', null, 2),
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: __dirname + '/node_modules',
      include: __dirname + '/source'
    }, {
      test: __dirname + '/vendor/mootools-pack/iMask',
      loader: 'exports?iMask'
    }, {
      test: __dirname + '/vendor/mootools-pack/DatePicker',
      loader: 'exports?Picker'
    }]
  },

  //debug: true,
  //devtool: 'eval',

  resolve: {
    modulesDirectories: ['source'],
    alias: {
      vendor: __dirname + '/vendor',
      imask: 'vendor/mootools-pack/iMask/iMask-lib',
      'languages-en': 'vendor/minimal-languages/src/control/en',
      'languages-fn': 'vendor/minimal-languages/src/control/fr',
      mustache: 'vendor/mustache.js/mustache',
      utils: 'vendor/minimal-utils/src',
      ScrollSpy: 'vendor/ScrollSpy/Source/ScrollSpy',
      DatePicker: 'vendor/mootools-pack/DatePicker',
      moment: 'vendor/moment/min/moment-with-langs',
      moment_fr: 'vendor/moment/lang/fr',
      moment_de: 'vendor/moment/lang/de',
      scriptjs: 'vendor/script.js/dist/script'
    }
  }

};
