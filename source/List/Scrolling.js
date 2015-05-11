/**
* Wrapper for ScrollerJS
*
* @class Minimal.Scrolling
* @author Jerome Vial, Bruno Santos
*/

UI.List.implement({
	options: {
		scrolling: {

            enabled               : true,
            bounceTime            : 600,
            useCSSTransition      : false,
            useNativeScroller     : true,
            dualListeners         : false,
            minThreshold          : 10,     // It should be in the [0, 10] range
            minDirectionThreshold : 5,     // It should be smaller than minThreshold
            lockOnDirection       : null,
            itemHeight            : null,
            itemWidth             : null,
            bindToWrapper         : false,
            pullToRefresh         : false,
            pullToLoadMore        : false,
            scrollbars            : false,
            infiniteLoading       : false,
            gpuOptimization       : false,
            debounce              : false,
            observeDomChanges     : true,
           // observeDomConfig      : MUTATOR_OBSERVER_CONFIG


			itemSelector		: '.ui-item',
            //disableMouse		: false,
            scrollbars          : true,
           	useCSSTransition 	: false,
            useNativeScroller  	: false,
           	gpuOptimization  	: true,
            infiniteLoading  	: false,
            //hints
            //snap          		: 'soft',
            pullToRefresh   	: false,
            pullToLoadMore  	: false,
          //  scroll          	: 'vertical',
           // lockOnDirection: 'vertical',
            indicators       : [{
                el: '.scrolling-indicator',
                config: {
                    resize      : false,
                    snap        : false,
                    interactive : true
                }
            }],
            plugins          : [
                'Indicators',
                // 'Endless', 
               // 'Snap'
            ]
	    }	
	},

	/**
	 * [_initScroller description]
	 * @return {[type]} [description]
	 */
	_initScrolling: function() {
		//_log('_initScroller', this.scrolling);

		window.__S = null;

		// if (this.scrolling) {
		// 	this.scrolling.items = [];
		// 	this.scrolling.destroy();
		// }

		// this.scrolling = null;
		//_log('destory ', this.scrolling);

		var wrapper = this.element;
		var config = this.options.scrolling || {};

	    //document.addEventListener('touchmove', function (e) {e.preventDefault();}, false);

	    this._initScrollingIndicator();

		this.scrolling = new Scrolling(wrapper, config);
	},

	/**
	 * [_initScrollingIndicator description]
	 * @return {[type]} [description]
	 */
	_initScrollingIndicator: function() {
		//_log('initScrollingIndicator', this.content);

		//if (!this.content) return;

		if (this.indicator)
			this.indicator.destroy();

		this.indicator = new Element('div', {
			'class': 'scrolling-indicator'
		}).inject(this.content, 'after');

		this.thumb = new Element('div', {
			'class': 'thumb'
		}).inject(this.indicator);

	},

});