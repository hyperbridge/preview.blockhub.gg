(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1319:function(e,t,a){"use strict";a.r(t);var c=a(6),s=a.n(c),n=a(16),l=a.n(n),o=a(4),i=a.n(o),r={components:{"c-layout":function(e){return Promise.resolve().then(function(){var t=[a(1317)];e.apply(null,t)}.bind(this)).catch(a.oe)}},data:function(){return{selected:[]}},computed:{selectAll:{get:function(){return this.selected.length==this.darklaunches.length},set:function(e){this.selected=e?this.darklaunches.map(function(e){return e.code}):[]}},darklaunches:function(){var e=this;return this.$store.state.application.darklaunch_flags.map(function(t){return i()({},t,{enabled:e.$store.state.application.account.darklaunch_flags.map(function(e){return e.enabled?e.code:void 0}).includes(t.code)})})}},methods:{toggleDarklaunch:function(e){var t=this.$store.state.application.account.darklaunch_flags.find(function(t){return t.code===e});t.enabled?this.$store.dispatch("application/disableDarklaunch",t.code):this.$store.dispatch("application/enableDarklaunch",t.code)},enableSelected:function(){var e=this;return l()(s.a.mark(function t(){var a,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a in e.selected)c=e.darklaunches[a],e.$store.dispatch("application/enableDarklaunch",c.code);case 1:case"end":return t.stop()}},t,e)}))()},disableSelected:function(){var e=this;return l()(s.a.mark(function t(){var a,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(a in e.selected)c=e.darklaunches[a],e.$store.dispatch("application/disableDarklaunch",c.code);case 1:case"end":return t.stop()}},t,e)}))()}}},d=(a(751),a(0)),u=Object(d.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("c-layout",{attrs:{navigationKey:"settings"}},[a("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Darklaunch Settings",noGutter:!0,onlyContentBg:!0,bgGradient:!0}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12",staticStyle:{padding:"0"}},[a("div",{},[a("div",{staticClass:"page-heading"},[a("div",{staticClass:"page-heading__container"},[a("p",{staticClass:"caption"},[e._v("Select darklaunches to enable")])]),e._v(" "),a("div",{staticClass:"page-heading__container float-right d-none d-md-block"},[e.selected.length?a("button",{staticClass:"btn btn-outline-secondary",on:{click:e.enableSelected}},[e._v("Enable selected")]):e._e(),e._v(" "),e.selected.length?a("button",{staticClass:"btn btn-outline-secondary",on:{click:e.disableSelected}},[e._v("Disable selected")]):e._e()])]),e._v(" "),a("div",{},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-dark margin-bottom-0"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col",width:"40"}},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectAll,expression:"selectAll"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.selectAll)?e._i(e.selectAll,null)>-1:e.selectAll},on:{change:function(t){var a=e.selectAll,c=t.target,s=!!c.checked;if(Array.isArray(a)){var n=e._i(a,null);c.checked?n<0&&(e.selectAll=a.concat([null])):n>-1&&(e.selectAll=a.slice(0,n).concat(a.slice(n+1)))}else e.selectAll=s}}}),e._v(" "),a("span",{staticClass:"custom-control-label"})])]),e._v(" "),a("th",{attrs:{scope:"col"}},[e._v("Code")]),e._v(" "),a("th",{attrs:{scope:"col",width:"160"}},[e._v("Description")]),e._v(" "),a("th",{attrs:{scope:"col"}},[e._v("Type")]),e._v(" "),a("th",{attrs:{scope:"col"}})])]),e._v(" "),a("tbody",[e._l(e.darklaunches,function(t){return[a("tr",{key:t.code},[a("td",[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"custom-control-input",attrs:{type:"checkbox",number:""},domProps:{value:""+t.code,checked:Array.isArray(e.selected)?e._i(e.selected,""+t.code)>-1:e.selected},on:{change:function(a){var c=e.selected,s=a.target,n=!!s.checked;if(Array.isArray(c)){var l=""+t.code,o=e._i(c,l);s.checked?o<0&&(e.selected=c.concat([l])):o>-1&&(e.selected=c.slice(0,o).concat(c.slice(o+1)))}else e.selected=n}}}),e._v(" "),a("span",{staticClass:"custom-control-label"})])]),e._v(" "),a("td",[e._v("\n                                                    "+e._s(t.code)+"\n                                                    "),t.enabled?a("span",{staticClass:"badge badge-success"},[e._v("Enabled")]):e._e(),e._v(" "),t.enabled?e._e():a("span",{staticClass:"badge badge-warning"},[e._v("Disabled")])]),e._v(" "),a("td",[e._v("\n                                                    "+e._s(t.description)+"\n                                                ")]),e._v(" "),a("td",[e._v("\n                                                    "+e._s(t.type)+"\n                                                ")]),e._v(" "),a("td",[a("button",{staticClass:"btn btn-light btn-sm",on:{click:function(a){a.preventDefault(),e.toggleDarklaunch(t.code)}}},[e._v("Toggle")])])])]})],2)])])])])])])])],1)},[],!1,null,"2d3f6d38",null);t.default=u.exports},230:function(e,t){},751:function(e,t,a){"use strict";var c=a(230);a.n(c).a}}]);