(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{125:function(t,e){},1281:function(t,e,n){"use strict";n.r(e);var c={components:{"c-block":function(t){return Promise.resolve().then(function(){var e=[n(1239)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tabs":function(t){return n.e(155).then(function(){var e=[n(1204)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tab":function(t){return n.e(154).then(function(){var e=[n(1206)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-trade-offer":function(t){return n.e(227).then(function(){var e=[n(1161)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-tag-count":function(t){return n.e(191).then(function(){var e=[n(1164)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){return{activeTab:1}},computed:{notifsCount:function(){return{}},offers:function(){return this.$store.state.assets.transactions.reduce(function(t,e){var n=e.createdBy,c=e.status;return t[1!==n?"closed"===c?"closed":"received":"sent"].push(e),t},{received:[],sent:[],closed:[]})}}},a=(n(624),n(0)),s=Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("c-layout",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[t._v("\n                    Marketplace\n                    "),n("h2",[t._v("Trade")]),t._v(" "),n("c-block",[n("div",{staticClass:"trade-block"},[n("nav",{staticClass:"trade-block__nav"},[n("h3",[t._v("Offers")]),t._v(" "),n("ul",{staticClass:"trade-block__menu-list reset-list"},t._l(["received","sent","closed"],function(e,c){return n("li",{key:c},[n("a",{staticClass:"menu-list__item",class:{"menu-list__item--active":t.activeTab===c+1},on:{click:function(e){t.activeTab=c+1}}},[t._v("\n                                            "+t._s(t._f("upperFirstChar")(e))+"\n                                            "),n("c-tag-count",{attrs:{number:t.offers[e].length}})],1)])}))]),t._v(" "),n("c-tabs",{attrs:{active_tab_prop:t.activeTab,disableMenu:""}},t._l(t.offers,function(e,c,a){return n("c-tab",{key:c,staticClass:"trade-block__offers-tab",attrs:{tab_id:a+1}},[t._l(e,function(t){return n("c-trade-offer",{key:t.id,attrs:{offer:t},on:{wasSeen:function(e){t.new=!1}}})}),t._v(" "),e.length?t._e():n("p",[t._v("No offers were found")])],2)}))],1)])],1)])])])},[],!1,null,"00ce806a",null);e.default=s.exports},624:function(t,e,n){"use strict";var c=n(125);n.n(c).a}}]);