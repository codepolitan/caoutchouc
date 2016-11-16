!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("layout",[],e):"object"==typeof exports?exports.layout=e():(t.caoutchouc=t.caoutchouc||{},t.caoutchouc.layout=e())}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(27)},,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(9),s=n(o),r=i(7),a=n(r),l=i(12),u=n(l),d=i(11),h=n(d),f=i(13),c=n(f),p=__debug("ui-component");e.default=new Class({Implements:[Events,Options,s.default,a.default,u.default,h.default,c.default],name:"component",component:"component",options:{lib:"ui",prefix:"ui-",component:"component",name:"component",type:null,element:{attr:["class","styles","events","id","name","html","title"],tag:"span",type:null}},initialize:function(t){return this.setOptions(t),this.fireEvent("init"),this._initOptions(),this._initElement(),this._initEvents(),this._initBinding(),this},setState:function(t){return p.debug("setState",t,this),this.element.removeClass("state-"+this.state),t&&this.element.addClass("state-"+t),this.state=t,this.fireEvent("state",t),this},addComponent:function(t){p.debug("addComponent",t),t.component||(t.component="container"),t.container=this.element,t.main=this.main;var e=new(UI[t.component.capitalize()])(t);this.addEvent("resize",function(){e.fireEvent("resize")}),this.node.push(e),this.layout[this.main][e.name]=e},_initOptions:function(){var t=this.options;this.main=t.main||t.name,this.layout=t.layout||{},this.layout[this.main]=this.layout[this.main]||{},this.dragHandlers=t.dragHandlers||[]},_initState:function(){this.options.state&&this.setState(this.options.state)},_initElement:function(){p.debug("_initElement");var t=this.options;this.fireEvent("create"),this._initElementType();var e=this._initProps(),i=t.tag||t.element.tag,n=new Element(i,e);n.store("_instance",this),this.element=n,this.content=n,this.fireEvent("created"),t.container&&"window"!==t.container&&(this.inject(t.container),this.fireEvent("injected")),this._initState(),this._initClass()},_initProps:function(){p.debug("_initProps");for(var t=this.options,e={},i=["id","name","type","klass","styles","html","title","events"],n=0;n<i.length;n++){var o=i[n];"klass"===o&&(o="class"),t.element.attr[o]&&(e[o]=t.element.attr[i[n]])}return e},_initElementType:function(){},_initClass:function(){var t=this.options,e=t.klass||t.element.klass;e&&this.element.addClass(e),t.type&&void 0!==typeOf(t.type)&&this.element.addClass("type-"+t.type),t.state&&void 0!==typeOf(t.state)&&this.element.addClass("state-"+t.state)},_initEvents:function(){var t=this,e=this.options;this.addEvents({injected:function(){e.resizable&&t._initResizer&&t._initResizer()},device:function(e){t.device=e}}),this.options.draggable&&this.enableDrag&&this.enableDrag()},getName:function(){return this.options.name||this.name},setHtmlContent:function(t){return this.content.set("html",t),this.fireEvent("loadComplete"),this.fireEvent("resize"),this},setContent:function(t){return this.content.set("html",t),this.fireEvent("resize"),this},inject:function(t,e){return p.debug("inject",t,e),this.fireEvent("inject"),"element"===typeOf(t)?this.container=t:"object"===typeOf(t)&&t.element&&(this.container=t.element),t&&"window"!==t.component&&this.element.inject(this.container,e),this.setSize&&this.setSize(),this.isInjected=!0,this.fireEvent("injected"),this}})},,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(3),s=n(o),r=i(19),a=n(r),l=__debug("ui-container");e.default=new Class({Extends:s.default,Implements:[Options,Events,a.default],name:"container",options:{name:"container",node:null,tag:"div"},initialize:function(t){return this.parent(t),l.debug("initialize",this.options),this.options.comp?this._initComp(this.options.comp):this._initComponent(),this},_initElement:function(){this.parent(),l.debug("_initElement",this);var t=this.options;this.menu={},t.head&&this._initHead(t.head),t.menu&&this.setMenu(t.menu),"window"===this.name&&this._initBody(),t.useOverlay&&this._initOverlay(),t.foot&&this._initFoot(t.foot);var e=this;this.addEvent("injected",function(){var t=e.container.getStyle("flex-direction");l.debug("direction",t,this.element)}),this.options.useUnderlay&&this._initUnderlay()},_initComponent:function(){var t=this.options;if(null!==t.node)if(l.debug("_initComponent",t.node),this.node=[],"array"===typeOf(t.node))for(var e=0;e<t.node.length;e++)this.addComponent(t.node[e]);else if("object"===typeOf(t.node)){var i=t.node;this.addComponent(i)}},_initComp:function(t){l.debug("_initComp",t);var e=this;"string"===typeOf(t)?this.addComp(t):"object"===typeOf(t)?l.debug("object"):"array"===typeOf(t)&&t.each(function(t){e.addComp(t)})},addComp:function(t,e,i){if(l.debug("addComp",t,e,i),e=e||"bottom",i=i||this.element,!i)return void l.warn("container is",i);var n=this[t]=new Element("div").addClass("container-"+t).inject(i,e);return n},_initClass:function(){this.parent(),this.element.addClass("ui-container")},_initHead:function(){var t=this;this.head=new Element("div").addClass("container-head").inject(this.element,"top").addEvent("dblclick",function(){t.fireEvent("max")})},setTitle:function(t){if(this.title&&this.head)return this.title.set("text",t)},getTitle:function(){if(this.title)return this.title.get("html")},_initFoot:function(){this.foot=new Element("div",{class:"container-foot"}).inject(this.element,"bottom")},_initStatus:function(t){t=t||"foot",this[t]||this["_init"+t.capitalize()](),this.status=new Element("div",{class:"container-status"}).inject(this[t])},_initOverlay:function(){var t=this;this.overlay=new Element("div",{class:"container-overlay"}).inject(this.element),this.addEvent("onLoadComplete",function(){this.overlay.hide()}),this.overlay.hide(),this.addEvents({onBlur:function(){t.overlay.show()},onDragComplete:function(){t.overlay.hide()},onDragStart:function(){t.overlay.show()},onResizeComplete:function(){t.overlay.hide(),this.coord=this.element.getCoordinates()},onResizeStart:function(){t.overlay.show()},resizeStart:function(){t.overlay.show()},resizeStop:function(){t.overlay.hide()}})},_initUnderlay:function(){var t=this;this.underlay=new Element("div",{class:"dialog-underlay",styles:{zIndex:10}}).inject(this.element,"before"),this.underlay.addEvent("click",function(){l.debug("click underlay"),t.minimize()}),this.addEvent("close",function(){t.underlay.destroy()})},focus:function(){this.setState("focus")}})},function(t,e,i){!function(e,i){t.exports=i()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(1);Object.defineProperty(e,"api",{enumerable:!0,get:function(){return n(o).default}});var s=i(2);Object.defineProperty(e,"array",{enumerable:!0,get:function(){return n(s).default}});var r=i(3);Object.defineProperty(e,"date",{enumerable:!0,get:function(){return n(r).default}});var a=i(5);Object.defineProperty(e,"dom",{enumerable:!0,get:function(){return n(a).default}});var l=i(6);Object.defineProperty(e,"filter",{enumerable:!0,get:function(){return n(l).default}});var u=i(7);Object.defineProperty(e,"object",{enumerable:!0,get:function(){return n(u).default}});var d=i(8);Object.defineProperty(e,"request",{enumerable:!0,get:function(){return n(d).default}});var h=i(9);Object.defineProperty(e,"search",{enumerable:!0,get:function(){return n(h).default}});var f=i(4);Object.defineProperty(e,"string",{enumerable:!0,get:function(){return n(f).default}});var c=i(10);Object.defineProperty(e,"url",{enumerable:!0,get:function(){return n(c).default}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={_pathTo:function(t,e){if("function"===typeOf(t))return t;for(var i=t.split("."),n=null,o=null,s=0;s<i.length;s++){var r=i[s];n=n||e,n=n[r],o=o||e,"function"!=typeof o[r]&&(o=o[r])}return{func:n,context:o}},deref:function(t,e){var i=0;for(e=e.split(".");t&&i<e.length;)t=t[e[i++]];return t},strToClss:function(t){if("class"===typeOf(t))return t;for(var e=t.split("."),i=null,n=0;n<e.length;n++){var o=e[n];i=i?i[o]:window[o]}return i},toclss:function(t){if("class"===typeOf(t))return t;for(var e=t.split("."),i=null,n=0;n<e.length;n++){var o=e[n];i=i?i[o]:window[o]}return i}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={findObjByKey:function(t,e,i){for(var n=0,o=t.length;n<o;n++)if(t[n][e]===i)return t[n];return null},updateObjByKey:function(t,e,i,n){for(var o=0,s=t.length;o<s;o++)t[o][e]===i&&(t[o]=n)},deleteObjByKey:function(t,e,i){for(var n=0,o=t.length;n<o;n++)if(t[n][e]===i)return t.splice(n,1),t;return t},objToArray:function(t){return t=t||{},Object.keys(t).map(function(e){return t[e]})},sort:function(t,e){return t.sort(function(t,i){var n=t[e],o=i[e];return n<o?-1:n>o?1:0})},moveUp:function(t,e,i){var n=t.indexOf(e),o=n-(i||1);if(n===-1)throw new Error("Element not found in array");o<0&&(o=0),t.splice(n,1),t.splice(o,0,e)},moveDown:function(t,e,i){var n=t.indexOf(e),o=n+(i||1);if(n===-1)throw new Error("Element not found in array");o>=this.length&&(o=this.length),t.splice(n,1),t.splice(o,0,e)},unique:function(t){for(var e=t.concat(),i=0;i<e.length;++i)for(var n=i+1;n<e.length;++n)e[i]===e[n]&&e.splice(n--,1);return e},move:function(t,e,i){var n,o;if(e=parseInt(e,10),i=parseInt(i,10),e!==i&&0<=e&&e<=t.length&&0<=i&&i<=t.length){if(o=t[e],e<i)for(n=e;n<i;n++)t[n]=t[n+1];else for(n=e;n>i;n--)t[n]=t[n-1];t[i]=o}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={toShortText:function(t){var e=t.getDate(),i=t.getMonth()+1,n=t.getUTCFullYear();e<10&&(e="0"+e),i<10&&(i="0"+i);var o=n+"-"+i+"-"+e;return o},toSearch:function(t){var e=t.getDate(),i=t.getMonth()+1,n=t.getUTCFullYear();e<10&&(e="0"+e),i<10&&(i="0"+i);var o=n+"-"+i+"-"+e;return o},toTextWithTime:function(t){var e=new Date(t),i=e.getDate(),n=e.getMonth()+1,o=e.getUTCFullYear(),s=e.getHours(),r=e.getMinutes();r<10&&(r="0"+r),0===r&&(r="00"),s<10&&(s="0"+s),0===s&&(s="00"),i<10&&(i="0"+i),n<10&&(n="0"+n);var a=i+"/"+n+"/"+o+" "+s+"h"+r;return a},toText:function(t){var e=new Date(t),i=e.getDate(),n=e.getMonth()+1,o=e.getUTCFullYear();return i<10&&(i="0"+i),n<10&&(n="0"+n),i+"/"+n+"/"+o},toJSON:function(t){var e=t.split(/ /),i=e[0].split(/\//),n=e[1].split(/:/),o=new Date(i[2],i[1]-1,i[0],n[0],n[1]).toJSON();return o},getWeekNumber:function(t){var e=new Date(t.valueOf()),i=(t.getDay()+6)%7;e.setDate(e.getDate()-i+3);var n=new Date(e.getFullYear(),0,4),o=(e-n)/864e5,s=1+Math.ceil(o/7);return s.toString()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={removeAccents:function(t){if(t)return t=t.toLowerCase(),t=t.replace(/è|é|ë|ê|ě/g,"e"),t=t.replace(/à|á|ä|â/g,"a"),t=t.replace(/ù|ú|ü|û/g,"u"),t=t.replace(/ò|ó|ö|ô/g,"o"),t=t.replace(/ì|í|ï|î/g,"i"),t=t.replace(/ç|¢/g,"i"),t=t.replace(/[^\w|\/|\-|\.]/g,"_")},urlify:function(t){if(t)return t=this.removeAccents(t),t=t.replace(/[^\w|\/|\-|\.]/g,"_")},convertHTML:function(t){if(t){var e=document.createElement("pre");return e.innerHTML=t,e.firstChild.nodeValue}},removeTags:function(t){if(t){t=t.replace(/&(lt|gt);/g,function(t,e){return"lt"==e?"<":">"});var e=t.replace(/<\/?[^>]+(>|$)/g,"");return e}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getAttrFirst:function(t,e,i){if(t&&e){var n=null;if(i=i||20,t.get(e))n=t;else for(var o=0;o<i&&(t=t.getParent());o++)if(t.get(e)){n=t;break}return n}},getAttrFirstValue:function(t,e,i){var n=this.getAttrFirst(t,e,i);return n?n.get(e):n}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(1),s=n(o);e.default={filter:function t(e,i){for(var t in e)e.hasOwnProperty(t)&&(i=this.processFilter(e[t],i));return i},processFilter:function(t,e){for(var i,n,o=[],r=0;r<e.length;r++){if(i=e[r],n=s.default.deref(i,t.key),!n){if("boolean"!==t.type)continue;n=!1}var a=this.processKey(t,i,n);a&&o.push(i)}return o},processKey:function(t,e,i){switch(typeOf(i)){case"boolean":if(i===t.value)return e;break;case"array":if(i.indexOf(t.value)>-1)return e;break;default:if(t.value===!0&&i)return e;var n=new RegExp(t.value,"gi");if(i.match(n))return e}return!1}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={setKey:function(t,e,i){if(i&&t){var n=t.split(/\./);n.length<2?i[n[0]]=e:(i[n[0]]||(i[n[0]]={}),i=i[n.shift()],this.setKey(n.join("."),e,i))}},checkKey:function(t,e){if(e&&t){for(var i=t.split(/\./),n=0;n<i.length;n++){if(null===e&&(e={}),!e.hasOwnProperty(i[n]))return!1;e=e[i[n]]}return!0}},getKey:function(t,e){if(e&&t){for(var i=t.split("."),n=i.pop(),o=i.length,s=1,r=i[0];(e=e[r])&&s<o;)r=i[s],s++;return e?e[n]:void 0}},getSize:function(t){if(t){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}},merge:function(t,e){var i={};for(var n in t)i[n]=t[n];for(var n in e)i[n]=e[n];return i},flatten:function(t){function e(t,n){if(Object(t)!==t)i[n]=t;else if(Array.isArray(t)){for(var o=0,s=t.length;o<s;o++)e(t[o],n+"["+o+"]");0==s&&(i[n]=[])}else{var r=!0;for(var a in t)r=!1,e(t[a],n?n+"."+a:a);r&&n&&(i[n]={})}}var i={};return e(t,""),i}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i=["get","post","put","delete"];e=e||function(){},i.indexOf(t.method)===-1&&(t.method="get"),new Request.JSON({url:t.url,data:t.data,method:t.method,emulation:!1,onSuccess:function(t){e(null,t),e=function(){}},onError:function(t,i){console.log(t,i),e(i),e=function(){}},onFailure:function(t){console.log(t),e(t),e=function(){}},onCancel:function(){console.log("canceled"),e("canceled"),e=function(){}}}).send()}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=i(2),r=n(s),a=i(4),l=n(a),u=i(3),d=n(u);e.default={options:{operator:"AND",keys:["name"],dates:["created_date","modified_date"]},search:function(t,e,i){return this.options.keys=i.keys||this.options.keys,"object"===o(i.dates)&&(this.options.dates=r.default.unique(this.options.dates.concat(i.dates))),t?this.searchByKeyword(t,e):e},searchByKeyword:function(t,e){if(t){var i=t.split(" ");i[i.length-1]||i.pop();for(var n=0;n<i.length;n++)i[n]=l.default.removeAccents(i[n]);return this.searchKeys(i,e)}},searchKeys:function t(e,i){var t=this.options.keys,n=[];if(t){for(var o=0,s=i.length;o<s;o++){for(var r="",a=i[o],u=0;u<t.length;u++){var h=t[u];if(this.options.dates.indexOf(h)!==-1&&a[h])r+=" "+d.default.toText(a[h]);else{var f=h.split(/\./),c="";1===f.length&&(c=a[f[0]]),2===f.length&&a[f[0]]&&(c=a[f[0]][f[1]]),r+=" "+c}}r=l.default.removeAccents(r);var p=this.searchValue(r,e,a);p&&n.push(p)}return n}},searchValue:function(t,e,i){for(var n=this.options.operator||"AND",o=0;o<e.length;o++){if("AND"===n&&t.indexOf(e[o])===-1)return;if("OR"===n&&t.indexOf(e[o])!==-1)return i}if("AND"===n)return i}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={validate:function(t){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return e.test(t)}}}])})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({toElement:function(){return this.element},show:function(){return this.fireEvent("show"),this.element.show(),this},hide:function(){return this.fireEvent("hide"),this.element.hide(),this},fade:function(t){return this.fireEvent("fade"),this.element.fade(t),this},getStyle:function(t){return this.element.getStyle(t)},getSize:function(){if("object"==typeOf(this.element))return this.element.getSize()},getComputedSize:function(){return this.element.getComputedSized()},getCoordinates:function(t){return this.element.getCoordinates(t)},addClass:function(t){return this.element.addClass(t),this},removeClass:function(t){return this.element.removeClass(t)},get:function(t){return this.element.get(t)},morph:function(t){return this.element.morph(t)},setSize:function(t,e){return this.element.x=t||this.options.width,this.element.y=e||this.options.height,this.element.x&&this.element.setStyle("width",this.element.x),this.element.y&&this.element.setStyle("height",this.element.y),this.fireEvent("resize"),this},setStyle:function(t,e){return this.element.setStyle(t,e),this},setStyles:function(t){return this.element.setStyles(t),this},getElement:function(t){return this.element.getElement(t)},getElements:function(t){return this.element.getElements(t)},submit:function(t){return this.element.submit(t)},dispose:function(){return this.element.dispose()},destroy:function(){this.element.destroy()}})},,function(t,e,i){!function(e,i){t.exports=i()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};"undefined"==typeof window&&(Class=i(!function(){var t=new Error('Cannot find module "primish"');throw t.code="MODULE_NOT_FOUND",t}()),Events=i(!function(){var t=new Error('Cannot find module "primish/emitter"');throw t.code="MODULE_NOT_FOUND",t}())),e.default=new Class({Implements:[Events],options:{api:{emit:"trigger"}},initialize:function(){var t=this;this.addEvent("initReady",function(){t._initBinding.bind(this)()})},_initBinding:function(t){if(t=t||this.options.controller||this.options.binding,this.binding=this.binding||{},t){if(!t._list)return void this._bindObject(t);for(var e=t._list,i=0;e.length>i;i++){var n=t[e[i]];this.binding=this.binding||{},this._bindObject(n)}return this.fireEvent?this.fireEvent("bindingsReady"):this.trigger&&this.trigger("bindingsReady"),this.binding}},_bindObject:function(t){for(var e in t)if(t.hasOwnProperty(e)){var i=t[e];"object"!==("undefined"==typeof i?"undefined":n(i))?this._bindkey(e,i):this._bindList(e,i)}},_bindList:function(t,e){for(var i=0;i<e.length;i++)this._bindkey(t,e[i])},_bindkey:function(t,e){var i=t.split("."),o=i[i.length-1];i.pop();var s=this._path(i.join(".")),r=this._getObj(s,e);if(r){for(var a in r)if(r.hasOwnProperty(a)){var l=i.join(".")+"."+a+"."+o;this._bindkey(l,e)}}else{var u;if("object"===("undefined"==typeof e?"undefined":n(e))){for(var d in e)if(e.hasOwnProperty(d))break;u=this._processKeyObj(d,e),e=d}var h=e.split(".");if(h[h.length-2]===this.options.api.emit){var f=h[h.length-1];this._bindEvent(s,o,f,e)}else this._bindMethod(s,o,e,u)}},_processKeyObj:function(t,e){for(var i=e[t],n=0;n<i.length;n++){var o=i[n];"this"===o.split(".")[0]&&(o=o.split("."),o.shift(),i[n]=this._path(o.join(".")))}return i},_bindEvent:function(t,e,i,n){var o=this.options.api.emit,s=n.split("."),r=s[s.length-1];s.splice(-2,2);var a=this._path(s.join(".")),l=this._getObj(a,n);if(l){for(var u in l)if(l.hasOwnProperty(u)){var d=s.join(".")+"."+u+"."+o+"."+r;this._bindEvent(t,e,i,d)}}else t&&t.addEvent&&a&&a.fireEvent?t.addEvent(e,a.fireEvent.bind(a,i)):t&&t.on&&a&&a.fireEvent?t.on(e,a.fireEvent.bind(a,i)):console.warn("missing context or method",t,n,this)},_bindMethod:function(t,e,i,n){var o=this._path(i),s=i.split(".");s.pop();var r=this._path(s.join(".")),a=this._getObj(r,i);if(a){for(var l in a)if(a.hasOwnProperty(l)){var u=s.slice(0,2).join(".");u=i.replace(u,u+"."+l),this._bindMethod(t,e,u,n)}}else t&&t.addEvent&&o?(n?t.addEvent(e,o.bind(r,n)):t.addEvent(e,o.bind(r)),this.binding[e]=o):t&&t.on&&o?(this.binding[e]=o,t.on(e,o.bind(r))):console.warn("missing context or method",t,i,this)},_path:function(t){if(!t)return this;if(!t.match(/\./))return this[t];for(var e,i=t.split("."),n=0,o=i.length;n<o;n++){var s=i[n];e=e||this,e=e[s]}return e},_getObj:function(t,e){if(t&&t.constructor&&"Object"===t.constructor.name){for(var i in t)if(t.hasOwnProperty(i))break;if(e.indexOf(i)!==-1)return;return t}}})}])})},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({options:{draggable:!1,dragLimitX:!1,dragLimitY:!1,dragHandlers:[],fx:{adaptLocation:{duration:200,wait:!0}}},enableDrag:function(){var t=this;return 0===this.dragHandlers.length&&(this.dragHandlers=[]),this.dragHandler=new Drag(this.element,{handle:this.dragHandlers,snap:3,limit:{x:this.options.dragLimitX,y:this.options.dragLimitY},onStart:this.fireEvent.bind(this,"onDragStart"),onDrag:this.fireEvent.bind(this,"onDrag"),onComplete:this.fireEvent.bind(this,"onDragComplete")}),this.addEvent("onDragComplete",function(){t.adaptLocation()}),this},enableElementDrag:function(t){if(null!==t)return this.dragHandler=new Drag(this.element,{handle:t,snap:3,limit:{x:this.options.dragLimitX,y:this.options.dragLimitY},onStart:this.fireEvent.bind(this,"onDragStart"),onDrag:this.fireEvent.bind(this,"onDrag"),onComplete:this.fireEvent.bind(this,"onDragComplete")}),this.addEvent("onDragComplete",this.adaptLocation.bind(this)),this},disableDrag:function(){return this.dragHandler&&this.dragHandler.detach(),this}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({_initLocation:function(){for(var t=["left","top","right","bottom"],e=this.getInitialLocation(),i=0;i<t.length;i++)e[t[i]]&&(this.options[t[i]]=e[t[i]]);this.element.setStyles(e)},setLocation:function(t,e,i){var n=this.options,o=this.element;return this.element.left=t||n.left||o.getCoordinates().x,this.element.top=e||n.top||o.getCoordinates().y,this.element[i?"morph":"setStyles"]({top:this.element.top,left:this.element.left}),this},getCenterLocation:function(){var t={},e=this.options.height;return"auto"!=this.options.height?t.top=(window.getHeight()-e.toInt())/2:t.top=160,t.left=(window.getWidth()-this.options.width.toInt())/2,t},getInitialLocation:function(){if(this.options.top||this.options.right||this.options.bottom||this.options.left)return{top:this.options.top,bottom:this.options.bottom,left:this.options.left,right:this.options.right};if("center"==this.options.location)return this.getCenterLocation();var t=this.controller.getCascadeLocation(this);return{top:t.top,left:t.left}},adaptLocation:function(){var t={},e=!1,i=this.element.getCoordinates();i.top.toInt()>window.getHeight()&&(t.top=window.getHeight()-Number.random(25,75),e=!0),i.top.toInt()<0&&(t.top=50,e=!0),i.left.toInt()+this.element.getStyle("width").toInt()<0&&(t.left=Number.random(25,75)-this.element.getStyle("width").toInt(),e=!0),this.element.getStyle("left").toInt()>window.getWidth()&&(t.left=window.getWidth()-Number.random(25,75),e=!0),e&&this.options.fx&&this.options.fx.adaptLocation&&(this.reposFx||(this.reposFx=new Fx.Morph(this.element,this.options.fx.adaptLocation)),this.reposFx.start(t))}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({options:{resizer:{class:"ui-resizer"},resizable:!1,resizeLimitX:[100,screen.width],resizeLimitY:[100,screen.height]},_initResizer:function(){this.resizeHandlers=[];var t=new Element("div",{class:"layer-resizer"}).inject(this.element,"bottom");this.resizer=new Element("div",this.options.resizer).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop()}}).inject(t,"bottom"),this.resizeHandlers.push(this.resizer),this.enableResize(0),this.options.resizeBorders&&this.options.resizeBorders.each(function(e,i){this.resizeHandlers.push(new Element("div",{style:e+": 0",class:"ui-resizer-"+e}).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop()}}).inject(t,"top")),this.enableResize(i+1)},this)},enableResize:function(t){var e=this,i={handle:this.resizeHandlers[t],limit:{x:e.options.resizeLimitX,y:e.options.resizeLimitY},modifiers:{x:"width",y:"height"},onStart:function(t){e.fireEvent("resizeStart",t)},onDrag:function(t,i){e.fireEvent("resizeDrag",[t,i]),e.fireEvent("resize",t)},onComplete:function(t){e.fireEvent("resizeComplete",t)}};return 1!==t&&3!==t||(i.modifiers.x=!1),2!==t&&4!==t||(i.modifiers.y=!1),1!==t&&4!==t||(this.dragHandlers.push(this.resizeHandlers[t]),i.invert=!0),this.element.makeResizable(i),this}})},,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=__debug("ui-container-display").defineLevel();e.default=new Class({options:{display:{fx:{default:{duration:160,transition:"sine:out",link:"cancel"},minimize:{duration:160,transition:"sine:out",link:"cancel"}}}},_initDisplay:function(){i.debug("_initDisplay",this.element),this._modifier="width";var t=this.container.getStyle("flex-direction");"column"===t&&(this._modifier="height");var e=this,n=this.options.display,o=n.fx.default,s=this._modifier;return this[s]||(this[s]=this.options.size||320),this.device=this.device||"desktop",this.display={},o.property=s,this.display.fx=new Fx.Tween(this.element,o).addEvent("complete",function(){e.fireEvent("toggled")}),this.display},getDisplay:function(){return this._display},setDisplay:function(t){return this._display=t,this},toggle:function(){return i.debug("toggle",this._display),"normalized"===this._display?this.minimize():this.normalize(),this._display},close:function(){i.debug("close"),this.minimize()},minimize:function(t){i.debug("start minimalization",this.device),this.display||this._initDisplay(),this.fireEvent("minimize"),t?this.element.setStyle(this._modifier,0):this.display.fx.start(0),this._display="minimized",this.underlay&&"desktop"!==this.device&&this.underlay.fade(0),this.fireEvent("display","minimized")},normalize:function(){i.debug("normalize"),this.display||this._initDisplay(),this.fireEvent("normalize");var t=this[this._modifier]||this.options.size,e=window,n=document,o=n.documentElement,s=n.getElementsByTagName("body")[0],r=e.innerWidth||o.clientWidth||s.clientWidth;r<640&&(t=r),this.display.fx?this.display.fx.start(t):this.element.setStyle(this._modifier,t),this.underlay&&"desktop"!==this.device&&(this.underlay.show(),this.underlay.fade(1)),this._display="normalized",this.fireEvent("display","normalized")},maximize:function(){i.debug("maximize")}})},,,,,,,,function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=i(5),s=n(o),r=i(40),a=n(r),l=i(41),u=n(l),d=__debug("ui-layout").defineLevel();e.default=new Class({Implements:[Events,Options,a.default,u.default],options:{name:"layout",clss:s.default,settings:{}},initialize:function(t){return this.setOptions(t),this._initLayout(this.options),this},_initLayout:function(t){d.debug("initialize",t);var e=t.node;this.settings=t.settings||{},this.component={},this.components=[],this.resizer={},this._initContainer(t),this._processComponents(e),this._initEvents()},_initEvents:function(){var t=this;window.addEvent("resize",function(){var e=t.container.getCoordinates();d.debug("layout resize",t.container,e),document.body.contains(t.container.element)!==!1&&(e.width<720&&t.navi&&t.navi.minimize(),t.fireEvent("drag"))}),function(){t.fireEvent("drag")}.delay(1e3)},_initContainer:function(t){this.container=new s.default({resizable:!1,class:"ui-layout layout-"+t.node._name}).inject(t.container),this.mask=new Element("div",{class:"layout-mask"}).inject(this.container),d.debug("Layout container",this.container),this.container.addClass("ui-layout"),this.container.addClass("layout-"+t.node._name),this.options.theme&&this.container.addClass("theme-"+this.options.theme),t.node.container=this.container},_processComponents:function(t,e,i){d.debug("_processComponents",t,e,i);var n=t._list||[];i=i++||1,"tab"!==e&&(t._axis=this._initFlexDirection(t.container,t._axis));for(var o=0;o<n.length;o++){var s=n[o],r=t[s]||{};r.clss=r.clss||this.options.clss,r.opts=r.opts||{},r.opts.name=s,r.opts.position=o+1,r.opts.axis=t._axis,r.opts.nComp=n.length,"navi"===s&&(r.opts.useUnderlay=!0),o===n.length-1&&(r.opts.last=!0),"tab"!==e&&(r.opts.container=t.container);var a=this._initComponent(r);"tab"===e&&(a.options.noResizer=!0,t.container.addTab(a)),a.element.addClass("container-"+s),r.node&&(r.node.container=a,"tab"===a.options.clss?this._processComponents(r.node,"tab",i):this._processComponents(r.node,null,i))}},_initFlexDirection:function(t,e){if(d.debug("_initFlexDirection",t,e),t)return e=e||"x","x"===e?t.addClass("flex-horizontal"):"y"===e&&t.addClass("flex-vertical"),e},setDevice:function(t){d.debug("setDevice"),this.device=t,this.fireEvent("device",t)},destroy:function(){this.container.destroy()}})},,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(6),o=__debug("ui-layout-component").defineLevel();e.default=new Class({options:{resizer:{modifier:{row:{size:"width",from:"left",mode:{y:!1}},column:{size:"height",from:"top",mode:{x:!1}}}}},_initComponent:function(t){o.debug("_initComponent",t.opts.name,t),t.opts.flex=t.opts.flex||t.flex,t.opts.hide=t.opts.hide||t.hide,t.opts.theme=t.opts.theme||t.theme,o.debug("comp",t.clss);var e=t.opts.name,i=n.api.strToClss(t.clss),s=this.component[e]=this[e]=new i(t.opts);return o.debug("component",t),this._componentRegister(e,s),this._initComponentSettings(s),this._setComponentStyles(s),this._setComponentDisplay(s),this._attachComponentEvents(s),s},_componentRegister:function(t,e){this.components=this.components||[],this.components.push(e)},_initComponentSettings:function(t){o.debug("_initcompSettings",t)},_setComponentStyles:function(t){o.debug("_setComponentStyles",t),t.options.flex&&t.element.addClass("flex-"+t.options.flex),t.options.theme&&t.element.addClass("theme-"+t.options.theme)},_setComponentDisplay:function(t){var e="normalized";(t.options.hide||"minimized"===t.options.state)&&(t.minimize(1),e="minimized");var i=t.getName(),n=t.element,o=this.settings[i];o&&o.display&&(e=o.display),t.setDisplay(e,"width"),t.options.flex||(o&&"x"===t.options.axis?(n.addClass("flex-none"),"minimized"===e?n.setStyle("width",0):(o.width<32&&(o.width=32),n.setStyle("width",o.width||null)),t.width=o.width||260,t._modifier="width"):o&&"y"===t.options.axis&&(n.setStyle("flex","none"),n.setStyle("height",o.height||null),t.height=o.height||260,t._modifier="height"),this._initResizer(t))},_attachComponentEvents:function(t){o.debug("_attachComponentEvents",t);var e=this,i=t.getName();t.addEvents({toggled:function(){o.debug("toggled"),e.fireEvent("resize")},resizing:function(){o.debug("toggled"),e.fireEvent("resize")},display:function(t){o.debug("display",i,t),e.fireEvent("display",[i,t])}}),this.addEvents({resize:function(){o.debug("resize"),t.fireEvent("resize")},drag:function(){o.debug("drag"),t.fireEvent("resize")},normalize:function(){o.debug("normalize"),t.fireEvent("resize")},maximize:function(){o.debug("maximize"),t.fireEvent("resize")},minimize:function(){o.debug("minimize"),t.fireEvent("resize")},device:function(e){o.debug("device",e),t.fireEvent("device",e)}})}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=__debug("ui-layout-resize").defineLevel();e.default=new Class({options:{resizer:{modifier:{row:{
size:"width",from:"left",mode:{y:!1}},column:{size:"height",from:"top",mode:{x:!1}}}}},_initResizer:function(t){i.debug("_initResizer",t);var e=this,n=t.options.name,o=t.container,s=t.options.last;if(this._initMaximize(t),o){var r=o.getStyle("flex-direction");if(r){var a=this.options.resizer.modifier[r];if(a){var l=this.resizer[n]=new Element("div",{class:"ui-resizer","data-name":t.options.name}).addEvents({click:function(t){t.stop()},mousedown:function(t){t.stop(),e.mask.setStyle("display","block")},mouseup:function(t){e.mask.setStyle("display","none")}}).inject(o);a.size&&l.addClass("resizer-"+a.size),s&&i.debug("------last"),this._initResizerDrag(l,a,t),this._initResizerEvent(t,l,a),this.fireEvent("drag")}}}},_initResizerDrag:function(t,e,n){i.debug("initResizerDrag",t,e,n);var o=this,s=n.element,r=n.container,a=n.options.last,l=new Drag.Move(t,{modifiers:e.mode,onStart:function(t){o.mask.setStyle("display","block")},onDrag:function(n){i.debug("onDrag",n),o.mask.setStyle("display","block");var l=s.getCoordinates(r),u=r.getCoordinates(),d=t.getCoordinates(r);a?s.setStyle(e.size,u[e.size]-d[e.from]):s.setStyle(e.size,d[e.from]-l[e.from]),o.fireEvent("drag")},onComplete:function(t){i.debug("onComplete",t),o.mask.setStyle("display","none");var a=s.getCoordinates(r)[e.size];o.fireEvent("resizer",[n.main,e.size,a]),n.fireEvent("resizeComplete",[e.size,a]),n[e.size]=a}});return l},_initResizerEvent:function(t,e,n){i.debug("_initResizerEvent",t,e,n);var o=this;this.addEvents({drag:function(){o._updateSize(t,e,n)},maximize:function(){o._updateSize(t,e,n)},normalize:function(){o._updateSize(t,e,n)},resize:function(){o._updateSize(t,e,n)}})},_updateSize:function(t,e,n){i.debug("_updazeSize",t,e,n);var o=t.container,s=t.element,r=s.getCoordinates(o);t.options.last?e.setStyle(n.from,r[n.from]-3):e.setStyle(n.from,r[n.from]+r[n.size]-3),this.fireEvent("size")},_initMaximize:function(t){i.debug("_initMaximize",t);var e=this,n=t.element,o=t.container;o&&t.addEvent("max",function(){var s=t.options.name;i.debug("max",t),n.hasClass("container-max")?(n.removeClass("container-max"),o.getChildren(".ui-container").each(function(t){t.setStyle("display",t.retrieve("display"))}),n.setStyle("width",n.retrieve("width")),n.setStyle("height",n.retrieve("height")),e.fireEvent("normalize",t)):(n.addClass("container-max"),n.store("width",n.getStyle("width")),n.store("height",n.getStyle("height")),n.setStyle("width","initial"),n.setStyle("height","initial"),o.getChildren(".ui-container").each(function(t){t.hasClass("container-"+s)||(t.store("display",t.getStyle("display")),t.hide())}),e.fireEvent("resize",t))})},_initResizers:function(t){i.debug("_initResizers",t);for(var e=t.length,n=0;n<e;n++){var o=t[n];o.options.noResizer||this._initResizer(o)}}})}])});