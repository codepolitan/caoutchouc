/**
* Minimalistic Class for Minimal.List.Desktop Management
*
* @class Minimal.List.Desktop
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
            	list: ['text.title']
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
		_log('_initList', string);
		var self = this;
		this.items = [];
		/**/
		this.items = [];

		_log('UI.List.initlist()', this.container);

		this.content = new Element('div', {
			'class': 'list-content'
		}).inject(this.element);

		this.content.addEvents({
			'click:relay(div)': function(ev) {
				_log('click', ev.target);
				if (self.item)
					self.item.removeClass('is-selected');

				self.fireEvent('select', item.retrieve('doc'));

				minimal.settings.set('view.list.selected', id);
				minimal.settings.save();

				//self.fireEvent('settings', ['selected', item]);
			},
			'dblclick:relay(div)': function(ev) {
				//_log('dclick', ev.target);
				if (self.item)
					self.item.removeClass('item-selected');

				var item = mnml.DOM.getAttrFirst(ev.target, 'ui-item');
				

			}/*,
			'contextmenu:relay(div)': function(ev) {

				var item = mnml.DOM.getAttrFirst(ev.target, 'data-id');
				self.item = item;
				_log('contact: --',item);
				self.fireEvent('context', item.retrieve('doc'));
			}*/
		});

		this.container.fireEvent('resize');
	},

	_initCollection: function() {
		_log('_initCollection', this.options.name, this.options.params);
		var self = this;

		this.collection = new Minimal.Collection({
			params: this.options.params
		}).addEvents({
			ready: function(list) {
				if (!list) return;
				//_log('collection ready', list);
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
		//_log('set', cid, type);
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
		//_log('upate(data)',data.length);

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
		//_log('masonry', e);
		if (!e) return;

		this.content.masonry({
	 		columnWidth: 400, 
            singleMode: true,  
            itemSelector: '.ui-item'
        });
	},

	insert: function(id, x, y) {
		//_log('insert', x, y);
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

		//_log('addItem', info);

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

		_log('renderItem', type, info, tmpl);

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

	_initDragItem: function(item) {
		var self = this;
		item.makeDraggable({

			droppables: $$('#droppables DIV'),

			onEnter: function(draggable, droppable){
				droppable.setStyle('background', '#E79D35');
			},

			onLeave: function(draggable, droppable){
				droppable.setStyle('background', '#6B7B95');
			},

			onDrop: function(draggable, droppable){
				if (!droppable){
					var drop =  {
						draggable: draggable,
						droppable: droppable
					};

					self.fireEvent('drop', drop);
				} else {
					_log(draggable, droppable);
					self.fireEvent('move', draggable);
				}
			}
		});

	},


	_initEvents: function() {
		var self = this;
		this.parent();
	},


	next: function() {
		//_log('next', this.id);
		var array = this.list,
			next;

		var index = array.indexOf(this.id);
		_log('index', index);
		if(index >= 0 && index < array.length - 1)
		   next = array[index + 1];

		_log('next', next);

		if (next) {
			this.id = next;
			this.fireEvent('select', couch.doc[next]);
			//this.revealItem(next, false);
		}
	},

	previous: function() {
		//_log('previous', this.id);

		//_log('next', this.id);
		var array = this.list,
			previous;

		var index = array.indexOf(this.id);
		//_log('index', index);
		if(index >= 0 && index < array.length)
		   previous = array[index - 1];

		//_log('previous', previous);

		if (previous) {
			this.id = previous;
			this.fireEvent('select', couch.doc[previous]);
			//this.revealItem(previous, false);
		}
	},

	_editInfo: function(v) {
		// _log('editInfo', this.id);
		// _log('editInfo', couch.doc[this.id]);

		if (!this.id) return;

		this.fireEvent('editInfo', couch.doc[this.id]);
	},

	_viewDidTrash: function() {
    	//_log('_viewDidTrash', this.id);
    	if (!this.id) return;
    	this.fireEvent('deleteInfo', this.id);
    	this.item.destroy();
    	
   	},


   	remove: function() {

   	}
});
