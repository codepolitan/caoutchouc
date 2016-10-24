'use strict';

var webpack = require('webpack');

// get entry and chunks
var entry = {};
var chunks = [];
var fs = require('fs');
var data = fs.readFileSync('./src/index.js', 'utf8');
data = data.split(/['']/);
data.pop();
data.map(function(obj, idx) {
  if (obj.indexOf('export') === -1) {
    var file = obj;
    var key = data[idx - 1].split('as ')[1].split('\n')[0];
    entry[key] = [file];
    chunks.push(key);
  }
});

console.log('entry', entry);

var commonConfig = {
  context: __dirname + '/src',

  entry: entry,

  output: {
    path: 'dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: ['caoutchouc', '[name]'],
    umdNamedDefine: true
  },

  externals: {
    moment: 'moment',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index',
      filename: 'index.js',
      //minChunks: Infinity,
      chunks: chunks,
    }),
    //new webpack.optimize.UglifyJsPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: __dirname + '/node_modules',
      include: __dirname + '/src',
      query: {
        presets: ['es2015']
      }
    }, {
      test: __dirname + '/vendor/mootools-pack/iMask',
      loader: 'exports?iMask'
    }, {
      test: __dirname + '/vendor/mootools-pack/DatePicker',
      loader: 'exports?Picker'
    }, {
      test: __dirname + '/vendor/mootools-pack/iMask/iMask-lib',
      loader: 'exports?Imask=imask'
    }]
  },

  //debug: true,
  //devtool: 'eval',

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['.jsx', '.js', ''],
    alias: {
      vendor: __dirname + '/vendor',
      'minimal-languages': 'vendor/minimal-languages/dist',
      'minimal-utils': 'vendor/minimal-utils/dist/minimal-utils',
      'minimal-binding': 'vendor/minimal-binding/dist/minimal-binding',
      'js-debugger': 'vendor/js-debugger/dist/js-debugger',
      mustache: 'vendor/mustache.js/mustache',
      ScrollSpy: 'vendor/ScrollSpy/Source/ScrollSpy',
      moment: 'vendor/moment/min/moment-with-langs',
      moment_fr: 'vendor/moment/lang/fr',
      moment_de: 'vendor/moment/lang/de',
      scriptjs: 'vendor/script.js/dist/script',
      imask: 'vendor/mootools-pack/iMask/iMask-lib',
      DatePicker: 'vendor/mootools-pack/DatePicker',
    }
  }
};

module.exports = [
  Object.assign({}, commonConfig, {
    name: ''
  }),
  Object.assign({}, commonConfig, {
    name: 'all',

    entry: ['index.js'],

    output: {
      path: 'dist/',
      filename: 'caoutchouc.js',
      libraryTarget: 'umd',
      library: 'caoutchouc',
      umdNamedDefine: true
    },

    plugins: []
  })
];
