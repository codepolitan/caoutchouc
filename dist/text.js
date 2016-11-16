!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("text",[],e):"object"==typeof exports?exports.text=e():(t.caoutchouc=t.caoutchouc||{},t.caoutchouc.text=e())}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(23)},,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(9),o=n(s),r=i(7),a=n(r),h=i(12),l=n(h),d=i(11),u=n(d),f=i(13),c=n(f),p=__debug("ui-component");e.default=new Class({Implements:[Events,Options,o.default,a.default,l.default,u.default,c.default],name:"component",component:"component",options:{lib:"ui",prefix:"ui-",component:"component",name:"component",type:null,element:{attr:["class","styles","events","id","name","html","title"],tag:"span",type:null}},initialize:function(t){return this.setOptions(t),this.fireEvent("init"),this._initOptions(),this._initElement(),this._initEvents(),this._initBinding(),this},setState:function(t){return p.debug("setState",t,this),this.element.removeClass("state-"+this.state),t&&this.element.addClass("state-"+t),this.state=t,this.fireEvent("state",t),this},addComponent:function(t){p.debug("addComponent",t),t.component||(t.component="container"),t.container=this.element,t.main=this.main;var e=new(UI[t.component.capitalize()])(t);this.addEvent("resize",function(){e.fireEvent("resize")}),this.node.push(e),this.layout[this.main][e.name]=e},_initOptions:function(){var t=this.options;this.main=t.main||t.name,this.layout=t.layout||{},this.layout[this.main]=this.layout[this.main]||{},this.dragHandlers=t.dragHandlers||[]},_initState:function(){this.options.state&&this.setState(this.options.state)},_initElement:function(){p.debug("_initElement");var t=this.options;this.fireEvent("create"),this._initElementType();var e=this._initProps(),i=t.tag||t.element.tag,n=new Element(i,e);n.store("_instance",this),this.element=n,this.content=n,this.fireEvent("created"),t.container&&"window"!==t.container&&(this.inject(t.container),this.fireEvent("injected")),this._initState(),this._initClass()},_initProps:function(){p.debug("_initProps");for(var t=this.options,e={},i=["id","name","type","klass","styles","html","title","events"],n=0;n<i.length;n++){var s=i[n];"klass"===s&&(s="class"),t.element.attr[s]&&(e[s]=t.element.attr[i[n]])}return e},_initElementType:function(){},_initClass:function(){var t=this.options,e=t.klass||t.element.klass;e&&this.element.addClass(e),t.type&&void 0!==typeOf(t.type)&&this.element.addClass("type-"+t.type),t.state&&void 0!==typeOf(t.state)&&this.element.addClass("state-"+t.state)},_initEvents:function(){var t=this,e=this.options;this.addEvents({injected:function(){e.resizable&&t._initResizer&&t._initResizer()},device:function(e){t.device=e}}),this.options.draggable&&this.enableDrag&&this.enableDrag()},getName:function(){return this.options.name||this.name},setHtmlContent:function(t){return this.content.set("html",t),this.fireEvent("loadComplete"),this.fireEvent("resize"),this},setContent:function(t){return this.content.set("html",t),this.fireEvent("resize"),this},inject:function(t,e){return p.debug("inject",t,e),this.fireEvent("inject"),"element"===typeOf(t)?this.container=t:"object"===typeOf(t)&&t.element&&(this.container=t.element),t&&"window"!==t.component&&this.element.inject(this.container,e),this.setSize&&this.setSize(),this.isInjected=!0,this.fireEvent("injected"),this}})},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({toElement:function(){return this.element},show:function(){return this.fireEvent("show"),this.element.show(),this},hide:function(){return this.fireEvent("hide"),this.element.hide(),this},fade:function(t){return this.fireEvent("fade"),this.element.fade(t),this},getStyle:function(t){return this.element.getStyle(t)},getSize:function(){if("object"==typeOf(this.element))return this.element.getSize()},getComputedSize:function(){return this.element.getComputedSized()},getCoordinates:function(t){return this.element.getCoordinates(t)},addClass:function(t){return this.element.addClass(t),this},removeClass:function(t){return this.element.removeClass(t)},get:function(t){return this.element.get(t)},morph:function(t){return this.element.morph(t)},setSize:function(t,e){return this.element.x=t||this.options.width,this.element.y=e||this.options.height,this.element.x&&this.element.setStyle("width",this.element.x),this.element.y&&this.element.setStyle("height",this.element.y),this.fireEvent("resize"),this},setStyle:function(t,e){return this.element.setStyle(t,e),this},setStyles:function(t){return this.element.setStyles(t),this},getElement:function(t){return this.element.getElement(t)},getElements:function(t){return this.element.getElements(t)},submit:function(t){return this.element.submit(t)},dispose:function(){return this.element.dispose()},destroy:function(){this.element.destroy()}})},,function(t,e,i){!function(e,i){t.exports=i()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"undefined"==typeof window&&(Class=i(!function(){var t=new Error('Cannot find module "primish"');throw t.code="MODULE_NOT_FOUND",t}()),Events=i(!function(){var t=new Error('Cannot find module "primish/emitter"');throw t.code="MODULE_NOT_FOUND",t}())),e.default=new Class({Implements:[Events],options:{api:{emit:"trigger"}},initialize:function(){var t=this;this.addEvent("initReady",function(){t._initBinding.bind(this)()})},_initBinding:function(t){if(t=t||this.options.controller||this.options.binding,this.binding=this.binding||{},t){if(!t._list)return void this._bindObject(t);for(var e=t._list,i=0;e.length>i;i++){var n=t[e[i]];this.binding=this.binding||{},this._bindObject(n)}return this.fireEvent?this.fireEvent("bindingsReady"):this.trigger&&this.trigger("bindingsReady"),this.binding}},_bindObject:function(t){for(var e in t)if(t.hasOwnProperty(e)){var i=t[e];"object"!==("undefined"==typeof i?"undefined":n(i))?this._bindkey(e,i):this._bindList(e,i)}},_bindList:function(t,e){for(var i=0;i<e.length;i++)this._bindkey(t,e[i])},_bindkey:function(t,e){var i=t.split("."),s=i[i.length-1];i.pop();var o=this._path(i.join(".")),r=this._getObj(o,e);if(r){for(var a in r)if(r.hasOwnProperty(a)){var h=i.join(".")+"."+a+"."+s;this._bindkey(h,e)}}else{var l;if("object"===("undefined"==typeof e?"undefined":n(e))){for(var d in e)if(e.hasOwnProperty(d))break;l=this._processKeyObj(d,e),e=d}var u=e.split(".");if(u[u.length-2]===this.options.api.emit){var f=u[u.length-1];this._bindEvent(o,s,f,e)}else this._bindMethod(o,s,e,l)}},_processKeyObj:function(t,e){for(var i=e[t],n=0;n<i.length;n++){var s=i[n];"this"===s.split(".")[0]&&(s=s.split("."),s.shift(),i[n]=this._path(s.join(".")))}return i},_bindEvent:function(t,e,i,n){var s=this.options.api.emit,o=n.split("."),r=o[o.length-1];o.splice(-2,2);var a=this._path(o.join(".")),h=this._getObj(a,n);if(h){for(var l in h)if(h.hasOwnProperty(l)){var d=o.join(".")+"."+l+"."+s+"."+r;this._bindEvent(t,e,i,d)}}else t&&t.addEvent&&a&&a.fireEvent?t.addEvent(e,a.fireEvent.bind(a,i)):t&&t.on&&a&&a.fireEvent?t.on(e,a.fireEvent.bind(a,i)):console.warn("missing context or method",t,n,this)},_bindMethod:function(t,e,i,n){var s=this._path(i),o=i.split(".");o.pop();var r=this._path(o.join(".")),a=this._getObj(r,i);if(a){for(var h in a)if(a.hasOwnProperty(h)){var l=o.slice(0,2).join(".");l=i.replace(l,l+"."+h),this._bindMethod(t,e,l,n)}}else t&&t.addEvent&&s?(n?t.addEvent(e,s.bind(r,n)):t.addEvent(e,s.bind(r)),this.binding[e]=s):t&&t.on&&s?(this.binding[e]=s,t.on(e,s.bind(r))):console.warn("missing context or method",t,i,this)},_path:function(t){if(!t)return this;if(!t.match(/\./))return this[t];for(var e,i=t.split("."),n=0,s=i.length;n<s;n++){var o=i[n];e=e||this,e=e[o]}return e},_getObj:function(t,e){if(t&&t.constructor&&"Object"===t.constructor.name){for(var i in t)if(t.hasOwnProperty(i))break;if(e.indexOf(i)!==-1)return;return t}}})}])})},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({options:{draggable:!1,dragLimitX:!1,dragLimitY:!1,dragHandlers:[],fx:{adaptLocation:{duration:200,wait:!0}}},enableDrag:function(){var t=this;return 0===this.dragHandlers.length&&(this.dragHandlers=[]),this.dragHandler=new Drag(this.element,{handle:this.dragHandlers,snap:3,limit:{x:this.options.dragLimitX,y:this.options.dragLimitY},onStart:this.fireEvent.bind(this,"onDragStart"),onDrag:this.fireEvent.bind(this,"onDrag"),onComplete:this.fireEvent.bind(this,"onDragComplete")}),this.addEvent("onDragComplete",function(){t.adaptLocation()}),this},enableElementDrag:function(t){if(null!==t)return this.dragHandler=new Drag(this.element,{handle:t,snap:3,limit:{x:this.options.dragLimitX,y:this.options.dragLimitY},onStart:this.fireEvent.bind(this,"onDragStart"),onDrag:this.fireEvent.bind(this,"onDrag"),onComplete:this.fireEvent.bind(this,"onDragComplete")}),this.addEvent("onDragComplete",this.adaptLocation.bind(this)),this},disableDrag:function(){return this.dragHandler&&this.dragHandler.detach(),this}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({_initLocation:function(){for(var t=["left","top","right","bottom"],e=this.getInitialLocation(),i=0;i<t.length;i++)e[t[i]]&&(this.options[t[i]]=e[t[i]]);this.element.setStyles(e)},setLocation:function(t,e,i){var n=this.options,s=this.element;return this.element.left=t||n.left||s.getCoordinates().x,this.element.top=e||n.top||s.getCoordinates().y,this.element[i?"morph":"setStyles"]({top:this.element.top,left:this.element.left}),this},getCenterLocation:function(){var t={},e=this.options.height;return"auto"!=this.options.height?t.top=(window.getHeight()-e.toInt())/2:t.top=160,t.left=(window.getWidth()-this.options.width.toInt())/2,t},getInitialLocation:function(){if(this.options.top||this.options.right||this.options.bottom||this.options.left)return{top:this.options.top,bottom:this.options.bottom,left:this.options.left,right:this.options.right};if("center"==this.options.location)return this.getCenterLocation();var t=this.controller.getCascadeLocation(this);return{top:t.top,left:t.left}},adaptLocation:function(){var t={},e=!1,i=this.element.getCoordinates();i.top.toInt()>window.getHeight()&&(t.top=window.getHeight()-Number.random(25,75),e=!0),i.top.toInt()<0&&(t.top=50,e=!0),i.left.toInt()+this.element.getStyle("width").toInt()<0&&(t.left=Number.random(25,75)-this.element.getStyle("width").toInt(),e=!0),this.element.getStyle("left").toInt()>window.getWidth()&&(t.left=window.getWidth()-Number.random(25,75),e=!0),e&&this.options.fx&&this.options.fx.adaptLocation&&(this.reposFx||(this.reposFx=new Fx.Morph(this.element,this.options.fx.adaptLocation)),this.reposFx.start(t))}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({options:{resizer:{class:"ui-resizer"},resizable:!1,resizeLimitX:[100,screen.width],resizeLimitY:[100,screen.height]},_initResizer:function(){this.resizeHandlers=[];var t=new Element("div",{class:"layer-resizer"}).inject(this.element,"bottom");this.resizer=new Element("div",this.options.resizer).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop()}}).inject(t,"bottom"),this.resizeHandlers.push(this.resizer),this.enableResize(0),this.options.resizeBorders&&this.options.resizeBorders.each(function(e,i){this.resizeHandlers.push(new Element("div",{style:e+": 0",class:"ui-resizer-"+e}).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop()}}).inject(t,"top")),this.enableResize(i+1)},this)},enableResize:function(t){var e=this,i={handle:this.resizeHandlers[t],limit:{x:e.options.resizeLimitX,y:e.options.resizeLimitY},modifiers:{x:"width",y:"height"},onStart:function(t){e.fireEvent("resizeStart",t)},onDrag:function(t,i){e.fireEvent("resizeDrag",[t,i]),e.fireEvent("resize",t)},onComplete:function(t){e.fireEvent("resizeComplete",t)}};return 1!==t&&3!==t||(i.modifiers.x=!1),2!==t&&4!==t||(i.modifiers.y=!1),1!==t&&4!==t||(this.dragHandlers.push(this.resizeHandlers[t]),i.invert=!0),this.element.makeResizable(i),this}})},,,,,,,,,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),o=n(s);e.default=new Class({Extends:o.default,options:{name:"text",klass:"ui-text",tag:"span",text:"&nbsp;",emboss:!1,selectable:!1},_initElement:function(){this.parent(),this.options.text&&this.set(this.options.text)},set:function(t,e){void 0===e&&(e=t,t="text"),"text"==t&&this.element.set("html",e)}})}])});