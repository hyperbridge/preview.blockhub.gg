(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1099:function(t,s,e){"use strict";var a=e(356);e.n(a).a},1100:function(t,s,e){"use strict";var a=e(357);e.n(a).a},1102:function(t,s,e){"use strict";var a=e(359);e.n(a).a},1345:function(t,s,e){"use strict";e.r(s);var a={name:"c-loading-logo",props:{isLoading:{type:Boolean,default:!1}}},i=(e(1102),e(0)),n={props:["isLoader"],components:{"c-loading-logo":Object(i.a)(a,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"logo-loader"},[s("img",{attrs:{src:"/static/img/blockhub-logotype-color.png"}})])}],!1,null,"3a7a690b",null).exports,"c-dropdown":function(t){return e.e(177).then(function(){var s=[e(1129)];t.apply(null,s)}.bind(this)).catch(e.oe)}},data:function(){return{show_menu:!1}},computed:{account:function(){return this.$store.state.application.account},current_identity:function(){var t=this;return this.$store.state.application.account&&this.$store.state.application.account.identities.find(function(s){return s.id==t.$store.state.application.account.current_identity.id})},is_locked:function(){return this.$store.state.application.locked},is_loading:function(){return this.$store.state.application.loading},is_viewing:function(){return"viewing"===this.$store.state.application.editor_mode},editor_mode:function(){return this.$store.state.application.editor_mode},developer_mode:function(){return this.$store.state.application.developer_mode},signed_in:function(){return this.$store.state.application.signed_in},desktop_mode:function(){return this.$store.state.application.desktop_mode},operating_system:function(){return this.$store.state.application.operating_system}},methods:{clickEdit:function(){this.$store.dispatch("application/setEditorMode","editing")},clickRemove:function(){},clickPublish:function(){this.$store.dispatch("application/setEditorMode","publishing")},clickExit:function(){this.$store.dispatch("application/setEditorMode","viewing")},signOut:function(){this.$store.dispatch("application/signOut"),this.is_loading=!0},toggleMenu:function(){this.show_menu=!this.show_menu},closeWindow:function(){window.specialRequire("electron").remote.BrowserWindow.getFocusedWindow().close()},maximizeWindow:function(){var t=window.specialRequire("electron").remote.BrowserWindow.getFocusedWindow();t.isMaximized()?t.unmaximize():t.maximize()},minimizeWindow:function(){window.specialRequire("electron").remote.BrowserWindow.getFocusedWindow().minimize()}}},c=(e(1100),e(1099),Object(i.a)(n,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"app-header"},[e("div",{staticClass:"app-header__top-bar draggable"}),t._v(" "),e("div",{staticClass:"position-relative w-100",staticStyle:{"margin-top":"-10px",zoom:"0.9"}},[e("div",{staticClass:"app-header__bar-left"},[t.desktop_mode&&"mac"===t.operating_system?e("div",{staticClass:"mac-icons"},[e("a",{staticClass:"close_w",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.closeWindow(s)}}}),t._v(" "),e("a",{staticClass:"minimize",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.minimizeWindow(s)}}}),t._v(" "),e("a",{staticClass:"maximize",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.maximizeWindow(s)}}})]):t._e(),t._v(" "),t.desktop_mode&&"linux"===t.operating_system?e("div",{staticClass:"linux-icons"},[e("a",{staticClass:"close_w",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.closeWindow(s)}}}),t._v(" "),e("a",{staticClass:"minimize",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.minimizeWindow(s)}}}),t._v(" "),e("a",{staticClass:"maximize",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.maximizeWindow(s)}}})]):t._e(),t._v(" "),t.desktop_mode&&"windows"===t.operating_system?e("div",[t.is_locked?t._e():e("a",{staticClass:"app-header__bar-left-link margin-right-0 margin-left-10",attrs:{href:"javascript:;","data-action":"fixedpanel-toggle"}},[e("span",{staticClass:"fas fa-bars"})])]):t._e(),t._v(" "),t.desktop_mode?t._e():e("div",[t._m(0),t._v(" "),e("a",{staticClass:"app-header__bar-left-link",on:{click:function(s){t.$router.go(-1)}}},[e("span",{staticClass:"fa fa-arrow-left"})]),t._v(" "),e("a",{staticClass:"app-header__bar-left-link",on:{click:function(s){t.$router.go(1)}}},[e("span",{staticClass:"fa fa-arrow-right"})])])]),t._v(" "),e("div",{staticClass:"app-header__shadow draggable"}),t._v(" "),e("a",{staticClass:"app-header__bar-center",attrs:{href:t.is_locked?"#":"#/"}},[e("c-loading-logo",{attrs:{isLoading:t.isLoader}})],1),t._v(" "),e("div",{staticClass:"app-header__bar-right"},[t.desktop_mode&&"windows"===t.operating_system?e("div",{staticClass:"windows-icons margin-right-5"},[e("a",{staticClass:"minimize",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.minimizeWindow(s)}}}),t._v(" "),e("a",{staticClass:"maximize",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.maximizeWindow(s)}}}),t._v(" "),e("a",{staticClass:"close_w",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.closeWindow(s)}}})]):e("div",[t.is_locked?t._e():e("a",{staticClass:"app-header__bar-left-link",attrs:{href:"javascript:;","data-action":"fixedpanel-toggle"}},[e("span",{staticClass:"fas fa-bars"})])])]),t._v(" "),t.signed_in&&t.developer_mode?e("div",{staticClass:"app-header__options"},[t.is_viewing?t._e():e("button",{staticClass:"remove-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{click:function(s){t.clickRemove()}}},[e("c-img",{attrs:{src:"data:image/png;base64,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"}}),t._v(" "),t._m(1)],1),t._v(" "),t.is_viewing?t._e():e("button",{staticClass:"publish-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{click:function(s){t.clickPublish()}}},[e("c-img",{attrs:{src:"data:image/png;base64,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"}}),t._v(" "),t._m(2)],1),t._v(" "),t.is_viewing?t._e():e("button",{staticClass:"exit-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{click:function(s){t.clickExit()}}},[t._m(3)])]):t._e(),t._v(" "),!t.signed_in||t.signed_in&&t.is_viewing?e("nav",{staticClass:"app-header__nav hide-on-mobile"},[e("nav",{staticClass:"horizontal-navigation app-header__nav-left"},[t._m(4),t._v(" "),e("ul",[!t.desktop_mode||t.signed_in||t.is_locked?t._e():e("li",{staticClass:"app-header__create-account-btn"},[t._m(5)]),t._v(" "),t.desktop_mode?t._e():e("li",{staticClass:"app-header__download-btn"},[t._m(6)]),t._v(" "),t.signed_in?e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"WALLETS",expression:"'WALLETS'"}]},[t._m(7)]):t._e(),t._v(" "),t.signed_in?e("li",[t._m(8)]):t._e(),t._v(" "),t.signed_in?e("li",[t._m(9)]):t._e(),t._v(" "),t.signed_in?e("li",[e("a",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"STREAMS",expression:"'STREAMS'"}],attrs:{href:"/#/streams"}},[e("span",{staticClass:"icon fa fa-eye"}),t._v(" "),e("span",{staticClass:"text"},[t._v("Streams")])])]):t._e(),t._v(" "),t.signed_in?e("li",[t._m(10)]):t._e()])]),t._v(" "),e("nav",{staticClass:"horizontal-navigation app-header__nav-right"},[t._m(11),t._v(" "),e("ul",[t.signed_in&&t.developer_mode&&t.is_viewing?e("li",[e("button",{staticClass:"edit-btn btn btn-secondary btn-block btn--icon btn--icon-left",on:{click:function(s){t.clickEdit()}}},[e("c-img",{attrs:{src:"data:image/png;base64,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"}}),t._v(" "),t._m(12)],1)]):t._e(),t._v(" "),t.signed_in?e("li",{staticClass:"token"},[t._m(13)]):t._e(),t._v(" "),t.signed_in?e("li",[e("c-dropdown",{staticClass:"ml-4 account-menu",staticStyle:{"z-index":"12"}},[e("template",{slot:"title"},[e("div",{staticClass:"__title"},[e("i",{staticClass:"fa fa-user"}),t._v(" "+t._s(t.current_identity&&t.current_identity.name)+"\n                                ")])]),t._v(" "),e("ul",{staticClass:"item-dropdown"},[e("li",[e("a",{attrs:{href:"/#/account"}},[e("i",{staticClass:"fas fa-user"}),t._v("\n                                        Account Info\n                                    ")])]),t._v(" "),e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"WALLETS",expression:"'WALLETS'"}]},[e("a",{attrs:{href:"/#/account/wallets"}},[e("i",{staticClass:"fas fa-credit-card"}),t._v("\n                                        My Wallets\n                                    ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/#/account/identities"}},[e("i",{staticClass:"fas fa-users"}),t._v("\n                                        Profile Manager\n                                    ")])]),t._v(" "),e("hr"),t._v(" "),e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"CHAT",expression:"'CHAT'"}]},[e("a",{attrs:{href:"/#/settings/chat"}},[e("i",{staticClass:"fas fa-comments"}),t._v("\n                                        Chat Settings\n                                    ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"/#/help"}},[e("i",{staticClass:"fas fa-info-circle"}),t._v("\n                                        FAQ\n                                    ")])])])],2)],1):t._e(),t._v(" "),t.signed_in?e("li",{directives:[{name:"darklaunch",rawName:"v-darklaunch",value:"CONTACTS",expression:"'CONTACTS'"}]},[t._m(14)]):t._e(),t._v(" "),!t.desktop_mode||t.signed_in||t.is_locked?t._e():e("li",[t._m(15)]),t._v(" "),t.is_locked?t._e():e("li",[t._m(16)])])])]):t._e()])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"app-header__bar-left-link",attrs:{href:"/#/"}},[s("span",{staticClass:"fa fa-home"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"fa fa-trash"}),this._v(" Remove")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"fa fa-check"}),this._v(" Publish")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"fa fa-eye"}),this._v(" Preview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-light btn--icon",attrs:{"data-action":"horizontal-show"}},[s("span",{staticClass:"fa fa-bars"}),this._v(" Toggle navigation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/account/signup"}},[s("span",{staticClass:"text"},[this._v("CREATE ACCOUNT")]),this._v(" "),s("span",{staticClass:"fa fa-user-plus"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/download"}},[s("span",{staticClass:"text"},[this._v("DOWNLOAD")]),this._v(" "),s("span",{staticClass:"fa fa-download"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/account/wallets"}},[s("span",{staticClass:"icon fa fa-credit-card"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Wallets")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/"}},[s("span",{staticClass:"icon fa fa-shopping-cart"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Store")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/chest"}},[s("span",{staticClass:"icon fa fa-box-open"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Chest")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/community"}},[s("span",{staticClass:"icon fa fa-globe-americas"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Community")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-light btn--icon",attrs:{"data-action":"horizontal-show"}},[s("span",{staticClass:"fa fa-bars"}),this._v(" Toggle navigation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",{staticClass:"fa fa-edit"}),this._v("Edit")])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/token"}},[s("span",{staticClass:"token__count"},[this._v("\n                                0 "),s("span",{staticClass:"icon fa fa-coins"})]),this._v(" "),s("span",{staticClass:"text"},[this._v("Tokens")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/identity/1/contacts"}},[s("span",{staticClass:"icon fa fa-users"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Contacts")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/account/signin"}},[s("span",{staticClass:"icon fa fa-sign-out-alt"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Sign In")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{attrs:{href:"/#/help"}},[s("span",{staticClass:"icon fa fa-question-circle"}),this._v(" "),s("span",{staticClass:"text"},[this._v("Help")])])}],!1,null,"34fd0868",null));s.default=c.exports},356:function(t,s){},357:function(t,s){},359:function(t,s){}}]);