require.config({
  paths: {
    ui: '../dist/caoutchouc',
    app: './app',
    dist: '../dist',
  },
  shim: {
    app: {
      deps: ['ui']
    },
    ui: {
      deps: [
        //'dist/vendor',
        'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.5.2/mootools-core.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/mootools-more/1.5.2/mootools-more.js'
      ]
    },
    'https://cdnjs.cloudflare.com/ajax/libs/mootools-more/1.5.2/mootools-more.js': {
      deps: [
        'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.5.2/mootools-core.min.js'
      ]
    }
  }
});

require(['app'], function(App) {
  new App();
});
