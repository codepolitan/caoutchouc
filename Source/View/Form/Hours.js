/**
 * Minimalistic Implement for Minimal.Form Class
 * @implement Minimal.Form
 * @author Jerome Vial, Bruno Santos
 */

define([
  'UI/Control/Date',
  'UI/Control/Hour',
  'moment',
  'Core/Module/Settings/Settings'
], function(
  DateControl,
  HourControl,
  moment,
  settings
) {

  var _log = __debug('view:form-hours');

  var exports = new Class({

    /**
     * [_initHours description]
     * @param  {[type]} field [description]
     * @param  {[type]} doc   [description]
     * @param  {[type]} group [description]
     * @return {[type]}       [description]
     */
    _initHours: function(field, doc, group) {
      _log.debug('_initHours', field);
      var self = this;

      var lang = settings.get('space').lang || 'en';
      moment.lang(lang);
      //_log.debug(doc[field.name]);

      this.datePickers = this.datePickers || [];
      //_log.debug(doc, field.name);

      var value = this.getValueFromKey(field.name, doc);


      //var date = moment(value.start).format('YYYY-MM-DD');

      //_log.debug('date', date);

      var wrap = new Element('div', {
        'class': 'ui-hours ui-field',
      }).inject(group);

      var dateControl = new DateControl({
        klss: 'field-date',
        type: 'text',
        name: field.name,
        text: field.text,
        value: value.start,
      }).inject(wrap);

      var startHour = new HourControl({
        type: 'text',
        name: field.name,
        text: field.text,
        value: value.start,
      }).inject(wrap);

      var endHour = new HourControl({
        'class': 'half',
        type: 'text',
        name: field.name,
        text: field.text,
        value: value.end,
      }).inject(wrap);

      dateControl.addEvent('change', function(date) {
        //_log.debug('date', date);
        var hour, minutes, d;

        d = doc[field.name].start;
        hour = moment(d).get('hours');
        minutes = moment(d).get('minutes');
        doc[field.name].start = moment(date).set('h', hour).set('m', minutes).set('s', 0).toISOString();

        d = doc[field.name].end;
        hour = moment(d).get('hours');
        minutes = moment(d).get('minutes');
        doc[field.name].end = moment(date).set('h', hour).set('m', minutes).set('s', 0).toISOString();
      });

      startHour.addEvent('change', function(date) {
        //_log.debug('startHour', date);
        var hours = moment(date).get('hours');
        var minutes = moment(date).get('minutes');
        doc[field.name].start = moment(doc[field.name].start).set('h', hours).set('m', minutes).toISOString();

        self.fireEvent('change', [field.name, date]);
      });

      endHour.addEvent('change', function(date) {
        //_log.debug('endHour', date);
        var hours = moment(date).get('hours');
        var minutes = moment(date).get('minutes');
        doc[field.name].end = moment(doc[field.name].end).set('h', hours).set('m', minutes).toISOString();

        self.fireEvent('change', [field.name, date]);
      });

      var read = this.isReadOnly(field);

      if (read)
        dateControl.input.set('readonly', 'readonly');

      if (field.klss) {
        wrap.addClass(field.klss);
      }

      if (field.etat == 'readonly' || this.readonly) {
        dateControl.input.set('readonly', 'readonly');
      }
    }

  });

  return exports;

});
