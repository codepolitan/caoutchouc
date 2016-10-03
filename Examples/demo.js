/**
 * Demo App
 * @class App.Demo
 * @extends {App.Demo}
 * @author Jerome Vial
 */
'use strict';

//define(function(require, exports, module) {
(function() {

  //var UI = require('ui');
  var UI = window.caoutchouc;
  var Binding = UI.binding;
  var Toolbar = UI.toolbar;
  var Container = UI.container;
  var Layout = UI.layout;

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
      var el = document.getElementById('mySidenav');
      document.getElementById("main").style.marginLeft = "250px";
      el.style.width = '250px';
      el.addEventListener('click', function(ev) {
        var name = ev.target.dataset.name;

        new UI[name]({
          theme: 'dark',
          container: document.getElementById('main'),
          node: {
            _name: 'three',
            _list: ['navi', 'list', 'info'],
            _axis: 'x',
            info: {
              flex: '1'
            },
            navi: {
              theme: 'dark'
            }
          },
          settings: {}
        });
        console.log('---', name);
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

}());
//});
