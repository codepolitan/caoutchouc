'use strict';

var webpack = require('webpack');

// get entry and chunks
var entry = {};
var chunks = [];
var fs = require('fs');
var data = fs.readFileSync('./src/index.js', 'utf8');
data = data.split('let ');
data.shift();
data.map(function(obj) {
  var key = obj.split(' ')[0];
  var file = obj.split('\'')[1];
  entry[key] = [file];
  chunks.push(key);
});

var commonConfig = {
  context: __dirname + '/src',

  entry: entry,

  output: {
    path: 'dist/',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: ['ui', '[name]'],
    umdNamedDefine: true
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index', // chunk name
      filename: 'index.js', // filename of the commons chunk
      //minChunks: Infinity, // modules must be shared between * entries
      chunks: chunks, // only use these entries
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
    }]
  },

  //debug: true,
  //devtool: 'eval',

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['.jsx', '.js', ''],
    alias: {
      vendor: __dirname + '/vendor',
      debug: 'vendor/minimal-debug/dist/debug',
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

module.exports = [
  Object.assign({}, commonConfig, {
    name: ''
  }),
  Object.assign({}, commonConfig, {
    name: 'all',

    entry: 'index.js',

    output: {
      path: 'dist/',
      filename: 'all.js',
      libraryTarget: 'umd',
      library: 'ui',
      umdNamedDefine: true
    },

    plugins: []
  })
];
