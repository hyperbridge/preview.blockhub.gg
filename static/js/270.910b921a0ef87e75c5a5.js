(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1117:function(t,e,n){"use strict";var a=n(340);n.n(a).a},1195:function(t,e,n){"use strict";n.r(e);var a={name:"c-money-info",props:{amount:{required:!0},currency:{default:"USD"},label:{default:!1},goal:{}},components:{"c-progress-bar":function(t){return n.e(171).then(function(){var e=[n(1193)];t.apply(null,e)}.bind(this)).catch(n.oe)}},computed:{percentage:function(){return this.goal?parseFloat(this.amount)/parseFloat(this.goal)*100:100}},filters:{currency_sign:function(t){switch(t){case"EUR":return"€";case"GBP":return"£";default:return"$"}}}},r=(n(1117),n(0)),s=Object(r.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"money-info"},[n("c-progress-bar",{attrs:{percentages:t.percentage,direction:"vertical"}}),t._v(" "),n("div",{staticClass:"money-info__detail"},[n("div",{staticClass:"text"},[t._v(t._s(t.label))]),t._v(" "),n("div",{staticClass:"amount-detail"},[t._v("\n            "+t._s(t._f("convertCurrency")(t.amount))+"\n            "),t.goal?n("span",[t._v(" of "+t._s(t._f("convertCurrency")(t.goal)))]):t._e()])])],1)},[],!1,null,"3bf5b142",null);e.default=s.exports},340:function(t,e){}}]);