(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{112:function(t,n){},494:function(t,n,i){"use strict";var s=i(112);i.n(s).a},676:function(t,n,i){"use strict";i.r(n);var s={name:"inline-notification",props:["type"],data:function(){return{show:!0}},methods:{actionOnClose:function(){this.show=!1}},computed:{notif_icon:function(){switch(this.type){case"info":return"info";case"success":return"check-circle";case"warning":return"exclamation-triangle";case"danger":return"times-circle";default:return"cog"}}}},e=(i(494),i(0)),a=Object(e.a)(s,function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{name:"fade"}},[t.show?i("div",{staticClass:"inline-notification",class:["type-"+t.type]},[i("div",{staticClass:"inline-notification__icon"},[i("i",{class:"fas fa-"+t.notif_icon})]),t._v(" "),i("div",{staticClass:"inline-notification__text"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"close",on:{click:function(n){t.actionOnClose()}}},[i("i",{staticClass:"fas fa-times"})])]):t._e()])},[],!1,null,"2078918a",null);n.default=a.exports}}]);