(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{121:function(t,n){},478:function(t,n,e){"use strict";e.r(n);e(1);var c={name:"comment",props:{comment:{type:Object,required:!0}},components:{"c-dropdown-menu":function(t){return e.e(276).then(function(){var n=[e(1411)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-reply":function(t){return e.e(235).then(function(){var n=[e(1409)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-button-arrows":function(t){return e.e(205).then(function(){var n=[e(1551)];t.apply(null,n)}.bind(this)).catch(e.oe)}},data:function(){return{reply:!1}}},o=(e(784),e(0)),s=Object(o.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"community-item__comment",class:{"is-reply":t.reply}},[e("c-button-arrows",{attrs:{size:"xl",colored:""}},[e("span",{class:{up:t.comment.rate>400,down:t.comment.rate<0}},[t._v(t._s(t.comment.rate))])]),t._v(" "),e("div",{staticClass:"comment-container"},[e("c-dropdown-menu",{staticStyle:{right:"5px",top:"10px"},attrs:{dropPosition:"right"}}),t._v(" "),e("div",{staticClass:"comment-content"},[e("div",{staticClass:"user-info"},[e("c-img",{attrs:{src:t.comment.author.img}}),t._v(" "),e("div",[e("h6",[t._v(t._s(t.comment.author.name))]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t._f("timeAgoShort")(t.comment.date)))])])],1),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.comment.text))])]),t._v(" "),e("div",{staticClass:"sub-comments-list"},[t._t("default")],2)],1)],1),t._v(" "),e("c-reply",{on:{replyMode:function(n){t.reply=n}}})],1)},[],!1,null,"a85b4450",null);n.default=s.exports},784:function(t,n,e){"use strict";var c=e(121);e.n(c).a}}]);