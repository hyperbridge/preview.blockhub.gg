(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{21:function(t,e,s){"use strict";s.r(e);var a={name:"c-tab",props:{name:{type:String,required:!0},selected:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1},transparentBg:{type:Boolean,default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},i=(s(416),s(0)),n=Object(i.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],staticClass:"tab-item",class:{"bg-transparent":this.transparentBg}},[e("div",{staticClass:"tab-item__container"},[this._t("default")],2),this._v(" "),this.showFooter?e("div",{staticClass:"tab-item__footer"},[this._t("footer")],2):this._e()])},[],!1,null,"9962aa38",null);e.default=n.exports},37:function(t,e){},416:function(t,e,s){"use strict";var a=s(37);s.n(a).a}}]);