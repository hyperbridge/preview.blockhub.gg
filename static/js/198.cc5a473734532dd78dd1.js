(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1070:function(t,n,r){var e=r(77),s=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&s(t)===t}},1071:function(t,n,r){var e=r(48);e(e.S,"Number",{isInteger:r(1070)})},1072:function(t,n,r){r(1071),t.exports=r(29).Number.isInteger},1404:function(t,n,r){"use strict";r.r(n);var e=r(621),s=r.n(e),u={name:"c-rating-stars",props:{number:{required:!0}},computed:{stars:function(){for(var t=[],n=Number(this.number),r=Math.floor(n).toString(),e=0;e<r;e++)t.push("star");return s()(n)?t:[].concat(t,["star-half"])}}},o=r(0),i=Object(o.a)(u,function(){var t=this.$createElement,n=this._self._c||t;return n("span",this._l(this.stars,function(t,r){return n("c-icon",{key:r,attrs:{name:t}})}))},[],!1,null,null,null);n.default=i.exports},621:function(t,n,r){t.exports={default:r(1072),__esModule:!0}}}]);