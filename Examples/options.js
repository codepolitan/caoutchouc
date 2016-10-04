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

  return {

    view: {

    },

    list: {

    },

    form: {

    },

    tree: {

    },

    container: {

    },

    container: {

    },

    tab: {

    },

    window: {
      title: 'Title',
      message: 'Message'
    },

    dialog: {

    },

    prompt: {

    },


    text: {

    },

    component: {

    },

    progress: {

    },

    binding: {

    },

    button: {

    },

    upload: {

    },

    color: {

    },

    date: {

    },

    'button-menu': {

    },

    choice: {

    },

    search: {

    },

    border: {

    },

    context: {

    },

    toolbar: {

    },

    layout: {
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
      }
    }

  };

}));
