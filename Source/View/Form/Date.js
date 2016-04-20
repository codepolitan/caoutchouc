/**
* Minimalistic Implement for Minimal.Form Class
*
* @implement Minimal.Form
* @author Jerome Vial, Bruno Santos
*/

define([
	'moment',
	'UI/Control/Date',
	'UI/Control/Field',
	'UI/Control/Button',
	'Core/Module/Settings/Settings'
], function(
	moment,
	DateControl,
	FieldControl,
	ButtonControl,
	settings
) {

	var _log = __debug('view-form-date').defineLevel();

    var exports = new Class({

		/**
		 * [_initDate description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initDate2: function (key, doc, group) {
			_log.debug('_initDate2', key, doc, group);

			var self = this;
			var opts = key.opts || {};

			var format = opts.format || this.options.dateTime.format;

			//we should handle this differently the form should receive the lang
			var lang = 'en';
			if (settings) {
				lang = settings.get('space').lang || 'en';
			}

			moment.lang(lang);
			//_log.debug(doc[key.name]);

			this.datePickers = this.datePickers || [];
			//_log.debug(doc[key.name]);

			var value = this.getValueFromKey(key.name, doc);

			/*if (!value) {
				value = moment().toISOString();
				this.updateDocKey(key.name, value);
			}*/

			//check if end date is not greater that start date
			if (key.name.indexOf('end') !== -1) {
				var start = this.getValueFromKey(key.name.replace('end', 'start'), doc);
				start = moment(start).seconds(0).milliseconds(0).toISOString();
				var end = moment(value).seconds(0).milliseconds(0).toISOString();

				if (start > end) {
					value = moment(start).toISOString();
				}
			}

			var date;

			if (value) date = moment(value).format('YYYY-MM-DD HH:mm');

			if (value && key.mode === 'dateHour' || key.mode === 'hour') {
				date = moment(value).format('YYYY-MM-DD HH:mm');
			}

			var read = this.isReadOnly(key);

			var field = new DateControl({
				'class': key.clss,
				type: 'text',
				name: key.name,
				text: key.text,
				value: date,
				useTextAsLabel: this.options.useTextAsLabel,
				read: read
			}).addEvent('change', function(value) {
				_log.debug('change', value);

				if (!value) return;

				//check if end date is not greater that start date
				var start, end, oldDate;

				if (key.name.indexOf('start') !== -1) {
					start = moment(value).toISOString();
					oldDate = self.getValueFromKey(key.name, doc);
					end = self.getValueFromKey(key.name.replace('start', 'end'), doc);
				}

				if (key.name.indexOf('end') !== -1) {
					end = moment(value).toISOString();
					oldDate = self.getValueFromKey(key.name, doc);
					start = self.getValueFromKey(key.name.replace('end', 'start'), doc);
				}

				_log.debug('dates...', start, end, start > end, oldDate);

				if (start && end && start > end) {
					if (key.name.indexOf('start') !== -1) {
						var k = key.name.replace('start', 'end');
						if (self.field[k]) {
							self.field[k].set(value);
						}
						field.set(value);
						self.updateDocKey(k, moment(value).toISOString());
					} else {
						if (oldDate) {
							field.set(oldDate);
							self.updateDocKey(key.name, moment(oldDate).toISOString());
						} else {
							field.empty();
							self.updateDocKey(key.name, undefined);
						}
						return;
					}
				}

				field.set(value);
				self.updateDocKey(key.name, moment(value).toISOString());
				self.fireEvent('change', [key.name, moment(value).toISOString()]);
			}).inject(group);

			this.field[key.name] = field;


			if (read)
				field.input.set('readonly','readonly');

			if (key.klss) {
				field.addClass(key.klss);
			}

			if (field.etat === 'readonly' || this.readonly) {
				field.input.set('readonly','readonly');
			}
		},
		/**
		 * [_initDate description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initDate: function (field, doc, group) {
			_log.debug('_initDate', field, doc, group);
			var self = this;
			var opts = field.opts || {};

			var format = opts.format || this.options.dateTime.format;

			//we should handle this differently the form should receive the lang
			var lang = 'en';
			if (settings) {
				lang = settings.get('space').lang || 'en';
			}

			moment.lang(lang);
			//_log.debug(doc[field.name]);

			this.datePickers = this.datePickers || [];
			//_log.debug(doc[field.name]);

			var value = this.getValueFromKey(field.name, doc);

			var date = moment(value).format(format);

			if (field.mode === 'dateHour') {
				date = moment(value).format('YYYY-MM-DD HH:mm');
			}

			if (field.mode === 'hour') {
				date = moment(value).format('YYYY-MM-DD HH:mm');
			}

			if (!this.getValueFromKey(field.name, doc)) {
				date = undefined;
			}

			//_log.debug(date);

			var read = this.isReadOnly(field);

			var input = new FieldControl({
				'class': field.clss,
				type: 'text',
				name: field.name,
				text: field.text,
				value: date,
				useTextAsLabel: this.options.useTextAsLabel
			}).inject(group);

			/*make possible to delete a date*/
			input.input.addEvents({
				keyup: function(ev) {
					if (ev.code === 8) {
						this.set('value', '');
						self.doc[field.name] = undefined;
						self.fireEvent('change');
					}
				}
			});

			if (read) {
				input.input.set('readonly','readonly');
			}

			if (field.klss) {
				input.addClass(field.klss);
			}

			if (field.etat === 'readonly' || this.readonly) {
				input.input.set('readonly','readonly');
			}

			if (read) {
				return;
			}

			/*input.input.addEvents({
				keyup: function() {
					self.doc[this.get('name')] = this.get('value');
					self.fireEvent('change', [this.get('name'), this.get('value')]);
				}
			});
	*/
			//_log.debug('-|x-', date);

			var options =  {
				useFadeInOut: false,
				//inject: this.element,
				positionOffset: {x: 5, y: 0},
				pickerClass: 'datepicker_bootstrap',
				format: '%Y/%m/%d',
				onSelect: function(value){
					//_log.debug('--', self.doc, field.name);
					self.updateDocKey(field.name, value);
					//self.doc[field.name] = d;
					self.fireEvent('change', [field.name, value]);
				},
				onShow: function() {
					_log.debug('picker date show');
				}
			};

			if (field.mode === 'dateHour') {
				options.timePicker = true;
				options.format = '%Y-%m-%d %H:%M';
			}

			if (field.mode === 'hour') {
				options.timePicker = true;
				options.pickOnly = 'time';
				options.format = '%Y-%m-%d %H:%M';
			}

			var datePicker = new Picker.Date(input.input, options);

			this.datePickers.push(datePicker);
		},

		/**
		 * [_initDates description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @return {[type]}       [description]
		 */
		_initDates: function(field, doc, group) {
			//_log.debug('_initDates', group);
			var self = this;


			if (!doc[field.name]) return;

			doc[field.name].each( function(event, i) {
				self.injectDate(field, doc, group, event, i);
			});

			var addBtn = new ButtonControl({
				icon: 'icon-plus-circle',
				name: 'add',
				type: 'icon-text',
				klss: 'button-inline',
				text: 'Ajouter ' +name+ '...',
				emit: 'addDate',
			}).inject(group).addEvent('addDate', function(){
				//_log.debug(field.name);
				self.addDate(field, doc, group);
			});
		},

		/**
		 * [injectDate description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @param  {[type]} event [description]
		 * @param  {[type]} i     [description]
		 * @param  {[type]} add   [description]
		 * @return {[type]}       [description]
		 */
		injectDate: function(field, doc, group, event, i, add) {
			var self = this;

			var context = {
				el: group,
				pos: 'bottom'
			};

			if (add) {
				var elements = group.getChildren();

				context = {
					el: elements[elements.length-1],
					pos: 'before'
				};
			}

			var line = new Element('div', {
				'class': 'dates',
				styles: {
					position: 'relative'
				}
			}).inject(context.el, context.pos);
			//_log.debug(i, event);
			var date = moment(doc[field.name][i].start.dateTime).format("DD/MM/YYYY HH:mm");
			//_log.debug(date);
			var start = new FieldControl({
				'klass': 'half',
				type: 'text',
				name: field.name,
				text: 'start',
				value: date,
				useTextAsLabel: self.options.useTextAsLabel
			}).inject(line).addClass('half');

			start.input.addEvents({
				keyup: function(ev) {
					//_log.debug(i, this.get('value'));

					self.doc[field.name][i].start.dateTime = moment(this.get('value'), "DD/MM/YYYY HH:mm").toISOString();

					self.fireEvent('change', [field.name+'.'+i+'.start.dateTime', this.get('value')]);
				}
			});

			date = moment(doc[field.name][i].end.dateTime).format("DD/MM/YYYY HH:mm");
			var end  = new FieldControl({
				'klass': 'half',
				type: 'text',
				name: field.name,
				text: 'end',
				value: date
			}).inject(line).addClass('half');

			end.input.addEvents({
				keyup: function() {
					//_log.debug(i, this.get('value'));
					self.doc[field.name][i].end.dateTime =  moment(this.get('value'), "DD/MM/YYYY HH:mm").toISOString();
					self.fireEvent('change', [field.name+'.'+i+'.end.dateTime', this.get('value')]);
				}
			});

			var removeBtn = new ButtonControl({
				icon: 'icon-times-circle',
				name: 'remove',
				idx: i,
				type: 'icon',
				emit: 'removeDate',
			}).inject(line).addEvent('click', function(){
				_log.debug(field.name, this.options.idx);
				self.removeDate(field, doc, group, this.options.idx, line);
			}).addClass('button-remove');

			/*new Picker.Date(end.input, {
				timePicker: true,
				positionOffset: {x: 5, y: 0},
				pickerClass: 'datepicker_dashboard',
				useFadeInOut: !Browser.ie
			});
	*/
		},

		/**
		 * [addDate description]
		 * @param {[type]} field [description]
		 * @param {[type]} doc   [description]
		 * @param {[type]} group [description]
		 */
		addDate: function(field, doc, group) {
			//_log.debug('add date', field, doc);

			var date,
				value = this.doc.dates || [],
				i = 0;

			if (doc.dates && doc.dates.length > 0) {
				i = doc.dates.length;
				date = Object.clone(doc.dates[i-1]);
				value.push(date);

				//_log.debug(doc);
			} else {
				var d = new Date().toJSON();

				date = {
					"start": {
						"dateTime": d
					},
					"end": {
						"dateTime": d
					}
				};
				value.push(date);
			}

			this.doc[field.name] = value;
			this.fireEvent('change', [field.name, value]);
			this.injectDate(field, this.doc, group, date, i, true);
		},

		/**
		 * [removeDate description]
		 * @param  {[type]} field [description]
		 * @param  {[type]} doc   [description]
		 * @param  {[type]} group [description]
		 * @param  {[type]} idx   [description]
		 * @param  {[type]} line  [description]
		 * @return {[type]}       [description]
		 */
		removeDate: function(field, doc, group, idx, line) {
			var self = this;


			if (idx === null) return;
			//  delete doc.dates[this.session.eventIndex];

			var i = this.doc.dates.indexOf(this.doc.dates[idx]);
			//_log.debug('--', i);
			if(i !== -1) {
				this.doc.dates.splice(i, 1);
			}

			line.destroy();

			this.doc[field.name] = this.doc.dates;
			this.fireEvent('change', [field.name, this.doc.dates]);

			//_log.debug(doc);
		}

    });

    return exports;

});
