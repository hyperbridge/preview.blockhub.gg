(window.webpackJsonp=window.webpackJsonp||[]).push([[119,6,7,8],{100:function(t,s){},1053:function(t,s,i){"use strict";var e=i(322);i.n(e).a},1131:function(t,s,i){"use strict";i.r(s);var e=i(51),a=i(52),c=i(405),n=i(406),l=i(53),o={props:["activated"],components:{"c-tab":a.default,"c-tabs":e.default,"c-switch":c.default,"c-button":n.default,"c-popup":l.default},data:function(){return{agreement:!0,sending:!1}},methods:{toggleSteps:function(){this.agreement=!1,this.sending=!1,console.log("toggle step",this.agreement,this.sending)}}},r=(i(1053),i(0)),d=Object(r.a)(o,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("c-popup",{ref:"modal",attrs:{activated:t.activated,type:"custom",title:"Sending Funds",width:"650"},on:{close:function(s){t.$emit("close")}}},[i("div",{staticClass:"send-funds-modal",attrs:{slot:"custom_content"},slot:"custom_content"},[i("c-tabs",[i("c-tab",{attrs:{name:"Agreement",selected:t.agreement,showFooter:!0}},[i("div",[i("div",{staticClass:"d-flex justify-content-between align-items-center"},[i("h4",[t._v("Crowdfunding Campaign Agreement")])]),t._v(" "),i("div",{staticClass:"terms_block"},[t._t("agreement_text")],2)]),t._v(" "),i("div",{staticClass:"d-flex justify-content-between align-items-center",attrs:{slot:"footer"},slot:"footer"},[i("div",[i("c-switch",{attrs:{size:"sm",value:!0,label:"I agree with the terms"}})],1),t._v(" "),i("div",[i("c-button",{staticClass:"mx-1",attrs:{status:"danger"},on:{click:function(t){}}},[t._v("\n                            Cancel\n                        ")]),t._v(" "),i("c-button",{staticClass:"mx-1",attrs:{status:"success",icon:"arrow-right"},on:{click:t.toggleSteps}},[t._v("\n                            Next\n                        ")])],1)])]),t._v(" "),i("c-tab",{attrs:{name:"Sending",selected:t.sending,showFooter:!0}},[i("div",{staticClass:"sending-blk"},[i("div",{staticClass:"clmn-1"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-item"},[i("div",[i("c-img",{attrs:{src:"https://www.touchtapplay.com/wp-content/uploads/2017/12/bitcoin-game-cheats-ketchapp.jpg"}})],1)]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")])]),t._v(" "),i("div",{staticClass:"info text-left"},[i("strong",[t._v("SatoSama")]),t._v(" "),i("span",{staticClass:"float-right down"},[t._v("-$14.00")])])]),t._v(" "),i("div",{staticClass:"clmn-2"},[i("div",{staticClass:"directions"},[i("div",{staticClass:"right-arrow"},[i("div",{staticClass:"progress"})]),t._v(" "),i("div",{staticClass:"left-arrow"},[i("div",{staticClass:"progress",staticStyle:{width:"45%"}})])]),t._v(" "),i("div",{staticClass:"time"},[i("i",{staticClass:"fas fa-clock"}),t._v("\n                            15 seconds\n                        ")]),t._v(" "),i("div",{staticClass:"info text-center"},[t._v("\n                            1 "),i("strong",[t._v("hbx")]),t._v(" - 0.02 "),i("strong",[t._v("usd")])])]),t._v(" "),i("div",{staticClass:"clmn-3"},[i("div",{staticClass:"grid"},[i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")]),t._v(" "),i("div",{staticClass:"grid-item"},[i("div")])]),t._v(" "),i("div",{staticClass:"info text-left"},[i("strong",[t._v("SatoshiStudios")]),t._v(" "),i("span",{staticClass:"float-right up"},[t._v("+$14.00")])])])]),t._v(" "),i("div",{staticClass:"d-flex align-items-center justify-content-end",attrs:{slot:"footer"},slot:"footer"},[i("div",[i("c-button",{staticClass:"mx-1",attrs:{status:"danger"},on:{click:function(t){}}},[t._v("\n                            Cancel\n                        ")]),t._v(" "),i("c-button",{staticClass:"mx-1",attrs:{status:"success",icon:"check"},on:{click:t.toggleSteps}},[t._v("\n                            Complete\n                        ")])],1)])])],1)],1)])},[],!1,null,null,null);s.default=d.exports},322:function(t,s){},51:function(t,s,i){"use strict";i.r(s);var e={name:"c-tabs",props:{variant:{type:String,default:"default"},currentStep:[Number,String]},data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t,s){this.currentStep?s+1<=this.currentStep&&this.tabs.forEach(function(t,i){t.isActive=s==i}):this.tabs.forEach(function(s){s.isActive=s.name==t})}}},a=(i(615),i(0)),c=Object(a.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"tabs-nav",class:t.variant},[i("ul",t._l(t.tabs,function(s,e){return i("li",{key:e,class:"nav-item layer"+(e+1)},[i("a",{class:{active:s.isActive},attrs:{href:s.href},on:{click:function(i){i.preventDefault(),t.selectTab(s.name,e)}}},[t._v(t._s(s.name))])])})),t._v(" "),t._t("tabs-nav")],2),t._v(" "),i("div",{ref:"tabs",staticClass:"tabs-container"},[t._t("default",null,{tabs:t.tabs})],2)])},[],!1,null,"5fd8794a",null);s.default=c.exports},52:function(t,s,i){"use strict";i.r(s);var e={name:"c-tab",props:{name:{type:String,required:!0},selected:{type:Boolean,default:!1},showFooter:{type:Boolean,default:!1},transparentBg:{type:Boolean,default:!1}},data:function(){return{isActive:!1}},computed:{href:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},mounted:function(){this.isActive=this.selected}},a=(i(614),i(0)),c=Object(a.a)(e,function(){var t=this.$createElement,s=this._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}],staticClass:"tab-item",class:{"bg-transparent":this.transparentBg}},[s("div",{staticClass:"tab-item__container"},[this._t("default")],2),this._v(" "),this.showFooter?s("div",{staticClass:"tab-item__footer"},[this._t("footer")],2):this._e()])},[],!1,null,"9962aa38",null);s.default=c.exports},53:function(t,s,i){"use strict";i.r(s);var e={props:{type:{default:"default"},title:{type:String},sub_title:{type:String},activated:{type:Boolean},width:{default:"400"}},computed:{customClose:function(){return this.$slots.custom_close}}},a=(i(616),i(0)),c=Object(a.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"fade",duration:100}},[t.activated?i("div",{staticClass:"c-popup",on:{click:function(s){if(s.target!==s.currentTarget)return null;s.preventDefault(),t.$emit("close")}}},[i("div",{staticClass:"c-popup__item",style:{width:+t.width+"px"}},[t.title?i("h3",[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"position-relative"},[t.customClose?t._t("custom_close"):i("div",{staticClass:"c-popup__close",on:{click:function(s){t.$emit("close")}}},[i("i",{staticClass:"fas fa-times"})]),t._v(" "),this.$slots.custom_content?t._t("custom_content"):i("div",{staticClass:"c-popup__content"},[t.sub_title?i("div",{staticClass:"c-popup__content-header",class:["c-popup-type-"+t.type]},[i("div",{staticClass:"popup-icon"},[t.type==["warning","danger"]?i("i",{staticClass:"fas fa-exclamation-triangle"}):t._e(),t._v(" "),"success"==t.type?i("i",{staticClass:"fas fa-check"}):i("i",{staticClass:"fas fa-info-circle"})]),t._v(" "),i("div",{staticClass:"sub_title"},[t._v("\n                            "+t._s(t.sub_title)+"\n                        ")])]):t._e(),t._v(" "),i("div",{staticClass:"c-popup__content-body"},[i("p",{staticClass:"m-0"},[t._t("default")],2),t._v(" "),t._t("body")],2),t._v(" "),this.$slots.footer?i("div",{staticClass:"c-popup__content-footer"},[t._t("footer")],2):t._e()])],2)])]):t._e()])},[],!1,null,"4e2e54da",null);s.default=c.exports},614:function(t,s,i){"use strict";var e=i(98);i.n(e).a},615:function(t,s,i){"use strict";var e=i(99);i.n(e).a},616:function(t,s,i){"use strict";var e=i(100);i.n(e).a},98:function(t,s){},99:function(t,s){}}]);