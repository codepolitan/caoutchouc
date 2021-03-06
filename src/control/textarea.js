import Field from './field';

const _log = __debug('ui-textarea');

/**
 * @example
 * var textarea = new UI.Textarea({
 *   name : 'myTextarea',
 *   value : 'Hello world!'
 * }).inject(document.body);
 */
export default new Class({

  Extends: Field,

  options: {
    name: 'ui-input',
    value: '',
    binding: {
      _list: ['input', 'button'],
      input: {
        'input.mousedown': '_onMouseDown',
        'input.keydown': '_updateInk',
        'input.keyup': '_updateInk'
      },
      button: {
        //'button.press': '_onButtonPress'
      }
    }
  },


  /**
   * [_initInput description]
   * @return {[type]} [description]
   */
  _initInput: function() {
    _log.debug('_initInput');
    var opts = this.options;

    var input = this.input = new Element('textarea', {
      name: opts.name,
      placeholder: opts.text,
      type: opts.type,
      value: opts.value
    }).inject(this.element);

    if (this.readonly) {
      this.input.set('readonly', true);
      this.input.set('tabeindex', '-1');
    }

    if (opts.klss) {
      this.input.addClass(opts.klss);
    }

    this._initAutogrow(input);
  },


  /**
   * [_initAutogrow description]
   * @param  {[type]} input [description]
   * @return {[type]}       [description]
   */
  _initAutogrow: function(input) {
    clearTimeout(this.autogrowTimeout);

    this.autogrowTimeout = setTimeout(function() {
      var autogrow = new Form.AutoGrow(input, {
        minHeightFactor: 1
      });
      input.store('autogrow', autogrow);

      input.addEvent('focus', function() {
        autogrow.resize();
      });
    }, 200);
  },

  /**
   * @return {[type]} [description]
   */
  _updateInk: function(e) {
    //_log.debug('_updateInk');

    if (this.readonly) {
      e.stop();
      return;
    }

    if (this._setInk) {
      this._setInk(1);
    }
  },

  /**
   * [_initEvents description]
   * @return {[type]} [description]
   */
  _initEvents: function() {
    this.parent();

    this.addEvents({
      blur: this.setState.bind(this, 'default'),
      focus: this.setState.bind(this, 'focus')
    });
  }

});
