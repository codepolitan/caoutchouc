/**
 * Textarea View Form Class
 * @implement View.Form.Textarea
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

  var TextareaControl = require('ui/control/textarea');

  var _log = __debug('view-core-form-textarea').defineLevel();

  var Textarea = new Class({

    options: {
      codeeditor: {
        gutter: true,
        lineNumbers: true,
        indentWithTabs: true,
        indentUnit: 4,
        fixedGutter: true,
        theme: 'twilight',
        mode: 'text/html',
        lineWrapping: true,
        dragDrop: false,
      },

      ckeditor: {
        customConfig: '/vendor/minimal-ckeditor/minimal.js',
        allowedContent: 'table; tr; td; th; strong; em; pre; label; form[id]; select[name]; options[value]; input[name,type,value](*); h1; h2; h3; h4; i; p[*](*); div[*](*); span[*](*); a[!href](*); ul(*); li{text-align}(*); img[alt,!src]{width,height}(*)',
        extraPlugins: 'sharedspace', //image,forms,image,forms,sourcearea,insertpre',
        removePlugins: 'floatingspace, resize, spellchecker, pastefromword, pastetext, specialchar, scayt, about',
        removeButtons: 'Templates,NewPage,Anchor,Subscript,Superscript',
        sharedSpaces: {
          top: 'ck-toolbar'
        }
      }
    },

    /**
     * Initialie textarea
     *
     * @param  {Object} field
     * @param  {Object} doc
     * @param  {DOMElement} group
     * @return {void}
     */
    _initTextarea: function(field, doc, group) {
      _log.debug('_initTextarea', field, doc, group);

      var self = this;
      var input;

      if (field.mode === 'html') {
        if (!window.CKEDITOR) {
          this._initCKEDITOR(field, doc, group);
          return;
        }

        input = this._initHTMLInlineInput(field, doc[field.name], group);
        this.field[field.name] = input;
        if (!this.readonly) {
          this._initHTMLInlineField(input);
        }
        return;
      }

      var value = this.getValueFromKey(field.name, doc);

      if (!value && field.default) {
        value = field.default;
        this.updateDocKey(field.name, value);
      }

      var read = this.isReadOnly(field);

      input = new TextareaControl({
        'class': 'txt',
        name: field.name,
        text: field.text,
        value: value,
        read: read
      }).inject(group);

      if (field.klss) {
        input.addClass(field.klss);
      }

      // //if (field.autogrow) {
      // 	this.autogrowField = this.autogrowField || [];
      // 	this.autogrowField.push(input);
      // 	this._initAutogrow(input);
      // //}

      this.field[field.name] = input;

      if (field.mode === 'code') {
        input.addClass('field-edit');
        this._initCodeField(field, input.input);
      } else {
        input.input.addEvents({
          focus: function() {
            //self.focus = this;
            self.fireEvent('focus');
          },
          keyup: function() {

            input.setError(null);

            self.updateDocKey(this.get('name'), this.get('value'));

            self.fireEvent('change', [this.get('name'), this.get('value')]);
          }
        });
      }
      //var myCodeMirror = CodeMirror.fromTextArea(input.input);
    },

    _initCKEDITOR: function(field, doc, group) {
      _log.debug('_initCKEDITOR');

      var self = this;

      require(['/vendor/ckeditor/ckeditor.js'], function() {
        self._initTextarea(field, doc, group);
      }, function(err) {
        _log.error(err);
      });
    },

    /*_initHTMLField: function(field, textarea) {
      var self = this;

      _log.debug('_initHTMLField', field, textarea);

      var container = textarea.getParent();
      var iframe = '';

      var tev;

      this.ckeditor = this.ckeditor || {};

      _log.debug(field.name);

      var cke = CKEDITOR.replace(textarea, {
        allowedContent: true,
        //removePlugins: 'toolbar',
        customConfig: this.options.ckeditor.customConfig,
        extraPlugins: 'justify,image,forms',
        removePlugins: 'floatingspace,resize',
        width: '100%',
        //ntentsCss : 'body {overflow:hidden;}',
        on: {
          focus: function() {
            self.cke = textarea;
            iframe.addClass('cke_iframe_focus');
          },
          blur: function() {
            iframe.removeClass('cke_iframe_focus');
            //self._updateHTMLField(textarea);
          },
          instanceReady: function(ev) {
            tev = ev.editor;
            //_log.debug('instanceReady', ev.editor);
            textarea.store('cke', ev.editor);
            iframe = container.getElement('iframe');
            self.ckeditorInstances.push(ev.editor);
          }
        }
      });

      var editor = CKEDITOR.instances[cke.name];

      this.ckeditor[field.name] = editor;

      /*this.ckeInstances = this.ckeInstances ||  [];

      this.ckeInstances.push(editor);*

      editor.on('change', function() {
        self.updateDocKey(field.name, textarea.get('value'));

        self.fireEvent('change', [textarea.get('name'), textarea.get('value')]);
        self._updateHTMLField(textarea);
      });
    },*/

    /**
     * Initialize html field using CKEDITOR.inline
     * @param  {DOMElement} input
     * @return {void}
     */
    _initHTMLInlineField: function(input) {
      _log.debug('_initHTMLInlineField', input);

      var self = this;
      var ckeditor = this.options.ckeditor;

      input.setAttribute('contenteditable', 'true');

      if (!this.ckeToolbar) {
        this.ckeToolbar = new Element('div', {
          id: 'ck-toolbar',
          class: 'ui-toolbar toolbar-cke'
        }).inject(this.container.head, 'after');
      }

      // Loads the sharedspace plugin from /vendor/sharedspace/
      CKEDITOR.plugins.addExternal('sharedspace', '/vendor/sharedspace/', 'plugin.js');

      CKEDITOR.inline(input, {
        //allowedContent: ckeditor.allowedContent,
        allowedContent: true,
        customConfig: ckeditor.customConfig,
        extraPlugins: ckeditor.extraPlugins,
        removePlugins: ckeditor.removePlugins,
        removeButtons: ckeditor.removeButtons,
        sharedSpaces: ckeditor.sharedSpaces,
        magicline_color: '#ccc',
        //skin: 'minimal',
        on: {
          focus: function() {
            self.ckeToolbar.getElement('div').setStyle('display', 'initial');
          },
          blur: function() {
            self.ckeToolbar.getElement('div').setStyle('display', 'none');
          },
          instanceReady: function(ev) {
            self.cke = ev.editor;
            self.ckeditorInstances.push(ev.editor);
            input.store('cke', ev.editor);

            if (self.ckeToolbar && self.ckeToolbar.getElement('div')) {
              self.ckeToolbar.getElement('div').setStyle('display', 'none');
            }
          },
          change: function() {
            self.fireEvent('change', [input.get('name'), input.get('text')]);
            self._updateHTMLField(input);
          }
        }
      });
    },

    /**
     * Initialize elements for html field
     *
     * @param  {Object} field
     * @param  {string} value
     * @param  {DOMElement} group
     * @return {DOMElement}
     */
    _initHTMLInlineInput: function(field, value, group) {
      _log.debug('_initHTMLInlineInput');

      var fieldEl = new Element('div', {
        'class': 'field-html ui-field'
      }).inject(group);

      new Element('label', {
        for: 'html',
        html: field.name
      }).inject(fieldEl);

      return new Element('div', {
        'class': 'txt',
        'data-key': field.name,
        name: field.name,
        html: value
      }).inject(fieldEl);
    },

    /**
     * Update html field
     *
     * @param  {DOMElement} input [description]
     * @return {void}
     */
    _updateHTMLField: function(input) {
      _log.debug('_updateHTMLField', input);

      var cke = input.retrieve('cke');

      if (cke.checkDirty()) {
        input.set('value', cke.getData());
        this.doc[input.get('name')] = input.get('value');
        this.fireEvent('change', [input.get('name'), input.get('value')]);
        this.cke = false;
      } else {
        this.cke = false;
      }
    },

    /**
     * Destroy ckeditor instances
     *
     * @return {void}
     */
    destroyCkeInstance: function() {
      this.ckeditorInstances = this.ckeditorInstances || [];

      _log.debug('destroyInline', this.ckeditorInstances.length);

      for (var j = 0; j < this.ckeditorInstances.length; j++) {
        var instance = this.ckeditorInstances[j];
        //_log.debug('instance', instance);
        instance.destroy();
        this.ckeditorInstances.splice(j, 1);
      }
    },

    /**
     * Initialize code field
     *
     * @param  {Object} field
     * @param  {DOMElement} textarea
     * @return {void}
     */
    _initCodeField: function(field, textarea) {
      _log.debug('_initCodeField');

      var opts = this.options;
      var self = this;

      if (!window.CodeMirror) {
        this._initCodeMirror(field, textarea);
        return;
      }

      var container = textarea.getParent();

      container.setStyle('height', '100%');

      textarea.addClass('fileeditor-textarea');
      textarea.setStyle('display', 'none');

      if (!this.doc[field.name]) {
        this.doc[field.name] = '';
      }

      var value = this.doc[field.name];

      _log.debug(field);

      field.opts = field.opts || {};

      if (field.opts.mode && field.opts.mode.json) {
        value = JSON.stringify(value, null, 4);
      }

      var mode = {
        name: 'javascript',
        json: true
      };

      if (field.opts.mode) {
        mode = field.opts.mode;
      }

      var codeeditor = {
        value: value,
        mode: mode,
        height: '1000px',
        onChange: function() {
          _log.debug('change', [field.name, this.getValue()]);
        }
      };

      var options = Object.merge(opts.codeeditor, codeeditor);

      var codeMirror = CodeMirror(container, options);

      codeMirror.on('change', function() {
        var val = codeMirror.getValue();
        if (field.opts.mode && field.opts.mode.json) {
          try {
            val = JSON.parse(val);
          } catch (e) {
            val = val;
          }
        }
        //_log.debug('change', textarea.get('name'), val);
        self.doc[textarea.get('name')] = val;
        self.fireEvent('change', [field.name, textarea.get('value')]);
      });
    },

    /**
     * [_initCodeMirror description]
     * @param  {Object} field
     * @param  {DOMElement} textarea
     * @return {void}
     */
    _initCodeMirror: function(field, textarea) {
      var self = this;

      require([
        '/vendor/codemirror/lib/codemirror.js'
      ], function() {
        self._initCodeMirrorPlugIn(field, textarea);
      }, function(err) {
        _log.error(err);
      });
    },

    /**
     * [_initCodeMirrorPlugIn description]
     * @param  {Object} field
     * @param  {DOMElement} textarea
     * @return {void}
     */
    _initCodeMirrorPlugIn: function(field, textarea) {
      var self = this;

      require([
        '/vendor/codemirror/mode/javascript/javascript.js',
        '/vendor/codemirror/mode/htmlmixed/htmlmixed.js'
      ], function() {
        self._initCodeField(field, textarea);
      }, function(err) {
        _log.error(err);
      });
    },

    /**
     * Initialize html field using CKEDITOR.replace
     *
     * @todo Make it work
     */
    /*_initHTMLField: function(field, textarea) {
    	var self = this;

    	_log.debug('_initHTMLField', field, textarea);

    	var container = textarea.getParent();
    	var iframe = '';

    	var tev;

    	this.ckeditor = this.ckeditor || {};

    	_log.debug(field.name);

    	var cke = CKEDITOR.replace(textarea, {
    		allowedContent: true,
    		//removePlugins: 'toolbar',
    		customConfig: '/vendor/ckeditor/minimal.js',
    		extraPlugins: 'justify,image,forms',
    		removePlugins: 'floatingspace,resize',
    		width: '100%',
    		//ntentsCss : 'body {overflow:hidden;}',
    		on: {
    			focus: function() {
    				self.cke = textarea;
    				iframe.addClass('cke_iframe_focus');
    			},
    			blur: function() {
    				iframe.removeClass('cke_iframe_focus');
    				//self._updateHTMLField(textarea);
    			},
    			instanceReady: function(ev) {
    				tev = ev.editor;
    				//_log.debug('instanceReady', ev.editor);
    				textarea.store('cke', ev.editor);
    				iframe = container.getElement('iframe');
    				self.ckeditorInstances.push(ev.editor);
    			}
    		}
    	});

    	var editor = CKEDITOR.instances[cke.name];

    	this.ckeditor[field.name] = editor;

    	editor.on('change', function() {
    		self.fireEvent('change', [textarea.get('name'), textarea.get('value')]);
    		self._updateHTMLField(textarea);
    	});
    },*/

    /*destroyCKEditor: function() {
    	_log.debug('destroyInline', CKEDITOR.instances);
    	for (var name in CKEDITOR.instances) {
    		_log.debug(name);
    		if (CKEDITOR.instances[name])
    			CKEDITOR.instances[name].destroy();
    	}
    }*/

  });

  module.exports = Textarea;

});
