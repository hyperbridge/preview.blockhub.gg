(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1217:function(t,a,e){"use strict";e.r(a);var n={name:"language-support",props:{languages:{type:Array,required:!0}},data:function(){return{options_icons:{subtitles:"closed-captioning",interface:"language",full_audio:"volume-off"},userLang:"",show:!1,langList:[]}},created:function(){var t=this,a=this.$store.state.application.account.language.code,e=this.languages;this.userLang=a.toLowerCase(),e.forEach(function(a){a.code?t.userLang.includes(a.code.toLowerCase())?(a.order=0,a.show="default",t.langList.push(a)):(a.order=1,t.langList.push(a)):("English"===a.name&&(a.order=0,a.show="default"),t.langList.push(a))})},methods:{toggleLang:function(){this.show=!this.show}},computed:{orderLang:function(){return this.langList.sort(function(t,a){return t.order-a.order})}},components:{"c-block":function(t){return Promise.resolve().then(function(){var a=[e(1362)];t.apply(null,a)}.bind(this)).catch(e.oe)}}},s=(e(797),e(0)),o=Object(s.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("c-block",{attrs:{title:"Language Support",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[e("template",{slot:"heading-bar"},[e("i",{staticClass:"fas fa-laptop title-icon"})]),t._v(" "),e("table",{staticClass:"language-support__table"},[e("thead",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Interface")]),t._v(" "),e("th",[t._v("Audio")]),t._v(" "),e("th",[t._v("CC")])]),t._v(" "),e("tbody",[t._l(t.orderLang,function(a,n){return"default"==a.show||t.show||n<5?e("transition-group",{class:["tr-order-"+a.order],attrs:{name:"fadeLeft",tag:"tr"}},[t._l(a,function(a,n){return[e("td",{key:n},"name"==n?[t._v(t._s(a))]:[a?e("i",{staticClass:"fas",class:"fa-"+t.options_icons[n]}):t._e()])]})],2):t._e()}),t._v(" "),e("tr",{staticStyle:{background:"transparent"}},[e("td",{staticClass:"text-center",attrs:{colspan:"10"}},[t.show?e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"language-support__toggle-btn",on:{click:t.toggleLang}},[t._v("\n                        Hide languages "),e("i",{staticClass:"fas fa-angle-double-up"})])]):e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"language-support__toggle-btn",on:{click:t.toggleLang}},[t._v("\n                        Show "+t._s(t.languages.length-5)+" more languages "),e("i",{staticClass:"fas fa-angle-double-down"})])])],1)])],2)])],2)},[],!1,null,"68be2da4",null);a.default=o.exports},235:function(t,a){},797:function(t,a,e){"use strict";var n=e(235);e.n(n).a}}]);