(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{107:function(t,n){},1170:function(t,n,r){"use strict";var c=r(394);r.n(c).a},1210:function(t,n,r){"use strict";r.r(n);var c=r(405),e={name:"currency-dropdown",props:{current_currency:Object,currencies:Array},components:{"c-country-flag":c.a,"c-crypto-icon":function(t){return r.e(265).then(function(){var n=[r(1180)];t.apply(null,n)}.bind(this)).catch(r.oe)}},data:function(){return{showList:!1}},methods:{toggleList:function(){this.showList=!this.showList},changeCurrency:function(t){this.$emit("change",t),this.toggleList()}}},s=(r(1170),r(0)),a=Object(s.a)(e,function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"currency-dropdown"},[r("div",{staticClass:"currency-dropdown__current",on:{click:t.toggleList}},[t.current_currency.country?r("c-country-flag",{attrs:{country:t.current_currency.country,size:"small"}}):r("c-crypto-icon",{attrs:{name:t.current_currency.code}}),t._v(" "),r("span",{staticClass:"currency-name"},[t._v("\n            "+t._s(t.current_currency.code)+"\n        ")]),t._v(" "),r("i",{staticClass:"fas ",class:t.showList?"fa-angle-up":"fa-angle-down"})],1),t._v(" "),r("transition",{attrs:{name:"slide-in-top"}},[t.showList?r("div",{directives:[{name:"click-outside",rawName:"v-click-outside.bool",value:t.showList,expression:"showList",modifiers:{bool:!0}}],staticClass:"currency-dropdown__list"},[r("ul",{class:{"d-block":t.showList}},t._l(t.currencies,function(n,c){return r("li",{key:c,staticClass:"currency-dropdown__list-item",on:{click:function(r){t.changeCurrency(n)}}},[n.country?r("c-country-flag",{attrs:{country:n.country,size:"small"}}):r("c-crypto-icon",{attrs:{name:n.code}}),t._v(" "),r("span",{staticClass:"currency-name"},[t._v("\n                        "+t._s(n.code)+"\n                    ")])],1)}))]):t._e()])],1)},[],!1,null,"44e4faf6",null);n.default=a.exports},394:function(t,n){},405:function(t,n,r){"use strict";r(687);var c={name:"CountryFlag",props:{country:{type:String,required:!0,validator:function(t){return 2===t.length}},size:{type:String,validator:function(t){return"small"===t||"normal"===t||"big"===t}}},computed:{flagIconClass(){return{[`flag ${this.flagIconCountry}`]:!0,[this.flagMargin]:!0}},flagIconCountry(){return`flag-${this.country.toLowerCase()}`},flagWidth(){switch(this.size){case"small":return"16";case"normal":return"32";case"big":return"64";default:return"32"}},flagStyle(){return`transform: scale(calc(${this.flagWidth} / 64));`},flagMargin(){switch(this.size){case"small":return"small-flag";case"normal":return"normal-flag";case"big":return"big-flag";default:return"normal-flag"}}}},e=(r(686),r(0)),s=Object(e.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.flagIconClass,style:this.flagStyle})},[],!1,null,"4c4e3cee",null);n.a=s.exports},686:function(t,n,r){"use strict";var c=r(107);r.n(c).a},687:function(t,n){}}]);