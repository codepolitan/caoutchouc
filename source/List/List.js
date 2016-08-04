/**
* List
*
* @class UI.List
* @author Jerome Vial
*/

UI.List = new Class({

	Extends: UI.Container,

	options: {
		name: 'list',
		klss: 'ui-list list-simple',
		/* jshint multistr: true */
		template: '<div class="card-photo">'+
				'<img src="/app/files/stream/{{_id}}">'+
				//'<div class="photo-info"><span class="right">{{filetype}}</span><span class="name">{{name}}</span></span></div>'+
				'</div>',
		template: '<div class="trunc"><span class="right small">{{date}}</span><span>{{user}}</span>: <span>{{message}}</span><div>',
		//template: '<div class="trunc"><span class="right small">{{date}}</span><span>{{user}}</span><span>{{name}}</span><div>',
		toolbar: {
			list: ['action', 'info', 'view', 'alternate', 'status'],
			info: {
            	container: 'head',
				list: ['title'],
				title: {
					clss: 'UI/Component/Text'
				}
        	},
		},
		filetype: {
			image: ['image/png', 'image/jpeg', 'image/gif']
		},
		type: false,
		docs: [],
		scrollbar: false,
		controller: {
			_list: ['list'],
			list: {
				'infoedit': '_editInfo',
				'trash': '_viewDidTrash'
			}
		}
	},

	/**
	 * [initialize description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	initialize: function(options){
		this.parent(options);

		this._initList();

		return this;
	},


	_initList: function(string) {
		_log.debug('_initList', string);
		var self = this;
		this.items = [];
		/**/
		this.items = [];

		_log.debug('UI.List.initlist()', this.container);

		this.content = new Element('div', {
			'class': 'list-content'
		}).inject(this.element);

		this.content.addEvents({
			'click:relay(div)': function(ev) {
				_log.debug('click', ev.target);
				if (self.item)
					self.item.removeClass('is-selected');

				self.fireEvent('select', item.retrieve('doc'));

				minimal.settings.set('view.list.selected', id);
				minimal.settings.save();

				//self.fireEvent('settings', ['selected', item]);
			},
			'dblclick:relay(div)': function(ev) {
				//_log.debug('dclick', ev.target);
				if (self.item)
					self.item.removeClass('item-selected');

				var item = mnml.DOM.getAttrFirst(ev.target, 'ui-item');
				

			}/*,
			'contextmenu:relay(div)': function(ev) {

				var item = mnml.DOM.getAttrFirst(ev.target, 'data-id');
				self.item = item;
				_log.debug('contact: --',item);
				self.fireEvent('context', item.retrieve('doc'));
			}*/
		});

		this.container.fireEvent('resize');
	},

	_initCollection: function() {
		_log.debug('_initCollection', this.options.name, this.options.params);
		var self = this;

		this.collection = new Minimal.Collection({
			params: this.options.params
		}).addEvents({
			ready: function(list) {
				if (!list) return;
				//_log.debug('collection ready', list);
				self.fireEvent('setList');

	
				self.update(list);
			},
			loading: function(progress) {
				self.setStatus('Loading ' + progress);
			}
		});

		this.listReady = true;
		this.fireEvent('listReady');
	},

	/**
	 * [set description]
	 * @param {[type]} id [description]
	 */
	set: function(cid, type) {
		//_log.debug('set', cid, type);
		var self = this;
		if (this.listReady) {

			if (!cid) return;

			if (this.control.title && couch.doc[cid])
				this.control.title.set('text', couch.doc[cid].name);

			this.node_id = cid;

			this.fireEvent('getData');

			this.collection.set(cid, type);
		} else {
			this.addEvent('listReady', function() {
				self.set(cid, type);
			});
		}
	},


	update: function(data) {
		//_log.debug('upate(data)',data.length);

		if (this.options.reverse)
			data.reverse();

		this.list = data;
		this.content.empty();

		if (data)
		data.each(function(id, i) {
			if (couch.doc[id])
				this.addItem(couch.doc[id]);
			else this.addItem({
				type: 'user',
				name: id
			});
		}, this);

		//this._initMasonry();

		this.fireEvent('resize');
	},

	initMasonry: function() {
		var e = this.content;
		//_log.debug('masonry', e);
		if (!e) return;

		this.content.masonry({
	 		columnWidth: 400, 
            singleMode: true,  
            itemSelector: '.ui-item'
        });
	},

	insert: function(id, x, y) {
		//_log.debug('insert', x, y);
		this.addItem(couch.doc[id], x, y);
		this.fireEvent('resize');
	},

	render: function(item, data, tmpl) {
		var self = this;

		tmpl = tmpl || this.tmpl;
		data = data || this.data;

		var content = Mustache.render(tmpl, data);

		item.set('html', content);
	},

	addItem: function(info){
		var self = this,
			tmpl = this.tmpl;

		//_log.debug('addItem', info);

		var where = 'bottom';

		var type = info.type,
			id = info._id || info.name;
		var item = new Element('div', {
			'data-id': id,
			'data-type': type,
			'data-node': info.node,
			'class': 'ui-item item-list'
		}).inject(this.content, where);
		item.store('info', info);

		if (info._id && info._id == this.selectedID)
			this.selectByID(this.selectedID);

		this.renderItem(item, info);
		this.items.push(item);

		//this._initDragItem(item);
		return item;
	},

	renderItem: function(item, info) {
		var self = this,
			opts = this.options,
			tmpl = opts.template,
			type = info.type;

		_log.debug('renderItem', type, info, tmpl);

		if (mnml.data.type[type] && mnml.data.type[type]._process) {
			info = mnml.data.type[type]._process.render(info);
			tmpl = mnml.data.type[type].default.list.template.simple || tmpl;
		}

		var body = Mustache.render(tmpl, info);

		item.set('html', body);

		this.element.scrollTop = this.element.scrollHeight;
	},


	getList: function() {

		return this.list;

	},

	_initEvents: function() {
		var self = this;
		this.parent();
	},

	next: function() {
		//_log.debug('next', this.id);
		var array = this.list,
			next;

		var index = array.indexOf(this.id);
		_log.debug('index', index);
		if(index >= 0 && index < array.length - 1)
		   next = array[index + 1];

		_log.debug('next', next);

		if (next) {
			this.id = next;
			this.fireEvent('select', couch.doc[next]);
			//this.revealItem(next, false);
		}
	},

	previous: function() {
		//_log.debug('previous', this.id);

		//_log.debug('next', this.id);
		var array = this.list,
			previous;

		var index = array.indexOf(this.id);
		//_log.debug('index', index);
		if(index >= 0 && index < array.length)
		   previous = array[index - 1];

		//_log.debug('previous', previous);

		if (previous) {
			this.id = previous;
			this.fireEvent('select', couch.doc[previous]);
			//this.revealItem(previous, false);
		}
	},

	_editInfo: function(v) {
		// _log.debug('editInfo', this.id);
		// _log.debug('editInfo', couch.doc[this.id]);

		if (!this.id) return;

		this.fireEvent('editInfo', couch.doc[this.id]);
	},

	_viewDidTrash: function() {
    	//_log.debug('_viewDidTrash', this.id);
    	if (!this.id) return;
    	this.fireEvent('deleteInfo', this.id);
    	this.item.destroy();
    	
   	},


   	remove: function() {

   	}
});
