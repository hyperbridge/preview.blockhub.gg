(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1461:function(t,s,a){"use strict";a.r(s);var e={name:"asset-overview-popup",props:{asset:{type:Object}},components:{"c-heading-bar":function(t){return Promise.resolve().then(function(){var s=[a(1573)];t.apply(null,s)}.bind(this)).catch(a.oe)}}},i=(a(971),a(0)),n=Object(i.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"asset-overview-popup"},[a("div",{staticClass:"asset-overview-popup__head"},[a("div",{staticClass:"link"},[a("c-icon",{attrs:{name:"link"}})],1),t._v(" "),a("div",{staticClass:"img"},[a("c-img",{attrs:{src:t.asset.image}})],1),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v(t._s(t.asset.name))]),t._v(" "),a("h6",[t._v(t._s(t.asset.productName))]),t._v(" "),a("div",{staticClass:"description"},[a("h6",[t._v(t._s(t._f("convertCurrency")(t.asset.price.current)))]),t._v(" "),a("p",[t._v("Based on 7461 other transactions")]),t._v(" "),a("p",[t._v("Lowest: "+t._s(t._f("convertCurrency")(t.asset.price.min))+" Highest: "+t._s(t._f("convertCurrency")(t.asset.price.max)))])])])]),t._v(" "),a("div",{staticClass:"asset-overview-popup__action"},[a("div",{staticClass:"button-line d-flex w-100 justify-content-between"},[a("c-button",{attrs:{status:"danger",iconHide:""}},[a("c-icon",{attrs:{name:"trash-alt"}})],1),t._v(" "),a("div",{staticClass:"text-right"},[a("c-button",{attrs:{status:"share"}},[t._v("\n                    Send\n                ")]),t._v(" "),a("c-button",{attrs:{status:"success"}},[t._v("\n                    Use\n                ")])],1)],1),t._v(" "),a("div",{staticClass:"w-100 py-4"},[a("c-switch",{attrs:{label:"Accept offers for this item?",checked:t.asset.acceptOffers,label_size:"18px",size:"sm",label_position:"left"},on:{change:function(s){t.$store.commit("assets/negateValue",{id:t.asset.id,iprop:"acceptOffers"})}}})],1)]),t._v(" "),a("div",{staticClass:"asset-overview-popup__info-list"},[a("div",{staticClass:"metadata"},[a("c-heading-bar",{attrs:{name:"Game Metadata",showArrows:!1,showBackground:!1}}),t._v(" "),a("div",{staticClass:"metadata__table padding-bottom-10"},t._l(t.asset.metadata,function(s,e,i){return a("div",{key:i,staticClass:"item-row"},[a("div",{staticClass:"item-label"},[a("i",{staticClass:"fas fa-file"}),t._v("\n                        "+t._s(t._f("upperFirstChar")(t._f("space")(e)))+"\n                    ")]),t._v(" "),a("div",{staticClass:"item-description"},["object"==typeof s?a("ul",{staticClass:"margin-0"},t._l(s,function(s,e,i){return a("li",{key:i},[t._v("\n                                "+t._s(t._f("upperFirstChar")(t._f("space")(e)))+": "+t._s(s)+"\n                            ")])})):a("span",[t._v("\n                            "+t._s(s)+"\n                        ")])])])}))],1)])])},[],!1,null,"3edbca23",null);s.default=n.exports},287:function(t,s){},971:function(t,s,a){"use strict";var e=a(287);a.n(e).a}}]);