!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Border",[],e):"object"==typeof exports?exports.Border=e():(t.caoutchouc=t.caoutchouc||{},t.caoutchouc.Border=e())}(this,function(){return webpackJsonpcaoutchouc__name_([26,0],{0:function(t,e,i){t.exports=i(24)},24:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=new Class({Implements:[Events,Options],options:{container:document.body,type:"solid",clss:"selector-border",zIndex:2,size:1,color:"#000",opacity:"1",location:"outside",effect:{duration:100,transition:"expo:out",link:"cancel"}},initialize:function(t,e){this.setOptions(e),this.container=t,this.lines=[],this._initElement()},_initElement:function(){var t=[[],[],[],[]];t.each(function(t){this.buildBorder()},this)},buildBorder:function(){var t=this,e=new Element("div",{class:this.options.clss}).addClass("type-"+t.options.type).setStyles({zIndex:this.options.zIndex,backgroundColor:this.options.color,opacity:this.options.opacity}).addEvent("click",function(){t.fireEvent("click")}).inject(this.container,"top");e.set("morph",this.options.effect),this.lines.push(e)},reach:function(t){if(t)this.el=t;else{if(!this.el)return;t=this.el}var e=[],i=this.options.size;try{t.getCoordinates()}catch(t){return}var o=t.getCoordinates();if("relative"==this.options.positionning){var n=t.getPosition(this.container);o.left=n.x,o.right=n.x+o.width,o.top=n.y,o.bottom=n.y+o.height}return e="inside"==this.options.location?[[o.top,o.left,o.right-o.left-i,i],[o.top,o.right-i,i,o.bottom-o.top],[o.bottom-i,o.left+i,o.right-o.left-2*i,i],[o.top+i,o.left,i,o.bottom-o.top-i]]:[[o.top-i,o.left-i,o.right-o.left+2*i,i],[o.top,o.right,i,o.bottom-o.top],[o.bottom,o.left-i,o.right-o.left+2*i,i],[o.top,o.left-i,i,o.bottom-o.top]],this.lines.each(function(t,i){this._setLinePosition(t,e[i])},this),this.fireEvent("selected"),this},addClass:function(t){this.lines.each(function(e,i){e.addClass(t)},this)},removeClass:function(t){this.lines.each(function(e,i){e.addClass(t)},this)},_setLinePosition:function(t,e){this.options.usefx?t.morph({"margin-top":e[0],"margin-left":e[1],width:e[2],height:e[3]}):t.setStyles({"margin-top":e[0],"margin-left":e[1],width:e[2],height:e[3]})},set:function(t,e){return selector?self[selector][t](e):this.selectors.each(function(i){self[i][t](e)}),this},setColor:function(t){this._setStyle("backgroundColor",t)},setOpacity:function(t){this._setStyle("opacity",t)},_setStyle:function(t,e){return this.lines.each(function(i){i.setStyle(t,e)}),this},setStyles:function(t){return this.lines.each(function(e){e.setStyles(t)}),this},hide:function(){return this._setStyle("display","none"),this},show:function(){return this._setStyle("display","block"),this},highlight:function(t){return this.lines.each(function(e){e.highlight(t)}),this},remove:function(){return this.lines.each(function(t){t.destroy()}),this}})}})});