
require.config({
	paths: {
		UI : '../Source',
		dist : '../dist',
		utils : '../Source/utils'
	},
	shim: {
		'dist/caoutchouc-min': {
			deps: [
				'dist/debug'
			]
		}
	}
});

require(['dist/caoutchouc-min'], function() {
	console.log('caoutchouc loaded');
	require(['UI/Layout/Layout'], function(Layout) {
		console.log('layout');
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

