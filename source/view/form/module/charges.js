/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */
define(function(require, exports, module) {

  var moment = require('moment');
  var Button = require('ui/control/button');
  var Field = require('ui/control/field');
  var Dialog = require('ui/window/dialog');

  var _log = __debug('view-form-charges');

  module.exports = new Class({

    _initCharges: function(field, doc, group) {
      _log.debug('_initCharges', field.name);
      var self = this;

      var dateFormat = this.options.dateTime.format;

      group.addClass('group-list');
      group.addClass('list-charges');

      //var element = group.getPrevious();
      //var name = element.get('html');

      if (doc.status !== 'assigned')
        new Button({
          tag: 'button',
          icon: 'icon-plus',
          name: 'addCharges',
          type: 'icon',
          klss: 'button-inline',
          text: 'Ajouter charges...',
          emit: 'linkEvents',
        }).inject(group, 'bottom').addEvent('linkEvents', function() {
          //_log.debug(field.name);
          self.fireEvent('linkEvents', field.name);
        });

      var list = new Element('div', {
        'class': 'ui-list form-list list-charges'
      }).inject(group, 'top');

      if (!doc[field.name]) return;

      //this._initChargesHeader(list);

      var item, line;
      var totalTravelTime = 0;
      var totalWorkTime = 0;
      var cost = 0;

      doc[field.name].each(function(info, idx) {
        var diff = '-';
        if (info.dates) {
          var startDate = moment(info.dates.start).format(dateFormat);
          var endDateFormat = 'H:m';
          if (startDate.toLowerCase().slice(-1) === 'm') endDateFormat = 'h:mm A';
          var endDate = moment(info.dates.end).format(endDateFormat);

          diff = moment.utc(moment(info.dates.end).diff(moment(info.dates.start))).format("HH:mm");
        }

        totalTravelTime += parseInt(info.travel_time, 10);
        totalWorkTime += moment.duration(diff).asMinutes();

        info.amount = info.amount || 0;
        cost += parseFloat(info.amount);

        line = new Element('div', {
          class: 'ui-item list-item'
        }).inject(list).addEvents({
          dblclick: function() {
            self.fireEvent('editEvent', [idx, info]);
          }
        });

        var date = startDate + ' to ' + endDate;

        item = new Field({
          type: 'text',
          name: 'date',
          text: date,
          value: date,
          read: true,
          klss: 'item-date'
        }).inject(line);

        item = new Field({
          type: 'text',
          name: 'Description',
          value: info.name,
          read: true,
          klss: 'item-name'
        }).inject(line);

        var text = '';
        if (info.unit) text = ' ' + info.unit;

        item = new Field({
          type: 'text',
          name: 'Qty',
          value: info.quantity + text || 0,
          read: true,
          klss: 'item-quantity'
        }).inject(line);

        item = new Field({
          type: 'text',
          name: 'Rate',
          value: 'CHF ' + parseFloat(info.rate).toFixed(2),
          read: true,
          klss: 'item-rate'
        }).inject(line);

        item = new Field({
          type: 'text',
          name: 'Amount',
          value: 'CHF ' + parseFloat(info.amount).toFixed(2),
          read: true,
          klss: 'item-amount'
        }).inject(line);

        var remove = new Button({
          type: 'icon',
          name: 'clear',
          icon: 'delete',
          emit: 'remove'
        }).inject(line).addEvent('remove', function() {
          new Dialog({
            message: 'Are you sure you want to delete this item?'
          }).addEvents({
            ok: function() {
              self._removeItem(idx, field.name);
              self.fireEvent('chargeRemoved', info._id);
            }
          });
        });

        item.addEvent('click', function() {
          list.getChildren().removeClass('item-selected');
          item.addClass('item-selected');
        });
      });

      this._initChargesFooter(list, 'totalTravelTime', 'totalWorkTime', cost);
    },

    /**
     * [_initChargesHeader description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    _initChargesHeader: function(list) {

      var line = new Element('div', {
        class: 'list-head'
      }).inject(list);

      new Element('div', {
        html: 'Date',
        'class': 'item-date'
      }).inject(line);

      new Element('div', {
        html: 'Description',
        'class': 'item-name'
      }).inject(line);

      new Element('div', {
        html: 'Qty',
        'class': 'item-quantity'
      }).inject(line);

      new Element('div', {
        html: 'Rate',
        'class': 'item-rate'
      }).inject(line);

      new Element('div', {
        html: 'Amount',
        'class': 'item-amount'
      }).inject(line);
    },

    /**
     * [_initChargesHeader description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    _initChargesFooter: function(list, travelTime, workTime, cost) {
      var line = new Element('div', {
        class: 'ui-item list-item'
      }).inject(list);

      var item = new Field({
        type: 'text',
        name: 'date',
        value: 'Total',
        read: true,
        klss: 'item-date'
      }).inject(line);

      item = new Field({
        type: 'text',
        name: 'Description',
        value: '',
        read: true,
        klss: 'item-name'
      }).inject(line);

      item = new Field({
        type: 'text',
        name: 'Qty',
        read: true,
        //value: this.minutesToStr(workTime),
        klss: 'item-quantity'
      }).inject(line);

      item = new Field({
        type: 'text',
        name: 'Rate',
        read: true,
        klss: 'item-rate'
      }).inject(line);

      item = new Field({
        type: 'text',
        name: 'Amount',
        value: 'CHF ' + Math.ceil(parseFloat(cost).toFixed(2)).toFixed(2),
        read: true,
        klss: 'item-amount'
      }).inject(line);

      new Button({
        type: 'icon',
        name: 'clear',
        icon: 'icon-times-circle',
        emit: 'remove'
      }).inject(line);

    },

    /**
     * [minutesToStr description]
     * @param  {[type]} minutes [description]
     * @return {[type]}         [description]
     */
    minutesToStr: function(minutes) {
      var hours = this.leftPad(Math.floor(Math.abs(minutes) / 60));
      var minutes = this.leftPad(Math.abs(minutes) % 60);

      if (minutes === '00' && hours === '00') return '--:--';

      return hours + ':' + minutes;
    },

    /**
     * [leftPad description]
     * @param  {[type]} number [description]
     * @return {[type]}        [description]
     */
    leftPad: function(number) {
      return ((number < 10 && number >= 0) ? '0' : '') + number;
    },

    /**
     * [_removeItem description]
     * @param  {[type]} idx [description]
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
     */
    _removeItem: function(idx, key) {
      this.doc[key].splice(idx, 1);
      this._setInfo(this.doc);
      this.fireEvent('change', [key, this.doc[key]]);
    }

  });

});
