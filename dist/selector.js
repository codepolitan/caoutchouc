!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("selector",[],e):"object"==typeof exports?exports.selector=e():(t.caoutchouc=t.caoutchouc||{},t.caoutchouc.selector=e())}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){t.exports=i(48)},24:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({Implements:[Events,Options],options:{container:document.body,type:"solid",clss:"selector-border",zIndex:2,size:1,color:"#000",opacity:"1",location:"outside",effect:{duration:100,transition:"expo:out",link:"cancel"}},initialize:function(t,e){this.setOptions(e),this.container=t,this.lines=[],this._initElement()},_initElement:function(){var t=[[],[],[],[]];t.each(function(t){this.buildBorder()},this)},buildBorder:function(){var t=this,e=new Element("div",{class:this.options.clss}).addClass("type-"+t.options.type).setStyles({zIndex:this.options.zIndex,backgroundColor:this.options.color,opacity:this.options.opacity}).addEvent("click",function(){t.fireEvent("click")}).inject(this.container,"top");e.set("morph",this.options.effect),this.lines.push(e)},reach:function(t){if(t)this.el=t;else{if(!this.el)return;t=this.el}var e=[],i=this.options.size;try{t.getCoordinates()}catch(t){return}var n=t.getCoordinates();if("relative"==this.options.positionning){var s=t.getPosition(this.container);n.left=s.x,n.right=s.x+n.width,n.top=s.y,n.bottom=s.y+n.height}return e="inside"==this.options.location?[[n.top,n.left,n.right-n.left-i,i],[n.top,n.right-i,i,n.bottom-n.top],[n.bottom-i,n.left+i,n.right-n.left-2*i,i],[n.top+i,n.left,i,n.bottom-n.top-i]]:[[n.top-i,n.left-i,n.right-n.left+2*i,i],[n.top,n.right,i,n.bottom-n.top],[n.bottom,n.left-i,n.right-n.left+2*i,i],[n.top,n.left-i,i,n.bottom-n.top]],this.lines.each(function(t,i){this._setLinePosition(t,e[i])},this),this.fireEvent("selected"),this},addClass:function(t){this.lines.each(function(e,i){e.addClass(t)},this)},removeClass:function(t){this.lines.each(function(e,i){e.addClass(t)},this)},_setLinePosition:function(t,e){this.options.usefx?t.morph({"margin-top":e[0],"margin-left":e[1],width:e[2],height:e[3]}):t.setStyles({"margin-top":e[0],"margin-left":e[1],width:e[2],height:e[3]})},set:function(t,e){return selector?self[selector][t](e):this.selectors.each(function(i){self[i][t](e)}),this},setColor:function(t){this._setStyle("backgroundColor",t)},setOpacity:function(t){this._setStyle("opacity",t)},_setStyle:function(t,e){return this.lines.each(function(i){i.setStyle(t,e)}),this},setStyles:function(t){return this.lines.each(function(e){e.setStyles(t)}),this},hide:function(){return this._setStyle("display","none"),this},show:function(){return this._setStyle("display","block"),this},highlight:function(t){return this.lines.each(function(e){e.highlight(t)}),this},remove:function(){return this.lines.each(function(t){t.destroy()}),this}})},44:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({Implements:[Events,Options],options:{container:document.body,clss:"selector-mask",type:"solid",zIndex:1,offset:0,color:"rgba(255,255,255,.8)",opacity:"1",location:"outside"},initialize:function(t,e){this.setOptions(e),this.container=t,this.masks=[],this._initElement()},_initElement:function(){var t=[[],[],[],[]];t.each(function(t){this.buildMask()},this)},buildMask:function(){var t=this,e=new Element("div",{class:this.options.clss}).addClass("type-"+t.options.type).setStyles({zIndex:this.options.zIndex,backgroundColor:this.options.color,opacity:this.options.opacity}).addEvent("click",function(){t.fireEvent("click")}).inject(this.container,"top");e.set("morph",{duration:250,transition:"expo:out",link:"cancel"}),e.set("tween",{duration:250,transition:"expo:out",link:"cancel"}),this.masks.push(e)},reach:function(t){if(t){this.el=t;var e=[],i=this.options.scope.getScrollSize(),n=this.options.offset,s=t.getCoordinates();if("relative"==this.options.positionning){var o=t.getPosition(this.container);s.left=o.x,s.right=o.x+s.width,s.top=o.y,s.bottom=o.y+s.height}return e=[[0,0,s.left-n,i.y],[0,s.left-n,s.width+2*n,s.top-n],[0,s.right+n,i.x-s.right,i.y],[s.top+s.height+n,s.left-n,s.width+2*n,i.y-s.bottom]],this.masks.each(function(t,i){this._setMaskPosition(t,e[i])},this),this.fireEvent("selected"),this}},addClass:function(t){this.masks.each(function(e,i){e.addClass(t)},this)},removeClass:function(t){this.masks.each(function(e,i){e.addClass(t)},this)},_setMaskPosition:function(t,e){t.setStyles({top:e[0],left:e[1],width:e[2],height:e[3]})},set:function(t,e){return selector?self[selector][t](e):this.selectors.each(function(i){self[i][t](e)}),this},setColor:function(t){this._setStyle("backgroundColor",t)},_setStyle:function(t,e){var i=this;return this.masks.each(function(n){i.options.usefx?n.tween(t,e):n.setStyle(t,e)}),this},setStyles:function(t){var e=this;return this.masks.each(function(i){e.options.usefx?i.morph(t):i.setStyles(t)}),this},hide:function(){return this.masks.each(function(t){t.setStyle("display","none")}),this},show:function(){return this.masks.each(function(t){t.setStyle("display","block")}),this},highlight:function(t){return this.masks.each(function(e){e.highlight(t)}),this},remove:function(){return this.masks.each(function(t){t.destroy()}),this}})},45:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=__debug("ui-selector-menu").defineLevel();e.default=new Class({Implements:[Events,Options],options:{container:document.body,zIndex:200,position:"top left",location:"outside",offset:[1,1],positionning:"absolute",effect:{duration:100,transition:"expo:out",link:"cancel"}},initialize:function(t,e){this.setOptions(e),this.container=t;var n=this.options.offset;i.debug("selector-view",this.options),"number"==typeOf(n)?this.offset=[n,n]:this.offset=n,this.menus=[],this._initElement(t)},_initElement:function(t){this.element=new Element("ul",{class:"ui-menu type-selector",zIndex:this.options.zIndex}).inject(t),this.fx=new Fx.Morph(this.element,this.options.effect),this.element.addEvents({mouseenter:function(t){t.stop()},mouseover:function(t){t.stop()}}),this.options.klss&&this.element.addClass(this.options.klss),this.element.addEvent("click",function(t){t.stop()}),this.buildMenu()},buildMenu:function(){var t=this,e=this.options.list,i=0;for(var n in e){var s=e[n],o=new Element("li",{class:"ui-icon menu-"+n,name:n}).set(s.options);s.klss&&o.addClass(s.klss),s.type&&o.addClass("type-"+s.type),this.menus.push(s),o.addEvents({click:function(e){t.fireEvent("click",this.get("name"))}}),o.inject(this.element),i+=o.getSize().x}this.element.setStyle("width",i)},reach:function(t){if(t)this.el=t;else{if(!this.el)return;t=this.el}var e=this.options,i=this.element.getCoordinates(),n=t.getCoordinates();if("relative"==e.positionning){var s=t.getPosition(this.options.content);n.left=s.x,n.right=s.x+n.width,n.top=s.y,n.bottom=s.y+n.height}var o="auto",h="auto",r="auto",c="auto";e.position.indexOf("left")>-1&&(h=n.left+this.offset[0]),e.position.indexOf("right")>-1&&(h=n.left+n.width-i.width+this.offset[0]),e.position.indexOf("top")>-1&&(o=n.top),e.position.indexOf("bottom")>-1&&(o=n.top+n.height),"outside"==e.location&&(o=o-i.height-this.offset[1]),"inside"==e.location&&(o+=this.offset[1]),this.options.usefx?this.fx.start({top:o,bottom:r,left:h,right:c}):this.element.setStyles({position:"absolute",top:o,bottom:r,left:h,right:c})},getParent:function(){return this.parent},hide:function(){this.element.hide()},show:function(){this.element.show()}})},46:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({Implements:[Events,Options],options:{container:document.body,clss:"selector-overlay",offset:"0",styles:{position:"absolute",zIndex:"1000"}},initialize:function(t){this.setOptions(t),this._initElement()},_initElement:function(){var t,e=this,i="absolute";this.element=new Element("div",{class:this.options.clss}).setStyles(this.options.styles).setStyle("position",i).addEvents({mouseover:function(t){},click:function(i){i.stop(),clearTimeout(t),t=function(){e.fireEvent("click",e.el),e.hide()}.delay(200,this)},dblclick:function(){clearTimeout(t),e.fireEvent("dblclick")}}).inject(this.options.container,"top")},reach:function(t){this.el=t;var e=this.options.offset,i=t.getCoordinates();this.element.setStyles({"margin-top":i.top-e,"margin-left":i.left-e,width:i.right-i.left+2*e,height:i.bottom-i.top+2*e})},remove:function(){this.element.destroy()},hide:function(){this.element.hide()},show:function(){this.element.show()},highlight:function(t){this.element.highlight(t)}})},47:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({Implements:[Events,Options],options:{container:document.body,type:"border",clss:"selector-resizer",handler:{size:3},positions:["n","e","s","w"],styles:{display:"none",zIndex:1200,border:"1px solid #71aad3",backgroundColor:"#fff",cursor:"resize",boxSizing:"content-box"}},initialize:function(t,e){this.setOptions(e),this.container=t,this.handlers=[],this.container=t,this._initElement()},_initElement:function(){var t=0;this.options.positions.each(function(e){this.buildHandler(e),t++},this)},buildHandler:function(t){var e=this,i="absolute",n=new Element("div").setStyles(this.options.styles).setStyle("position",i).store("position",t).set("class",t).inject(this.container,"top").addEvents({click:function(t){new Event(t).stop()},mouseenter:function(t){e.fireEvent("mouseenter",this)},mouseleave:function(t){e.fireEvent("moussleave",this)}});this.handlers.push(n)},reach:function(t){if(t){this.el=t;var e=t.getCoordinates(),i=t.getPosition(this.container);e.top=i.y,e.bottom=i.y+e.height;var n=this.options.handler.size,i=t.getPosition(this.container);e.left=i.x,e.right=i.x+e.width,e.top=i.y,e.bottom=i.y+e.height;var s={nw:[e.top-n,e.left-n],n:[e.top-n,e.right-(e.right-e.left)/2-n],ne:[e.top-n,e.right-n+1],e:[e.bottom-(e.bottom-e.top)/2-n,e.right-n+1],se:[e.bottom-n+1,e.right-n+1],s:[e.bottom-n+1,e.left+(e.right-e.left)/2-n],sw:[e.bottom-n+1,e.left-n],w:[e.top+(e.bottom-e.top)/2-n,e.left-n]};this.handlers.each(function(t){var e=s[t.retrieve("position")];this.setHandlerPosition(t,e)},this)}},setHandlerPosition:function(t,e){t.setStyles({"margin-top":e[0],"margin-left":e[1],width:this.options.handler.size,height:this.options.handler.size})},remove:function(){this.handlers.each(function(t){t.destroy()},this)},hide:function(){this.handlers.each(function(t){t.setStyle("display","none")},this)},show:function(){this.handlers.each(function(t){t.setStyle("display","block")},this)}})},48:function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0});var o,h,r=i(24),c=n(r),l=i(45),a=n(l),u=i(47),f=n(u),d=i(46),p=n(d),m=i(44),v=n(m),g=i(49),b=n(g);e.default=new Class((h={Implements:[Events,Options],options:(o={container:document.body,scope:document.body,target:document.body,trigger:"click",clss:"ui-selector",prefix:"pages",zIndex:100,wrapper:{tagName:"div",clss:"ui-selector"},common:{color:"orange"},border:{size:2,opacity:".8",location:"inside",color:"orange"},menu:{location:"inside",position:"top right",list:{edit:{text:"edit"}}},mask:{opacity:"1",color:"rgba(0,0,0,.6)"},components:[],toolbar:!1},s(o,"menu",!1),s(o,"border",{size:1,display:"none"}),s(o,"resizer",!0),s(o,"overlay",!1),s(o,"cookie",{duration:365,path:"/"}),s(o,"usefx",!0),s(o,"enable",!0),s(o,"timerOnHide",0),s(o,"onCatch",{}),s(o,"onDisable",{}),s(o,"onEnable",{}),s(o,"positionning","relative"),o),initialize:function(t){this.setOptions(t),this.selectors=[],this.container=this.options.container;var e=this.options.scope||this.container,i=this.options.target;this.name=this.options.prefix+"-"+this.options.name,this.size={},this.timer=null,this._initElement(this.options.components),this._initEvents(e,i),this.options.enable&&this.enable(),this.hideNow()},update:function(){var t=this.options.scope,e=this.options.target;this._initEvents(t,e)},_initEvents:function(t,e){var i=this,n=i.options.trigger+":relay("+e+")";t.addEvent(n,function(t,e){i.reach(e)})},attachElement:function(t){var e=this;t.addEvent(e.options.trigger,function(){e.reach(t)}),t.addEvents({mouseenter:function(t){clearTimeout(e.timer)},mouseover:function(t){clearTimeout(e.timer)}})},_initElement:function(t){var e=this;return this.wrapper=new Element("div",{class:this.options.wrapper.clss,zIndex:this.options.zIndex}).set("data-selector",this.options.name).inject(this.options.container,"top"),t.each(function(t){e.options[t].content=e.options.container;var i="build"+t.capitalize();e.options[t].usefx||(e.options[t].usefx=e.options.usefx),e.selectors.push(e[i](e.options[t]))}),this.isEnable()?this.enable():this.disable(),this.wrapper},buildComponent:function(){},buildBorder:function(t){var e=this;t.positionning=this.options.positionning,this.border=new c.default(this.wrapper,t),this.addEvents({show:function(){e.border.show()},hide:function(){e.border.hide()},reach:function(t){e.border.reach(t)},repos:function(t){e.border.reach(t)},highlight:function(t){e.border.highlight(t)}})},buildMask:function(t){var e=this;t.positionning=this.options.positionning,t.scope=this.options.scope,this.mask=new v.default(this.wrapper,t),this.mask.addEvent("click",function(t){e.fireEvent("click",t)}),this.addEvents({show:function(){e.mask.show()},hide:function(){e.mask.hide()},reach:function(t){e.mask.reach(t)},repos:function(t){e.mask.reach(t)},highlight:function(t){e.mask.highlight(t)}})},buildResizer:function(t){var e=this;this.resizer=new f.default(this.wrapper,t).addEvents({mouseleave:function(){e.hide()},mouseenter:function(){clearTimeout(e.timer)}}),this.addEvents({show:function(t){e.resizer.show()},hide:function(t){e.resizer.hide()},reach:function(t){e.resizer.reach(t)},repos:function(t){e.resizer.reach(t)}})},buildMenu:function(t){var e=this;t.positionning=this.options.positionning,this.menu=new a.default(this.wrapper,t).addEvent("click",function(t){e.fireEvent("menu",t)}),this.options.timerOnHide&&this.menu.element.addEvents({mouseleave:function(){e.hide()},mouseenter:function(){clearTimeout(e.timer)}}),this.addEvents({show:function(){e.menu.element.show()},hide:function(){e.menu.element.hide()},reach:function(t){e.menu.reach(t)},repos:function(t){e.menu.reach(t)},highlight:function(t){e.menu.element.highlight(t)}})},buildStatus:function(t){var e=this;this.status=new b.default(this.wrapper,t),this.options.timerOnHide&&this.status.element.addEvents({mouseleave:function(){e.hide()},mouseenter:function(){clearTimeout(e.timer)}}),this.addEvents({show:function(){e.status.element.show()},hide:function(){e.status.element.hide()},reach:function(t){e.status.reach(t)},repos:function(t){e.status.reach(t)},highlight:function(t){e.status.element.highlight(t)}})},_initOverlay:function(){var t=this;this.overlay=new p.default({container:this.options.container}).addEvents({click:function(){t.fireEvent("click",t.el)},dblclick:function(){t.fireEvent("dblclick",t.el)}}),this.options.timerOnHide&&this.overlay.element.addEvents({mouseleave:function(){clearTimeout(t.timer),t.hide()},mouseenter:function(){clearTimeout(t.timer)}}),this.addEvents({show:function(e){t.overlay.show()},hide:function(e){t.overlay.hide()},reach:function(e){t.overlay.reach(e)},repos:function(e){t.overlay.reach(e)},highlight:function(e){t.overlay.highlight(e)}})},set:function(){},reach:function(t){if(t)this.el=t;else{if(!this.el)return;t=this.el}this.isEnable&&(this.show(),this.fireEvent("reach",t))},repos:function(t){if(t)this.el=t;else{if(!this.el)return;t=this.el}this.isEnable&&(this.show(),this.fireEvent("repos",t))}},s(h,"set",function(t,e){var i=this;return t?this[t][t](e):this.selectors.each(function(t){i[t][t](e)}),this}),s(h,"add",function(t){}),s(h,"remove",function(t){}),s(h,"hide",function(){clearTimeout(this.timer),this.timer=function(){this.fireEvent("hide")}.delay(this.options.timerOnHide,this)}),s(h,"hideNow",function(){clearTimeout(this.timer),this.fireEvent("hide")}),s(h,"show",function(){clearTimeout(this.timer),this.isEnable&&this.fireEvent("show")}),s(h,"highlight",function(t){this.isEnable&&this.fireEvent("highlight",t)}),s(h,"enable",function(t){this.isEnable=!0,Cookie.write(this.name,"1",this.options.cookie)}),s(h,"disable",function(t){this.isEnable=!1,Cookie.write(this.name,"0",this.options.cookie),this.hideNow()}),s(h,"isEnable",function(){return"1"===Cookie.read(this.name)}),s(h,"toggle",function(){"1"===Cookie.read(this.name)?this.disable():this.enable()}),h))},49:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({Implements:[Events,Options],options:{container:document.body,type:"status",zIndex:3,clss:"selector-status",position:"top left",location:"outside",offset:[1,1],effect:{duration:100,transition:"expo:out",link:"cancel"}},initialize:function(t,e){this.setOptions(e);var i=this.options.offset;"number"==typeOf(i)?this.offset=[i,i]:this.offset=i,this._initElement(t)},_initElement:function(t){this.element=new Element("span",{class:this.options.clss,zIndex:this.options.zIndex,html:"status"}).inject(t),this.fx=new Fx.Morph(this.element,this.options.effect)},setStatus:function(t){this.element.set("html",t)},getStatus:function(t){var e=this.options,i="";if(e.dataset){var n=t.dataset[e.dataset],s=n.split(".");i+=s.length>1?i+s[1]:i+s}return e.attr&&(i+=t.get(e.attr)),i},reach:function(t){if(t)this.el=t;else{if(!this.el)return;t=this.el}var e=this.options;this.show();var i=this.element.getCoordinates(),n=t.getCoordinates(),s="auto",o="auto",h="auto",r="auto";e.position.indexOf("left")>-1&&(o=n.left+this.offset[0]),e.position.indexOf("right")>-1&&(o=n.left+n.width-i.width+this.offset[0]),e.position.indexOf("top")>-1&&(s=n.top),e.position.indexOf("bottom")>-1&&(s=n.top+n.height),"outside"==e.location&&(s=s-i.height-this.offset[1]),"inside"==e.location&&(s+=this.offset[1]),this.options.usefx?this.fx.start({top:s,bottom:h,left:o,right:r}):this.element.setStyles({position:"absolute",top:s,bottom:h,left:o,right:r})},getParent:function(){return this.parent},hide:function(){this.element.hide()},show:function(){this.element.show()}})}})});