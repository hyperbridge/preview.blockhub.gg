(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{472:function(s,t,a){"use strict";var e=a(82);a.n(e).a},695:function(s,t,a){"use strict";a.r(t);var e=a(18),i=a(17),c=a(247),n={props:["asset"],components:{"c-button":e.default,"c-switch":i.default,"c-heading-bar":c.default}},l=(a(472),a(0)),r=Object(l.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"asset-overview-popup"},[a("div",{staticClass:"asset-overview-popup__head"},[s._m(0),s._v(" "),a("div",{staticClass:"img"},[a("c-img",{attrs:{src:s.asset.image}})],1),s._v(" "),a("div",{staticClass:"info"},[a("h4",[s._v(s._s(s.asset.name))]),s._v(" "),a("h6",[s._v(s._s(s.asset.game_name))]),s._v(" "),a("div",{staticClass:"description"},[a("h6",[s._v(s._s(s.asset.price.current)+"$")]),s._v(" "),a("p",[s._v("Based on 7461 other transactions")]),s._v(" "),a("p",[s._v("Lowest: "+s._s(s.asset.price.min)+"$ Highest: "+s._s(s.asset.price.max)+"$")])])])]),s._v(" "),a("div",{staticClass:"asset-overview-popup__action"},[a("div",{staticClass:"button-line d-flex w-100 justify-content-between"},[a("c-button",{attrs:{status:"danger",icon_hide:""}},[a("i",{staticClass:"fas fa-trash-alt"})]),s._v(" "),a("div",{staticClass:"text-right"},[a("c-button",{attrs:{status:"share"}},[s._v("\n                    Send\n                ")]),s._v(" "),a("c-button",{attrs:{status:"success"}},[s._v("\n                    Use\n                ")])],1)],1),s._v(" "),a("div",{staticClass:"w-100 py-4"},[a("c-switch",{attrs:{label:"Accept offers for this item?",checked:s.asset.accept_offers,label_size:"18px",size:"sm",label_position:"left"}})],1)]),s._v(" "),a("div",{staticClass:"asset-overview-popup__info-list"},[a("div",{staticClass:"metadata"},[a("c-heading-bar",{attrs:{name:"Game Metadata",showArrows:!1,showBackground:!1}}),s._v(" "),a("div",{staticClass:"metadata__table"},s._l(s.asset.metadata,function(t,e){return a("div",{key:e,staticClass:"item-row"},[a("div",{staticClass:"item-label"},[a("i",{staticClass:"fas fa-file"}),s._v("\n                        "+s._s(t.label)+"\n                    ")]),s._v(" "),a("div",{staticClass:"item-description"},[s._v("\n                        "+s._s(t.text)+"\n                    ")])])}))],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"link"},[t("i",{staticClass:"fas fa-link"})])}],!1,null,"6f447f16",null);t.default=r.exports},82:function(s,t){}}]);