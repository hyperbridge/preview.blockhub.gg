(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{121:function(t,n){},528:function(t,n,i){"use strict";var s=i(121);i.n(s).a},755:function(t,n,i){"use strict";i.r(n);var s={name:"community-spotlight",props:{discussions:Array,communityUrl:String,editing:Boolean,activateElement:Boolean},components:{"c-block":function(t){return i.e(109).then(function(){var n=[i(751)];t.apply(null,n)}.bind(this)).catch(i.oe)}}},e=(i(528),i(0)),a=Object(e.a)(s,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("c-block",{attrs:{title:"Community Spotlight",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[i("template",{slot:"heading-bar"},[i("a",{staticClass:"title-icon text-white",attrs:{href:t.communityUrl}},[t.activateElement?i("i",{staticClass:"fas fa-cog"}):i("i",{staticClass:"fas fa-comments"})])]),t._v(" "),t.discussions.length>0?i("div",{staticClass:"w-100"},[t.editing?i("div",{staticClass:"editor-container editor-container--style-2"},[t.activeElement?t._e():i("p",{},[t._v("\n                Set Up Community\n            ")])]):t._e(),t._v(" "),i("ul",{staticClass:"community-spotlight__list"},t._l(t.discussions,function(n,s){return i("li",{key:s},[i("a",{attrs:{href:n.link}},[i("span",{staticClass:"community-spotlight__name"},[t._v(t._s(n.name))]),t._v(" "),i("span",{staticClass:"community-spotlight__count"},[t._v(t._s(n.count))])])])})),t._v(" "),i("c-button",{attrs:{status:"outline-white",href:t.communityUrl,hide_icon:""}},[t._v("\n            Go To Community\n        ")])],1):i("div",{staticClass:"w-100"},[i("h4",[t._v("No highlighted community activity yet.")])])],2)},[],!1,null,"219914a6",null);n.default=a.exports}}]);