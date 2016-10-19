/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */
var moment = require('moment');
var Button = require('control/button');
var Field = require('control/field');

var _log = __debug('view:form-comments');

module.exports = new Class({

  /**
   * [_initComments description]
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @return {[type]}       [description]
   */
  _initComments: function(field, doc, group) {
    var self = this;


    if (!doc[field.name]) doc[field.name] = [];

    doc[field.name].each(function(comment, i) {
      self.injectComment(field, doc, group, comment, i);
    });

    var addBtn = new Button({
      icon: 'fa-plus-circle',
      name: 'add',
      type: 'icon-text',
      text: 'Ajouter comment...',
      emit: 'addComment',
      klss: 'inline'
    }).inject(group).addEvent('addComment', function() {
      _log.debug(field.name);
      self.addComment(field, doc, group);
    });
  },

  /**
   * [injectComment description]
   * @param  {[type]} field   [description]
   * @param  {[type]} doc     [description]
   * @param  {[type]} group   [description]
   * @param  {[type]} comment [description]
   * @param  {[type]} i       [description]
   * @param  {[type]} add     [description]
   * @return {[type]}         [description]
   */
  injectComment: function(field, doc, group, comment, i, add) {
    var self = this;

    var context = {
      el: group,
      pos: 'bottom'
    };

    if (add) {
      var elements = group.getChildren();

      context = {
        el: elements[elements.length - 1],
        pos: 'before'
      };
    }


    var line = new Element('div', {
      'class': 'comment-list',
      styles: {
        position: 'relative'
      }
    }).inject(context.el, context.pos);

    var label = new Element('label', {
      'class': ''
    }).inject(line);


    var user = new Element('span', {
      html: doc[field.name][i].user,
      'class': 'info-user'
    }).inject(label);


    var d = moment(doc[field.name][i].date).fromNow();

    var date = new Element('span', {
      html: d,
      'class': 'info-date'
    }).inject(label);

    //_log.debug(date);
    var text = new Field({
      type: 'text',
      name: field.name,
      text: 'text',
      value: doc[field.name][i]['text'],
      useTextAsLabel: self.options.useTextAsLabel
    }).inject(line).addClass();

    text.input.addEvents({
      keyup: function(ev) {
        _log.debug('keyup', i, field.name + '.' + i + '.text', this.get('value'));
        self.doc[field.name][i]['text'] = this.get('value');

        self.fireEvent('change', [field.name + '.' + i + '.text', this.get('value')]);
      }
    });


    if (add)
      text.input.focus();


    /*
        var removeBtn = new Button({
          icon: 'icon-remove-sign',
          name: 'remove',
          idx: i,
          type: 'icon',
          emit: 'removeDate',
        }).inject(line).addEvent('click', function(){
          _log.debug(field.name, this.options.idx);
          self.removeDate(field, doc, group, this.options.idx, line);
        }).addClass('button-remove');
    */
    /*new Picker.Date(end.input, {
        timePicker: true,
        positionOffset: {x: 5, y: 0},
        pickerClass: 'datepicker_dashboard',
        useFadeInOut: !Browser.ie
      });
  */

  },

  /**
   * [addComment description]
   * @param {[type]} field [description]
   * @param {[type]} doc   [description]
   * @param {[type]} group [description]
   */
  addComment: function(field, doc, group) {
    _log.debug('add date', field, doc);

    var user = this.options.user;

    var comment,
      value = this.doc.comments || [],
      i = 0;

    if (doc.comments && doc.comments.length > 0) {
      i = doc.comments.length;
      comment = {
        "date": new Date().toJSON(),
        "user": user.name,
        'text': ''
      };
      value.push(comment);

      _log.debug(doc);
    } else {
      var d = new Date().toJSON();

      comment = {
        "date": moment().toISOString(),
        "user": user.name,
        'text': ''
      };
      value.push(comment);
    }

    this.doc[field.name] = value;
    this.fireEvent('change', [field.name, value]);
    this.injectComment(field, this.doc, group, comment, i, true);
  },

  /**
   * [removeComent description]
   * @param  {[type]} field [description]
   * @param  {[type]} doc   [description]
   * @param  {[type]} group [description]
   * @param  {[type]} idx   [description]
   * @param  {[type]} line  [description]
   * @return {[type]}       [description]
   */
  removeComent: function(field, doc, group, idx, line) {
    var self = this;

    if (idx === null) return;
    //  delete doc.dates[this.session.eventIndex];

    var i = this.doc.dates.indexOf(this.doc.dates[idx]);
    //_log.debug('--', i);
    if (i !== -1) {
      this.doc.dates.splice(i, 1);
    }

    line.destroy();

    this.doc[field.name] = this.doc.dates;
    this.fireEvent('change', [field.name, this.doc.dates]);

    _log.debug(doc);

  }

});
