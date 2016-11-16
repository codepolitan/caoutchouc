'use strict';

var webpack = require('webpack');
var prod = process.argv.indexOf('-p') !== -1;

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

  devtool: (prod ? undefined : 'eval-source-map'),

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'index',
      filename: 'index.js',
      //minChunks: Infinity,
      chunks: chunks,
    })
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
      test: __dirname + '/node_modules/mootools-pack/DatePicker/Picker.Attach',
      loader: 'imports?Picker=Picker'
    }, {
      test: __dirname + '/node_modules/mootools-pack/DatePicker/Picker.Date',
      loader: 'imports?Picker=Picker'
    }, {
      test: require.resolve(__dirname + '/node_modules/mootools-pack/iMask/iMask-lib'),
      loader: 'expose-loader?iMask!exports?iMask'
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    alias: {
      node_modules: __dirname + '/node_modules',
      'minimal-languages': 'node_modules/minimal-languages/dist',
      'minimal-utils': 'node_modules/minimal-utils/dist/minimal-utils',
      'minimal-binding': 'node_modules/minimal-binding/dist/minimal-binding',
      'js-debugger': 'node_modules/js-debugger/dist/js-debugger',
      mustache: 'node_modules/mustache/mustache',
      ScrollSpy: 'node_modules/ScrollSpy/Source/ScrollSpy',
      moment: 'node_modules/moment/min/moment-with-langs',
      'moment-lang': 'node_modules/moment/lang',
      scriptjs: 'node_modules/scriptjs/dist/script',
      iMask: 'node_modules/mootools-pack/iMask/iMask-lib',
      DatePicker: 'node_modules/mootools-pack/DatePicker',
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
