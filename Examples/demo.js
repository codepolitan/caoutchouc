/**
 * Demo App
 * @class App.Demo
 * @extends {App.Demo}
 * @author Jerome Vial
 */
'use strict';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.returnExports = factory();
  }
}(this, function() {

  var UI = window.caoutchouc || require('ui');
  var Binding = UI.binding;
  var Toolbar = UI.toolbar;
  var Container = UI.container;
  var Layout = UI.layout;
  var opts = require('./options');
  var marked = require('marked');

  console.log('marked', marked);

  var App = new Class({

    Implements: [Options, Events, Binding, Toolbar],

    name: 'contacts',

    options: {
      container: $(document.body),
      toolbar: {
        list: ['view', 'info', 'desk'],
        view: {
          container: 'head',
          section: 'top',
          list: ['navi']
        },
        info: {
          container: 'head',
          section: 'top',
          list: ['title'],
          title: {
            clss: 'ui/component/text'
          }
        },
        desk: {
          container: 'head',
          section: 'top',
          list: [
            //'talk',
            'notification',
            //'desktop',
            //'favorite',
            'apps',
            //'settings',
            'user'
          ]
        }
      },
      layout: {
        _name: 'standard',
        _list: ['navi', 'main', 'side'],
        main: {
          flex: '1'
        },
        navi: {
          theme: 'dark'
        }
      },
      binding: {
        'control.navi': 'test'
      }
    },

    /**
     * initialize
     * @return {Object} The Class instance
     */
    initialize: function(options) {
      this.setOptions(options);

      //this.build();
      document.getElementById('main').style.marginLeft = '250px';
      var el = document.getElementById('navi');
      el.style.width = '250px';

      for (var c in UI) {
        el.innerHTML = el.innerHTML + '<a data-name="' + c + '">' + c + '</a>';
      }

      el.addEventListener('click', function(ev) {
        var name = ev.target.dataset.name;
        new UI[name](opts[name]);
      });
      //this._initBinding();

      console.log(this);

      return this;
    },

    /**
     * [build description]
     * @return {[type]} [description]
     */
    build: function() {
      console.log('build app');

      this.container = new Container({
        klass: 'container-desk',
        comp: ['head', 'body']
      }).inject(this.options.container);

      this.layout = new Layout({
        theme: 'dark',
        container: this.container.body,
        node: this.options.layout
      });

      this._initToolbar(this.options.toolbar);
    }
  });

  new App();

}));
