(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1258:function(t,n,e){"use strict";e.r(n);var i={name:"c-rating-block",props:{items:{type:[Array,Object]},fullReviewsLink:{type:String},rateGameLink:{type:String}},components:{"c-block":function(t){return Promise.resolve().then(function(){var n=[e(1394)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-rating-stars":function(t){return e.e(169).then(function(){var n=[e(1222)];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:{}},s=(e(807),e(0)),a=Object(s.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-block",{attrs:{title:"Rating",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[t.items.length>0?e("div",{staticClass:"w-100"},[e("ul",{staticClass:"rating-block__list"},t._l(t.items,function(n,i){return e("li",{key:i},[e("div",{staticClass:"rating-block__info"},[e("span",{staticClass:"rating-block__name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"rating-block__number"},[t._v(t._s(n.number))])]),t._v(" "),e("c-rating-stars",{staticClass:"rating-block__stars",attrs:{number:n.number}})],1)})),t._v(" "),t.fullReviewsLink?e("c-button",{attrs:{status:"outline-white",href:t.fullReviewsLink}},[t._v("\n            See Full Reviews\n        ")]):t._e(),t._v(" "),t.rateGameLink?e("c-button",{attrs:{status:"outline-white",href:t.rateGameLink}},[t._v("\n            Rate this game\n        ")]):t._e()],1):e("div",[e("h4",[t._v("No reviews yet.")]),t._v(" "),e("c-button",{attrs:{tag:"button",status:"outline-white"},on:{click:function(n){t.$emit("goto")}}},[t._v("Be the first reviewer")])],1)])},[],!1,null,"9753917c",null);n.default=a.exports},244:function(t,n){},807:function(t,n,e){"use strict";var i=e(244);e.n(i).a}}]);