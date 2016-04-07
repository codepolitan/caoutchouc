/**
* Implement Hour methods for Minimal.Form
*
* @implement Minimal.Form
* @author Jerome Vial
*/

define([
	'moment',
	'UI/Control/Date',
	'UI/Control/Hour',

], function(
	moment,
	DateControl,
	HourControl
) {

	var _log = __debug('view:form-hour');

    var exports = new Class({

		/**
		 * [_initHour description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initHour: function(field, doc, group) {
			_log.debug('_initHour', field.name, field.read, doc);

			var self = this;

			var value = this.getValueFromKey(field.name, doc);

			/*if (!value || value == 'Invalid date') {
				value = moment().toISOString();
				if (field.mode != 'dateHour') value = moment().hour(0).minute(0).toISOString();
				this.updateDocKey(field.name, value);
			}*/

			//_log.debug('hour', field.name);

			//var tmp = field.name;

			var segment = new Element('div', {
				class: 'ui-segment field-datehour'
			}).inject(group);

			if (field.klss) {
				segment.addClass(field.klss);
			}

			var read = this.isReadOnly(field);

			if (field.mode === 'dateHour') {
				//check if end date is not greater that start date
				if (value && field.name.indexOf('end') !== -1) {
					var start = this.getValueFromKey(field.name.replace('end', 'start'), doc);
					start = moment(start).seconds(0).milliseconds(0).toISOString();
					var end = moment(value).seconds(0).milliseconds(0).toISOString();

					if (start > end) {
						var h = moment(end).get('hours');
						var m = moment(end).get('minutes');
						var d = moment(start).set('h', h).set('m', m).toISOString();
						value = moment(d).toISOString();
					}
				}

				var dateControl = new DateControl({
					'class': 'txt',
					klss: 'half',
					type: 'text',
					name: field.name,
					text: field.text,
					value: value,
					read: read
				}).inject(segment);

				this.field[field.name] = dateControl;
			}

			var klss = '';
			if (field.mode === 'dateHour') {
				klss = 'half';
			}

			var hourControl = new HourControl({
				'class': 'txt',
				klss: klss,
				type: 'text',
				name: field.name,
				text: field.text,
				date: value,
				read: read
			}).inject(segment);

			//var original_date = value;

			//_log.debug('input class', input);

			hourControl.addEvents({
				change: function(date) {
					var hours = moment(date).get('hours');
					var minutes = moment(date).get('minutes');
					var d = self.getValueFromKey(field.name, doc);
					var val = moment(d).set('h', hours).set('m', minutes).toISOString();

					self.updateDocKey(field.name, val);
					self.fireEvent('change', [field.name, date]);
				}
			});

			if (field.mode === 'dateHour') {
				dateControl.addEvents({
					change: function(date) {
						var oldDate = self.getValueFromKey(field.name, doc);
						var newDate;

						if (oldDate) {
							var hours = moment(oldDate).get('hours');
							var minutes = moment(oldDate).get('minutes');
							newDate = moment(date).set('h', hours).set('m', minutes).toISOString();
						} else {
							newDate = moment(date).toISOString();
						}

						//_log.debug('--', newDate);
						//check if end date is not greater that start date
						var start, end, oldDate;

						if (field.name.indexOf('start') !== -1) {
							start = moment(newDate).toISOString();
							oldDate = self.getValueFromKey(field.name, doc);
							end = self.getValueFromKey(field.name.replace('start', 'end'), doc);
						}

						if (field.name.indexOf('end') !== -1) {
							end = moment(newDate).toISOString();
							oldDate = self.getValueFromKey(field.name, doc);
							start = self.getValueFromKey(field.name.replace('end', 'start'), doc);
						}

						//_log.debug('dates...', start, end, start >= end, oldDate);

						if (start && end && start > end) {
							if (field.name.indexOf('start') !== -1) {
								var k = field.name.replace('start', 'end');
								if (self.field[k]) self.field[k].set(newDate);
								dateControl.set(newDate);
								self.updateDocKey(k, moment(newDate).toISOString());
							} else {
								dateControl.set(oldDate);
								self.updateDocKey(field.name, oldDate);
								return;
							}
						}

						hourControl.set(newDate);
						self.updateDocKey(field.name, newDate);
						self.fireEvent('change', [field.name, newDate]);
					}
				});
			}

			if (read) {
				hourControl.input.set('readonly','readonly');
			}

			if (field.klss) {
				hourControl.addClass();
			}

			if (field.etat === 'readonly' || this.readonly) {
				hourControl.input.set('readonly','readonly');
			}
		}

    });

    return exports;

});
