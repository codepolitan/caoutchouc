!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ViewContainer",[],e):"object"==typeof exports?exports.ViewContainer=e():(t.caoutchouc=t.caoutchouc||{},t.caoutchouc.ViewContainer=e())}(this,function(){return webpackJsonpcaoutchouc__name_([10,0],[function(t,e,i){t.exports=i(28)},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(10),o=n(s),a=i(8),r=n(a),d=__debug("ui:control-button");e.default=new Class({Extends:o.default,name:"button",options:{name:"button",type:null,ink:!0,element:{tag:"span"},binding:{_list:["element"],element:{"sensor.click":"_onClick","sensor.dblclick":"_onDblClick","sensor.mousedown":"_onMouseDown","sensor.mouseup":"_onMouseUp","sensor.mouseleave":"_onMouseLeave"}}},set:function(){},_initElement:function(){this.parent();var t=this.options,e=t.type;t.text=t.text||t.n,null===e&&(e="icon-text"),t.name&&this.element.set("data-name",t.name),d.debug("title",this.element,t.text),this.element.set("title",t.text),t.icon&&this._initIcon(e,t.icon||t.name),t.text&&this._initText(e),t.ink?this._initSensor():this.sensor=this.element},_initIcon:function(t,e){d.debug("_initIcon",t,e);var i="span",n=e,s=null,o={class:"ui-icon"};this.icon=new Element(i,o).inject(this.element),r.default[e]&&(d.debug("icon font name",e),s="icon-font",n=r.default[e]),s&&this.icon.addClass(s),n&&this.icon.addClass(n)},_initText:function(t){var e=this.options,i="span",n="bottom";"text-icon"===t&&(n="top"),this.text=new Element(i,{class:"ui-text",html:e.text}).inject(this.element,n)},_initClass:function(){var t=this.options;this.options.isPrimary&&this.element.addClass("is-primary"),this.options.klss&&this.element.addClass(t.klss),this.options.type&&this.element.addClass("type-"+this.options.type),this.element.addClass(t.prefix+this.name),this.options.clss&&this.element.addClass(this.options.clss)},_initSensor:function(){d.debug("_initSensor");var t="div";this.sensor=new Element(t,{class:"ui-sensor"}).inject(this.element)},_touchInk:function(t,e,i,n){var s=n.height,o=0,a=1e3;this.ink=t,n.width>s&&(s=n.width,o=(n.height-n.width)/2);var r=new Fx.Morph(t,{duration:a,link:"chain",transition:Fx.Transitions.Quart.easeOut});r.start({height:s,width:s,left:0,top:o,opacity:0}),function(){t.destroy()}.delay(a)},_onClick:function(t){d.debug("_onElementClick",t);var e=this.options;t.stopPropagation(),e.emit&&"disabled"!==this.state&&this.fireEvent(e.emit),this.fireEvent("press",e.emit),this.fireEvent("pressed",e.emit),e.call&&"disabled"!==this.state&&e.call()},_onDblClick:function(t){var e=this.options;t.stop(),e.emit&&"disabled"!==this.state&&this.fireEvent("dblpress",e.emit),this.fireEvent("dblpressed",e.emit)},_onMouseDown:function(t){if(t.stop(),"disabled"!==this.state){var e=t.event.offsetX,i=t.event.offsetY,n=this.element.getCoordinates(this.element),s=this.ink=new Element("span",{class:"ui-ink",styles:{left:e,top:i}}).inject(this.element,"top");this._touchInk(s,e,i,n),this.fireEvent("mousedown")}},_onMouseLeave:function(t){d.debug("_onMouseLeave",t)},_onMouseEnter:function(t){d.debug("_onElementMouseDown",t)},_onMouseUp:function(t){d.debug("_onElementMouseUp",t),"check"===this.options.type&&("checked"===this.state?this.setState(null):this.setState("checked"))}})},,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(9),o=n(s),a=i(7),r=n(a),d=i(12),l=n(d),h=i(11),c=n(h),u=i(13),m=n(u),f=__debug("ui-component");e.default=new Class({Implements:[Events,Options,o.default,r.default,l.default,c.default,m.default],name:"component",component:"component",options:{lib:"ui",prefix:"ui-",component:"component",name:"component",type:null,element:{attr:["class","styles","events","id","name","html","title"],tag:"span",type:null}},initialize:function(t){return this.setOptions(t),this.fireEvent("init"),this._initOptions(),this._initElement(),this._initEvents(),this._initBinding(),this},setState:function(t){return f.debug("setState",t,this),this.element.removeClass("state-"+this.state),t&&this.element.addClass("state-"+t),this.state=t,this.fireEvent("state",t),this},addComponent:function(t){f.debug("addComponent",t),t.component||(t.component="container"),t.container=this.element,t.main=this.main;var e=new(UI[t.component.capitalize()])(t);this.addEvent("resize",function(){e.fireEvent("resize")}),this.node.push(e),this.layout[this.main][e.name]=e},_initOptions:function(){var t=this.options;this.main=t.main||t.name,this.layout=t.layout||{},this.layout[this.main]=this.layout[this.main]||{},this.dragHandlers=t.dragHandlers||[]},_initState:function(){this.options.state&&this.setState(this.options.state)},_initElement:function(){f.debug("_initElement");var t=this.options;this.fireEvent("create"),this._initElementType();var e=this._initProps(),i=t.tag||t.element.tag,n=new Element(i,e);n.store("_instance",this),this.element=n,this.content=n,this.fireEvent("created"),t.container&&"window"!==t.container&&(this.inject(t.container),this.fireEvent("injected")),this._initState(),this._initClass()},_initProps:function(){f.debug("_initProps");for(var t=this.options,e={},i=["id","name","type","klass","styles","html","title","events"],n=0;n<i.length;n++){var s=i[n];"klass"===s&&(s="class"),t.element.attr[s]&&(e[s]=t.element.attr[i[n]])}return e},_initElementType:function(){},_initClass:function(){var t=this.options,e=t.klass||t.element.klass;e&&this.element.addClass(e),t.type&&void 0!==typeOf(t.type)&&this.element.addClass("type-"+t.type),t.state&&void 0!==typeOf(t.state)&&this.element.addClass("state-"+t.state)},_initEvents:function(){var t=this,e=this.options;this.addEvents({injected:function(){e.resizable&&t._initResizer&&t._initResizer()},device:function(e){t.device=e}}),this.options.draggable&&this.enableDrag&&this.enableDrag()},getName:function(){return this.options.name||this.name},setHtmlContent:function(t){return this.content.set("html",t),this.fireEvent("loadComplete"),this.fireEvent("resize"),this},setContent:function(t){return this.content.set("html",t),this.fireEvent("resize"),this},inject:function(t,e){return f.debug("inject",t,e),this.fireEvent("inject"),"element"===typeOf(t)?this.container=t:"object"===typeOf(t)&&t.element&&(this.container=t.element),t&&"window"!==t.component&&this.element.inject(this.container,e),this.setSize&&this.setSize(),this.isInjected=!0,this.fireEvent("injected"),this}})},,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),o=n(s),a=i(19),r=n(a),d=__debug("ui-container");e.default=new Class({Extends:o.default,Implements:[Options,Events,r.default],name:"container",options:{name:"container",node:null,tag:"div"},initialize:function(t){return this.parent(t),d.debug("initialize",this.options),this.options.comp?this._initComp(this.options.comp):this._initComponent(),this},_initElement:function(){this.parent(),d.debug("_initElement",this);var t=this.options;this.menu={},t.head&&this._initHead(t.head),t.menu&&this.setMenu(t.menu),"window"===this.name&&this._initBody(),t.useOverlay&&this._initOverlay(),t.foot&&this._initFoot(t.foot);var e=this;this.addEvent("injected",function(){var t=e.container.getStyle("flex-direction");d.debug("direction",t,this.element)}),this.options.useUnderlay&&this._initUnderlay()},_initComponent:function(){var t=this.options;if(null!==t.node)if(d.debug("_initComponent",t.node),this.node=[],"array"===typeOf(t.node))for(var e=0;e<t.node.length;e++)this.addComponent(t.node[e]);else if("object"===typeOf(t.node)){var i=t.node;this.addComponent(i)}},_initComp:function(t){d.debug("_initComp",t);var e=this;"string"===typeOf(t)?this.addComp(t):"object"===typeOf(t)?d.debug("object"):"array"===typeOf(t)&&t.each(function(t){e.addComp(t)})},addComp:function(t,e,i){if(d.debug("addComp",t,e,i),e=e||"bottom",i=i||this.element,!i)return void d.warn("container is",i);var n=this[t]=new Element("div").addClass("container-"+t).inject(i,e);return n},_initClass:function(){this.parent(),this.element.addClass("ui-container")},_initHead:function(){var t=this;this.head=new Element("div").addClass("container-head").inject(this.element,"top").addEvent("dblclick",function(){t.fireEvent("max")})},setTitle:function(t){if(this.title&&this.head)return this.title.set("text",t)},getTitle:function(){if(this.title)return this.title.get("html")},_initFoot:function(){this.foot=new Element("div",{class:"container-foot"}).inject(this.element,"bottom")},_initStatus:function(t){t=t||"foot",this[t]||this["_init"+t.capitalize()](),this.status=new Element("div",{class:"container-status"}).inject(this[t])},_initOverlay:function(){var t=this;this.overlay=new Element("div",{class:"container-overlay"}).inject(this.element),this.addEvent("onLoadComplete",function(){this.overlay.hide()}),this.overlay.hide(),this.addEvents({onBlur:function(){t.overlay.show()},onDragComplete:function(){t.overlay.hide()},onDragStart:function(){t.overlay.show()},onResizeComplete:function(){t.overlay.hide(),this.coord=this.element.getCoordinates()},onResizeStart:function(){t.overlay.show()},resizeStart:function(){t.overlay.show()},resizeStop:function(){t.overlay.hide()}})},_initUnderlay:function(){var t=this;this.underlay=new Element("div",{class:"dialog-underlay",styles:{zIndex:10}}).inject(this.element,"before"),this.underlay.addEvent("click",function(){d.debug("click underlay"),t.minimize()}),this.addEvent("close",function(){t.underlay.destroy()})},focus:function(){this.setState("focus")}})},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({toElement:function(){return this.element},show:function(){return this.fireEvent("show"),this.element.show(),this},hide:function(){return this.fireEvent("hide"),this.element.hide(),this},fade:function(t){return this.fireEvent("fade"),this.element.fade(t),this},getStyle:function(t){return this.element.getStyle(t)},getSize:function(){if("object"==typeOf(this.element))return this.element.getSize()},getComputedSize:function(){return this.element.getComputedSized()},getCoordinates:function(t){return this.element.getCoordinates(t)},addClass:function(t){return this.element.addClass(t),this},removeClass:function(t){return this.element.removeClass(t)},get:function(t){return this.element.get(t)},morph:function(t){return this.element.morph(t)},setSize:function(t,e){return this.element.x=t||this.options.width,this.element.y=e||this.options.height,this.element.x&&this.element.setStyle("width",this.element.x),this.element.y&&this.element.setStyle("height",this.element.y),this.fireEvent("resize"),this},setStyle:function(t,e){return this.element.setStyle(t,e),this},setStyles:function(t){return this.element.setStyles(t),this},getElement:function(t){return this.element.getElement(t)},getElements:function(t){return this.element.getElements(t)},submit:function(t){return this.element.submit(t)},dispose:function(){return this.element.dispose()},destroy:function(){this.element.destroy()}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={validator:"minimal-icon-thumbs-up",subcribe:"mdi-content-mail",resendClosure:"mdi-content-mail",resendApproval:"mdi-content-mail",beat:"mdi-image-flash-on",invite:"mdi-maps-local-post-office",ticket:"mdi-action-input",listtype:"mdi-action-view-module",grid:"mdi-action-list",stream:"mdi-action-view-stream",three:"mdi-maps-map",folder:"mdi-file-folder-open",column:"mdi-action-view-column",history:"mdi-action-history",savedraft:"mdi-action-done",approve:"mdi-action-done",reject:"mdi-navigation-cancel",setPending:"mdi-av-timer",submit:"mdi-action-done",favorite_o:"mdi-action-favorite-outline",favorite:"mdi-action-favorite",addnode:"mdi-content-add-box",launcher:"mdi-notification-vibration",desktop:"mdi-action-open-in-browser",tablet:"mdi-hardware-tablet",phone:"mdi-hardware-smartphone",infoview:"mdi-action-info-outline",editinfo:"mdi-av-explicit",infoedit:"mdi-av-explicit",organize:"mdi-editor-format-line-spacing",repair:"fa-wrench",process:"fa-wrench",emptyNode:"icon-trash-o",processView:"icon-trash-o",emptyView:"icon-trash-o",screenshot:"mdi-image-camera",notification:"mdi-social-notifications",clear:"mdi-action-highlight-remove",navi:"mdi-navigation-menu",list:"mdi-navigation-menu",side:"mdi-navigation-menu",share:"mdi-social-share",info:"mdi-action-info",more:"mdi-navigation-more-vert",space:"mdi-navigation-more-horiz",duplicate:"mdi-content-content-copy",separator:"undefined",add:"mdi-content-add",addOne:"mdi-social-plus-one",people:"mdi-social-group",print:"mdi-action-print",power:"mdi-power",proforma:"mdi-action-print",user:"mdi-action-account-circle",apps:"mdi-navigation-apps",zoomOut:"mdi-content-remove-circle-outline",zoomIn:"mdi-content-add-circle-outline",date:"mdi-action-event",today:"mdi-action-today",fixed:"mdi-action-schedule",talk:"mdi-communication-chat",replan:"mdi-action-schedule",complete:"mdi-action-done",ship:"mdi-maps-flight",cancelCase:"mdi-navigation-cancel",cancelChange:"mdi-navigation-cancel",mailing:"icon-envelope",send:"mdi-content-send",openinnew:"mdi-action-open-in-new",switchapp:"mdi-action-open-in-new",look:"mdi-image-remove-red-eye",preview:"mdi-image-remove-red-eye",code:"mdi-image-remove-red-eye",save:"icon-envelope",recipients:"minimal-icon-list-all",move:"mdi-action-open-with",insert:"mdi-navigation-check",publish:"mdi-editor-publish",generateURL:"icon-level-down",publishAll:"mdi-action-done-all",forward:"mdi-navigation-arrow-forward",previous:"mdi-navigation-arrow-back",next:"mdi-navigation-arrow-forward",nextstep:"mdi-navigation-arrow-forward",back:"mdi-navigation-arrow-back",reload:"mdi-navigation-refresh",SLSync:"mdi-navigation-refresh",participant:"mdi-content-add",search:"mdi-action-search",settings:"mdi-action-settings",properties:"mdi-action-settings-applications",upload:"mdi-file-cloud-upload",searchField:"mdi-action-search",invoice:"minimal-icon-barcode",edit:"mdi-editor-mode-edit",filter:"mdi-content-filter-list",trash:"mdi-action-delete",delete:"mdi-navigation-cancel",editmove:"mdi-editor-format-line-spacing",position:"mdi-editor-format-line-spacing",moveup:"mdi-hardware-keyboard-arrow-up",movedown:"mdi-hardware-keyboard-arrow-down",orderSession:"mdi-content-add",choose:"mdi-action-done",sync:"mdi-notification-sync",export:"mdi-file-file-download",download:"mdi-file-file-download",sort:"mdi-content-sort",minus:"mdi-content-remove-circle-outline",showAll:"mdi-action-list",restore:"mdi-action-restore",apply:"mdi-action-done",cancel:"mdi-navigation-close",close:"mdi-navigation-close",tracker:"mdi-action-track-changes",contact:"mdi-action-perm-contact-cal",collapse:"mdi-navigation-unfold-less",uncollapse:"mdi-navigation-unfold-more",checked:"mdi-check-box",sprints:"mdi-action-run",package:"mdi-package",planning:"mdi-calendar-clock",notes:"mdi-app-notes",files:"mdi-app-files",news:"mdi-app-news",template:"mdi-app-template"}},function(t,e,i){!function(e,i){t.exports=i()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"undefined"==typeof window&&(Class=i(!function(){var t=new Error('Cannot find module "primish"');throw t.code="MODULE_NOT_FOUND",t}()),Events=i(!function(){var t=new Error('Cannot find module "primish/emitter"');throw t.code="MODULE_NOT_FOUND",t}())),e.default=new Class({Implements:[Events],options:{api:{emit:"trigger"}},initialize:function(){var t=this;this.addEvent("initReady",function(){t._initBinding.bind(this)()})},_initBinding:function(t){if(t=t||this.options.controller||this.options.binding,this.binding=this.binding||{},t){if(!t._list)return void this._bindObject(t);for(var e=t._list,i=0;e.length>i;i++){var n=t[e[i]];this.binding=this.binding||{},this._bindObject(n)}return this.fireEvent?this.fireEvent("bindingsReady"):this.trigger&&this.trigger("bindingsReady"),this.binding}},_bindObject:function(t){for(var e in t)if(t.hasOwnProperty(e)){var i=t[e];"object"!==("undefined"==typeof i?"undefined":n(i))?this._bindkey(e,i):this._bindList(e,i)}},_bindList:function(t,e){for(var i=0;i<e.length;i++)this._bindkey(t,e[i])},_bindkey:function(t,e){var i=t.split("."),s=i[i.length-1];i.pop();var o=this._path(i.join(".")),a=this._getObj(o,e);if(a){for(var r in a)if(a.hasOwnProperty(r)){var d=i.join(".")+"."+r+"."+s;this._bindkey(d,e)}}else{var l;if("object"===("undefined"==typeof e?"undefined":n(e))){for(var h in e)if(e.hasOwnProperty(h))break;l=this._processKeyObj(h,e),e=h}var c=e.split(".");if(c[c.length-2]===this.options.api.emit){var u=c[c.length-1];this._bindEvent(o,s,u,e)}else this._bindMethod(o,s,e,l)}},_processKeyObj:function(t,e){for(var i=e[t],n=0;n<i.length;n++){var s=i[n];"this"===s.split(".")[0]&&(s=s.split("."),s.shift(),i[n]=this._path(s.join(".")))}return i},_bindEvent:function(t,e,i,n){var s=this.options.api.emit,o=n.split("."),a=o[o.length-1];o.splice(-2,2);var r=this._path(o.join(".")),d=this._getObj(r,n);if(d){for(var l in d)if(d.hasOwnProperty(l)){var h=o.join(".")+"."+l+"."+s+"."+a;this._bindEvent(t,e,i,h)}}else t&&t.addEvent&&r&&r.fireEvent?t.addEvent(e,r.fireEvent.bind(r,i)):t&&t.on&&r&&r.fireEvent?t.on(e,r.fireEvent.bind(r,i)):console.warn("missing context or method",t,n,this)},_bindMethod:function(t,e,i,n){var s=this._path(i),o=i.split(".");o.pop();var a=this._path(o.join(".")),r=this._getObj(a,i);if(r){for(var d in r)if(r.hasOwnProperty(d)){var l=o.slice(0,2).join(".");l=i.replace(l,l+"."+d),this._bindMethod(t,e,l,n)}}else t&&t.addEvent&&s?(n?t.addEvent(e,s.bind(a,n)):t.addEvent(e,s.bind(a)),this.binding[e]=s):t&&t.on&&s?(this.binding[e]=s,t.on(e,s.bind(a))):console.warn("missing context or method",t,i,this)},_path:function(t){if(!t)return this;if(!t.match(/\./))return this[t];for(var e,i=t.split("."),n=0,s=i.length;n<s;n++){var o=i[n];e=e||this,e=e[o]}return e},_getObj:function(t,e){if(t&&t.constructor&&"Object"===t.constructor.name){for(var i in t)if(t.hasOwnProperty(i))break;if(e.indexOf(i)!==-1)return;return t}}})}])})},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),o=n(s),a=__debug("ui:control");e.default=new Class({Extends:o.default,options:{error:!1},isEnable:function(){return"disabled"!==this.state},isActive:function(){return"active"===this.state},_initOptions:function(){this.parent();var t=this.options;this.value=t.value,this.readonly=t.read},_initEvents:function(){var t=this;this.element.addEvents({click:function(e){a.debug("click",e),t.fireEvent("click")},mouseup:function(){t.fireEvent("mouseup")}})}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({options:{draggable:!1,dragLimitX:!1,dragLimitY:!1,dragHandlers:[],fx:{adaptLocation:{duration:200,wait:!0}}},enableDrag:function(){var t=this;return 0===this.dragHandlers.length&&(this.dragHandlers=[]),this.dragHandler=new Drag(this.element,{handle:this.dragHandlers,snap:3,limit:{x:this.options.dragLimitX,y:this.options.dragLimitY},onStart:this.fireEvent.bind(this,"onDragStart"),onDrag:this.fireEvent.bind(this,"onDrag"),onComplete:this.fireEvent.bind(this,"onDragComplete")}),this.addEvent("onDragComplete",function(){t.adaptLocation()}),this},enableElementDrag:function(t){if(null!==t)return this.dragHandler=new Drag(this.element,{handle:t,snap:3,limit:{x:this.options.dragLimitX,y:this.options.dragLimitY},onStart:this.fireEvent.bind(this,"onDragStart"),onDrag:this.fireEvent.bind(this,"onDrag"),onComplete:this.fireEvent.bind(this,"onDragComplete")}),this.addEvent("onDragComplete",this.adaptLocation.bind(this)),this},disableDrag:function(){return this.dragHandler&&this.dragHandler.detach(),this}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({_initLocation:function(){for(var t=["left","top","right","bottom"],e=this.getInitialLocation(),i=0;i<t.length;i++)e[t[i]]&&(this.options[t[i]]=e[t[i]]);this.element.setStyles(e)},setLocation:function(t,e,i){var n=this.options,s=this.element;return this.element.left=t||n.left||s.getCoordinates().x,this.element.top=e||n.top||s.getCoordinates().y,this.element[i?"morph":"setStyles"]({top:this.element.top,left:this.element.left}),this},getCenterLocation:function(){var t={},e=this.options.height;return"auto"!=this.options.height?t.top=(window.getHeight()-e.toInt())/2:t.top=160,t.left=(window.getWidth()-this.options.width.toInt())/2,t},getInitialLocation:function(){if(this.options.top||this.options.right||this.options.bottom||this.options.left)return{top:this.options.top,bottom:this.options.bottom,left:this.options.left,right:this.options.right};if("center"==this.options.location)return this.getCenterLocation();var t=this.controller.getCascadeLocation(this);return{top:t.top,left:t.left}},adaptLocation:function(){var t={},e=!1,i=this.element.getCoordinates();i.top.toInt()>window.getHeight()&&(t.top=window.getHeight()-Number.random(25,75),e=!0),i.top.toInt()<0&&(t.top=50,e=!0),i.left.toInt()+this.element.getStyle("width").toInt()<0&&(t.left=Number.random(25,75)-this.element.getStyle("width").toInt(),e=!0),this.element.getStyle("left").toInt()>window.getWidth()&&(t.left=window.getWidth()-Number.random(25,75),e=!0),e&&this.options.fx&&this.options.fx.adaptLocation&&(this.reposFx||(this.reposFx=new Fx.Morph(this.element,this.options.fx.adaptLocation)),this.reposFx.start(t))}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({options:{resizer:{class:"ui-resizer"},resizable:!1,resizeLimitX:[100,screen.width],resizeLimitY:[100,screen.height]},_initResizer:function(){this.resizeHandlers=[];var t=new Element("div",{class:"layer-resizer"}).inject(this.element,"bottom");this.resizer=new Element("div",this.options.resizer).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop()}}).inject(t,"bottom"),this.resizeHandlers.push(this.resizer),this.enableResize(0),this.options.resizeBorders&&this.options.resizeBorders.each(function(e,i){this.resizeHandlers.push(new Element("div",{style:e+": 0",class:"ui-resizer-"+e}).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop()}}).inject(t,"top")),this.enableResize(i+1)},this)},enableResize:function(t){var e=this,i={handle:this.resizeHandlers[t],limit:{x:e.options.resizeLimitX,y:e.options.resizeLimitY},modifiers:{x:"width",y:"height"},onStart:function(t){e.fireEvent("resizeStart",t)},onDrag:function(t,i){e.fireEvent("resizeDrag",[t,i]),e.fireEvent("resize",t)},onComplete:function(t){e.fireEvent("resizeComplete",t)}};return 1!==t&&3!==t||(i.modifiers.x=!1),2!==t&&4!==t||(i.modifiers.y=!1),1!==t&&4!==t||(this.dragHandlers.push(this.resizeHandlers[t]),i.invert=!0),this.element.makeResizable(i),this}})},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(20),o=n(s),a=i(5),r=n(a),d=i(1),l=n(d),h=__debug("ui-window").defineLevel();e.default=new Class({Extends:r.default,name:"window",options:{name:"window",title:"Window",container:$(document.body),context:"top",content:!0,width:220,height:360,location:"center",position:"fixed",zIndex:"auto",tag:"div",head:!0,view:{},foot:{class:"ui-foot"},controls:["minimize","maximize","close"],useEffects:!1,focus:!0,draggable:!0,dragHandlers:["head","foot"],useUnderlay:!0,useOverlay:!0,hideOnDrag:!0,resizable:!0,resizeLimitX:[160,screen.width],resizeLimitY:[260,screen.height],resizeOnDragIfMaximized:!1,resizeBorders:["top","right","bottom","left"]},initialize:function(t){this._initController(),this.parent(t),this._initLocation(),this.adaptLocation(),"fixed"==this.options.position&&this.element.setStyle("position","fixed"),this.controller.register(this),this.options.focus&&this.controller.focus(this);var e=this;window.onresize=function(t){e.controller.resetMinimized()},this.inject(this.options.container)},_initController:function(){this.controller=new o.default},_initElement:function(){this.parent()},_initShim:function(){this.shim=new Element("iframe",{src:'javascript:false;document.write("");',scrolling:"no",frameborder:0,styles:{top:0,left:0,zIndex:"1",position:"absolute",border:"none",filter:"progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)"},class:"iframeShim"}).inject(this.element,"top").store("IframeShim",this)},_initHead:function(t){this.parent(t),this.dragHandlers.push(this.head)},_initControl:function(){var t=this.options;if(this.head&&this.options.controls){var e=this;this.controls=new Element("div",{class:t.name+"-control"}).addEvent("click",function(t){t.stop()}).inject(this.head),t.controls.each(function(t){new l.default({icon:t,text:t,klss:"button-"+t}).addEvent("press",function(i){h.debug("press",i),e.control(t)}).inject(e.controls)}),this.addEvents({minimize:function(){this.controls.hide()},normalize:function(){this.controls.show()}}),this.dragHandlers.push(this.controls)}},_initBody:function(t){this.fireEvent("resize"),this.body=new Element("div").addClass("container-body").inject(this.element),this.addEvents({minimize:function(){this.body.hide()},normalize:function(){this.body.show()}})},_initFoot:function(t){this.parent(t),this.dragHandlers.push(this.foot),this.addEvents({minimize:function(){this.body.hide()},normalize:function(){this.body.show()}})},setTitle:function(t){},_initClass:function(){this.parent(),this.element.addClass("ui-window")},_initEvents:function(){this.parent();var t=this;this.addEvents({onFocus:function(){},injected:function(){t.adaptLocation()},onResizeStart:function(){},onResizeComplete:function(){this.coord=this.element.getCoordinates()},onDragStart:function(){},onDragComplete:function(){this.coord=this.element.getCoordinates()},resizeComplete:function(){t.maximized=!1,this.coord=this.element.getCoordinates()}}),this.element.addEvents({mousedown:function(){t.focus()}}),this.resizeHandlers&&this.resizeHandlers.each(function(e){e.addEvents({mousedown:function(){t.controller.showunderlay(t),t.overlay.show()},mouseup:function(){t.underlay.hide(),t.overlay.hide()}})})},_initUnderlay:function(){var t=this,e=this.options.container||$(document.body);this.underlay=new Element("div",{class:"dialog-underlay"}).inject(e),this.underlay.addEvents({mousedown:function(){t.element.addClass("reveal-window")},mouseup:function(){t.element.removeClass("reveal-window")}}),this.underlay.show(),this.addEvent("close",function(){t.underlay.destroy()})},focus:function(){this.minimized?(this.normalize(),this.controller.resetMinimized()):this.maximized&&this.options.resizeOnDragIfMaximized?this.normalize():this.controller.focus(this),this.overlay.hide(),"default"!=this.state&&this.setState("default")},control:function(t){return this[t](),this},minimize:function(){this.fireEvent("minimize"),this.disableDrag(),this.coord=this.element.getCoordinates(),this.maximized=!1,this.minimized=!0,this.setState("minimized");var t=this.controller.getcoord("minimized");this.element.setStyles(t),this.controller.focus()},maximize:function(){return this.maximized?this.normalize():(this.coord=this.element.getCoordinates(),this.max=this.container.getCoordinates(),this.setState("maximized"),this.setStyles({position:"absolute",width:"100%",height:"100%",top:0,left:0,right:0,bottom:0}),this.minimized=!1,this.maximized=!0),this},normalize:function(){var t=this;return this.fireEvent("normalize"),this.element.setStyles(this.coord),this.setState("default"),this.maximized=!1,this.minimized=!1,function(){t.enableDrag()}.delay(1e3),this},storeCoordinates:function(){this.coord=this.element.getCoordinates()},close:function(){return this.controller.close(this),this.fireEvent("closed"),this}})},,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=__debug("ui-container-display").defineLevel();e.default=new Class({options:{display:{fx:{default:{duration:160,transition:"sine:out",link:"cancel"},minimize:{duration:160,transition:"sine:out",link:"cancel"}}}},_initDisplay:function(){i.debug("_initDisplay",this.element),this._modifier="width";var t=this.container.getStyle("flex-direction");"column"===t&&(this._modifier="height");var e=this,n=this.options.display,s=n.fx.default,o=this._modifier;return this[o]||(this[o]=this.options.size||320),this.device=this.device||"desktop",this.display={},s.property=o,this.display.fx=new Fx.Tween(this.element,s).addEvent("complete",function(){e.fireEvent("toggled")}),this.display},getDisplay:function(){return this._display},setDisplay:function(t){return this._display=t,this},toggle:function(){return i.debug("toggle",this._display),"normalized"===this._display?this.minimize():this.normalize(),this._display},close:function(){i.debug("close"),this.minimize()},minimize:function(t){i.debug("start minimalization",this.device),this.display||this._initDisplay(),this.fireEvent("minimize"),t?this.element.setStyle(this._modifier,0):this.display.fx.start(0),this._display="minimized",this.underlay&&"desktop"!==this.device&&this.underlay.fade(0),this.fireEvent("display","minimized")},normalize:function(){i.debug("normalize"),this.display||this._initDisplay(),this.fireEvent("normalize");var t=this[this._modifier]||this.options.size,e=window,n=document,s=n.documentElement,o=n.getElementsByTagName("body")[0],a=e.innerWidth||s.clientWidth||o.clientWidth;a<640&&(t=a),this.display.fx?this.display.fx.start(t):this.element.setStyle(this._modifier,t),this.underlay&&"desktop"!==this.device&&(this.underlay.show(),this.underlay.fade(1)),this._display="normalized",this.fireEvent("display","normalized")},maximize:function(){i.debug("maximize")}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=__debug("ui-controller").defineLevel();e.default=new Class.Singleton({Implements:[Options,Events],options:{version:"0.1",zBase:1e3,zStep:2,container:document.body,cascade:{start:{x:51,y:101},step:{x:20,y:20},offset:[170,50]},stack:{offset:{x:16,y:16}},underlay:{},minimized:{coord:{width:160,height:50,bottom:-10,left:32,offset:{x:16}}},maximized:{coord:{width:960,height:760,top:"auto",left:"auto"}},normalized:{coord:{width:220,height:360,bottom:10,top:"auto",left:""}}},initialize:function(t){this.setOptions(t),this.init(this.options.container)},init:function(t){this.container=t,this.list=[],this.zIndex=this.options.zBase,this.group={},window.addEvent("resize",function(){this.resizeMaximizedWindow()}.bind(this))},register:function(t,e){this.list.push(t),e&&(this.group[e]&&(this.group[e]=[]),this.group[e].push(t)),"auto"===t.options.zIndex?(t.element.setStyle("zIndex",this.zIndex),t.underlay&&t.underlay.setStyle("zIndex",this.zIndex-1),t.altitude=this.zIndex):(i.debug("zINdex",t.element,t.options.zIndex),t.element.setStyle("zIndex",t.options.zIndex),t.underlay&&(i.debug("---",t.options.zIndex-1),t.underlay.setStyle("zIndex",t.options.zIndex-1))),this.zIndex+=this.options.zStep},close:function(t){t=t||this.active,t.hide(),t.fireEvent("onClose");for(var e=this.list.length-1;e>=0;e--)this.list[e]==t&&(t.destroy(),delete this.list[e],this.list=this.list.clean());this.focus()},focus:function(t){if(!t){for(var e=0,i=this.list.length-1;i>=0;i--){var n=this.list[i].element.getStyle("zIndex");n>=e&&!this.list[i].minimized&&(t=this.list[i],e=n)}return void(t&&t.focus())}if(t&&this.active!==t)return this.active&&!this.active.minimized&&this.blur(this.active),this.zIndex+=this.options.zStep,t.element.style.zIndex=this.zIndex,t.underlay&&(t.underlay.style.zIndex=this.zIndex-1),t.element.style.zoom="1",this.active=t,t.fireEvent("focus"),void(t.grid&&this.list.each(function(e){
t.setStyles(coord)}))},blur:function(t){null===t||t.minimized?this.active&&this.blur(this.active):(t.setState("inactive"),t.fireEvent("onBlur"))},minimize:function(t){var e=t||this.active;e.minimize()},getcoord:function(t){var e=this.options,i=0,n=e[t].coord;return i+=n.left,this.list.each(function(e,s){e.state===t&&(i+=n.width+n.offset.x)}),{width:n.width,height:n.height,bottom:n.bottom,top:"auto",left:i}},resetMinimized:function(){var t="minimized",e=this.options,i=e[t].coord,n=0,s=i.bottom;this.list.each(function(t,e){"minimized"===t.state&&(n+=i.width+i.offset.x,t.setLocation(n,s))})},resizeMaximizedWindow:function(){this.list.each(function(t){"maximized"===t.state&&t.setSize({height:window.getHeight()-32,width:window.getWidth()})})},getCascadeLocation:function(t){var e={left:71,top:121};return this.list.each(function(t,i){"minimized"!=t.state&&"cascade"==t.options.location&&(e.left+=this.options.cascade.step.x,e.top+=this.options.cascade.step.y)},this),e},cascade:function(t){var e,i=[51,101],n=[20,20],s=this.zIndex,o=[];o=t?this.group:this.list,o.each(function(t){"minimized"!==t.state&&(t.element.style.zIndex=s++,i[0]+=n[0],i[1]+=n[1],t.element.morph({left:i[0],top:i[1]}),t.location="cascade",e=t)}),this.zIndex=s},circle:function(t){var e=[200,300],i=[],n=200,s=this.zIndex,o=1,a=this.list.length;this.list.each(function(t){t.element.style.zIndex=s++,t.element.style.zoom="1";var r=o/a*2;i[0]=Math.cos(r*Math.PI),i[1]=Math.sin(r*Math.PI);var d=e[0]+i[0]*n,l=e[1]+i[1]*n;o++,t.element.morph({top:l,left:d}),t.adaptLocation(),t.location="circle"}),this.zIndex=s},grid:function(t){var e=[160,240],i=[100,100],n=[20,20],s=this.zIndex,o=0,a=0,r={};this.list.each(function(t,d){t.element.style.zIndex=s++,t.coord=t.getCoordinates(),r.left=i[0]+(n[0]+e[0])*a,r.left>1e3&&(r.left=i[0],o++,a=0),r.top=i[1]+(n[1]+e[1])*o,r.width=e[0],r.height=e[1],t.element.morph(r),a++,t.adaptLocation(),t.location="grid"}),this.zIndex=s},closeall:function(){this.list.each(function(t){this.close(t)},this)},buildunderlay:function(t){this.underlay=new Element("div",{class:"ui-underlay"}).inject(this.container),this.underlay.hide()},showunderlay:function(t){this.underlay.setStyles({display:"block",zIndex:t.altitude})}})},,,,,,,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(5),o=n(s),a=i(14),r=n(a),d=__debug("core-view-container").defineLevel();e.default=new Class({options:{containers:{dispose:!0}},_initContainer:function(){d.debug("_initContainer",this.container);var t=this,e=this.options,i=typeOf(e.container);if("object"===i)this.container.addEvent("resize",function(){t.fireEvent("resize")});else if("element"===i)this.container=new o.default({container:e.container});else if(e.window){var n=new r.default(e.window);this.content=n.body,this.element=n.body,this.element.addClass("view-"+e.clss),this.container=n,this.container.addEvent("resize",function(){t.fireEvent("resize")})}this.content||this._initContent(),this.addEvents({focus:function(){t.container.setState("focus")},blur:function(){t.container.setState()}})},addContainer:function(t){var e=this,i=this.options.view,n=t||this.index,s=new o.default(i).inject(this);return e.addEvent("resize",function(){s.fireEvent("resize")}),0===this.views.length&&(this.index=0),s.addClass("view"+n),this.views[n]=s,this.fireEvent("added",s),t||(this.view=s),s},moveTo:function(t){var e=this.options;return this.index=t,this.last=this.view,this.views[t]?(this.view=this.views[t],e.containers.dispose?(this.view.element.inject(this.element),this.fireEvent("updateWeekCell")):this.view.element.show()):this.view=this.addContainer(t),e.containers.dispose?this.last.element.dispose():this.last.element.hide(),this.view},next:function(t){t=t||1;var e=this.index+t;this.moveTo(e,1)},back:function(t){t=t||1;var e=this.index-t;this.moveTo(e,-1)}})}])});