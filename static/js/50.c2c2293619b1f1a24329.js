(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1342:function(t,e,i){"use strict";i.r(e);var n=i(7),o=(i(3),{components:{"c-user-card":function(t){return i.e(154).then(function(){var e=[i(1183)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){var t=this,e=this.$store.state.application.account.identities.find(function(t){return void 0!==t.developer_id}),i=this.$store.state.application.account.identities.find(function(e){return e.id==t.$store.state.application.account.current_identity.id});return!i&&this.$store.state.application.account.identities.length&&(i=this.$store.state.application.account.identities[0]),{identities:this.$store.state.application.account.identities,chosenIdentity:i,developerIdentity:e,errors:[]}},methods:{convertIdentity:function(){var t=this;n.sendCommand("createDeveloperRequest",this.chosenIdentity).then(function(e){t.chosenIdentity.developer_id=e,t.developerIdentity=t.chosenIdentity,t.$store.state.application.developer_mode=!0})},chooseIdentity:function(t){this.chosenIdentity=t}}}),s=(i(695),i(0)),r=Object(s.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("c-layout",{attrs:{navigationKey:"store"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h2",[t._v("Curator-Powered Ecosystem")]),t._v(" "),i("p",[t._v("Curators make the system work. They drive the quality BlockHub. Here's how it works.")]),t._v(" "),i("br"),t._v(" "),t.developerIdentity?t._e():i("div",[i("p",[t._v("Choose a profile to convert:")]),t._v(" "),i("br"),t._v(" "),i("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Choose Profile"}},[i("div",{staticClass:"profile-picker"},t._l(t.identities,function(e){return t.identities&&t.identities.length?i("div",{key:e.id,staticClass:"profile-picker__profile"},[i("c-user-card",{class:{default:t.chosenIdentity&&e.id==t.chosenIdentity.id},attrs:{user:e,previewMode:!0}}),t._v(" "),i("div",{staticClass:"profile__action"},[t.chosenIdentity&&e.id==t.chosenIdentity.id?t._e():i("c-button",{attrs:{status:"info",icon:"check"},on:{click:function(i){t.chooseIdentity(e)}}},[t._v("Choose")])],1)],1):t._e()})),t._v(" "),i("br"),t._v(" "),i("c-button",{attrs:{href:"/#/account/identities"}},[t._v("New Profile")])],1),t._v(" "),i("br"),i("br"),t._v(" "),i("c-button",{on:{click:t.convertIdentity}},[t._v("Convert to Curator")])],1),t._v(" "),t.developerIdentity?i("div",[t._v("\n                Congratulations, your curator profile is all setup. You are Curator #"+t._s(this.chosenIdentity.developer_id)+"\n\n                "),i("br"),i("br"),t._v(" "),i("c-button",{attrs:{href:"/#/curator"}},[t._v("Go to dashboard")])],1):t._e()])])])},[],!1,null,"4a4090e2",null);e.default=r.exports},174:function(t,e){},695:function(t,e,i){"use strict";var n=i(174);i.n(n).a}}]);