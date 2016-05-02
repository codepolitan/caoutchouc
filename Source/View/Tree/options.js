/**
 * scolling view options config
 * @object config.view.scrolling.options
 * @author Jerome Vial, Bruno Santos
 */
define([

], function (

) {

	return {
		clss: 'tree',
		autoScroll: true,
		checkbox: false,
		selectFirst: true,
		drag: true,
		toggle: false,
		nodeId: null,
		selectedId: null,
		selectedCode: null,
		selectedIndex: null,
		nodes: null,
		displayCount: true,
		shake: false,
		text: {
			trash: 'Êtes-vous sûr(e) de vouloir effacer cette catégorie?'
		},
		controller: {
			_list: ['view', 'tree', 'collection', 'settings'],
			view: {
				'bindingsReady': '_initList',
				'addnode': '_addNode',
				'organize': '_toggleOrganize',
				'trash': '_moveToTrash',
				'dragDisabled': '_syncCollection',
				'element.scroll': '_elementDidScroll',
				'listSet': 'render',
				//'resize': '_onViewResize',
				'container.resizeComplete': '_onViewResizeComplete',
				//'content.dblclick': '_disableOrganize'
			},
			tree: {
				'tree.change': '_updateSortAndPath',
				'tree.select': '_selectByElement',
				'tree.dblclick': ['_selectByElement', '_setName'],
				'tree.blur': ['trigger.unselect', 'unselect'],
				'tree.expand': '_treeDidExpand',
				'tree.collapse': '_treeDidCollapse'
			},
			collection: {
				'collection.fetch': ['_setList', '_initScrollTop', '_initSelectedCode', '_initSelectedIndex', '_initSelected'],
				'collection.destroy': 'collection.removeModel',
				'collection.remove': 'refresh',
				'collection.save': 'refresh',
				'collection.update': '_collectionDidUpdate',
				//'collection.change' : 'refresh'
			}
		},
		data: {
			collection: {
				clss: 'Minimal.Collection.Tree',
				opts: {
					urlRoot: '/data/couch/node'
				}
			},
			model: {
				clss: 'Minimal.Model.Tree',
				opts: {
					urlRoot: '/data/couch/node',
					useJSON: true
				}
			}
		},
		toolbar: {
			list: ['info', /*'action', 'more' */'alternate', 'status'],
			info: {
				container: 'head',
				list: ['text.title']
			},
			action: {
				container: 'head',
				klss: 'half',
				list: ['more']
			},
			more: {
				container: 'head',
				list: []
			},
			alternate: {
				container: 'foot',
				list: ['addnode', 'organize', 'trash', 'separator', 'infoedit', 'infoview']
			},
			status: {
				container: 'foot',
				list: ['text.status']
			}
		},
		control: {
			admin: {
				disallowed: ['infoedit'],
			},
			guest: {
				disallowed: ['infoedit'],
			},
			super: {
				disallowed: [],
			},
			disabled: [],
			enabled: [],
		}
	};

});
