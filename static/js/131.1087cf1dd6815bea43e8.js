(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{328:function(t,n,r){t.exports={default:r(677),__esModule:!0}},675:function(t,n,r){var e=r(25),s=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&s(t)===t}},676:function(t,n,r){var e=r(22);e(e.S,"Number",{isInteger:r(675)})},677:function(t,n,r){r(676),t.exports=r(14).Number.isInteger},728:function(t,n,r){"use strict";r.r(n);var e=r(328),s=r.n(e),u={name:"rating-stars",props:{number:{required:!0}},computed:{stars:function(){for(var t=[],n=Number(this.number),r=Math.floor(n).toString(),e=0;e<r;e++)t.push("star");return s()(n)?t:[].concat(t,["star-half"])}}},o=r(0),i=Object(o.a)(u,function(){var t=this.$createElement,n=this._self._c||t;return n("span",this._l(this.stars,function(t,r){return n("c-icon",{key:r,attrs:{name:t}})}))},[],!1,null,null,null);n.default=i.exports}}]);