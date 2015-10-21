
require.config({
	paths: {
		UI : '../Source',
		dist : '../dist',
		utils : '../Source/utils'
	},
	shim: {
		'dist/caoutchouc-min': {
			deps: [
				'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.5.2/mootools-core.min.js',
				'https://cdnjs.cloudflare.com/ajax/libs/mootools-more/1.5.2/mootools-more.js',
				'UI/utils/debug'
			]
		},
		'https://cdnjs.cloudflare.com/ajax/libs/mootools-more/1.5.2/mootools-more.js': {
			deps: [
				'https://cdnjs.cloudflare.com/ajax/libs/mootools/1.5.2/mootools-core.min.js',
			],
		},
	}
});

require(['dist/caoutchouc-min'], function() {
	require(['UI/Layout/Layout'], function(Layout) {
		var layout = new Layout({
			container: $(document.body),
			node: {
				_name: 'standard',
				_list: ['navi', 'main', 'side'],
				main: {
					flex: '1'
				},
				navi: {
					theme: 'dark'
				}
			}
		});
	});
});

