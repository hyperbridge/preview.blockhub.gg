(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1211:function(t,e,a){"use strict";a.r(e);var s={props:{},data:function(){return{options_icons:{subtitles:"closed-captioning",interface:"language",full_audio:"volume-off"},showDetails:!1,list:[{show:"default",name:"Cryptocurrency Payments",value:!0},{name:"Blockchain Assets",value:!1},{name:"Blockchain Licensing",value:!1},{name:"Provably Fair",value:!1},{name:"Open Source",value:!1}]}},methods:{toggleDetails:function(){this.showDetails=!this.showDetails}}},n=(a(777),a(0)),i=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("c-block",{attrs:{title:"Decentralization Meter",noGutter:!0,bgGradient:!0,onlyContentBg:!0}},[a("template",{slot:"heading-bar"},[a("i",{staticClass:"fas fa-laptop title-icon"})]),t._v(" "),t.list.length?a("ul",{staticClass:"decentralization-meter"},t._l(t.list.map(function(t){return t.value}).sort().reverse(),function(e,s){return a("li",{key:s,staticClass:"decentralization-meter-item",class:{disabled:!e}},[a("div",[t._v(t._s(e.title))])])})):t._e(),t._v(" "),a("table",{staticClass:"decentralization-meter__table"},[a("thead",[a("th",{attrs:{width:"80%"}}),t._v(" "),a("th")]),t._v(" "),a("tbody",[t._l(t.list,function(e,s){return"default"==e.show||t.showDetails?a("transition-group",{attrs:{name:"fadeLeft",tag:"tr"}},[a("td",{key:e.name+"-1",staticClass:"decentralization-meter__table-key"},[t._v(t._s(e.name))]),t._v(" "),a("td",{key:e.name+"-2",staticClass:"decentralization-meter__table-value"},[a("i",{staticClass:"fas",class:{"fa-check-circle":!!e.value,"fa-times-circle":!e.value}})])]):t._e()}),t._v(" "),a("tr",{staticStyle:{background:"transparent"}},[a("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t.showDetails?a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"decentralization-meter__toggle-btn",on:{click:t.toggleDetails}},[t._v("\n                            Hide all "),a("i",{staticClass:"fas fa-angle-double-up"})])]):a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"decentralization-meter__toggle-btn",on:{click:t.toggleDetails}},[t._v("\n                            Show all "),a("i",{staticClass:"fas fa-angle-double-down"})])])],1)])],2)])],2)},[],!1,null,"95e012f4",null);e.default=i.exports},211:function(t,e){},777:function(t,e,a){"use strict";var s=a(211);a.n(s).a}}]);