(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1677:function(e,t,i){"use strict";i.r(t);var r=i(63),n=i.n(r),s=i(2),a=i.n(s),l=i(30),c=i(7),o=i.n(c),u={components:{"c-block":function(e){return Promise.resolve().then(function(){var t=[i(1574)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-asset-list":function(e){return i.e(245).then(function(){var t=[i(1373)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-searcher":function(e){return i.e(8).then(function(){var t=[i(1540)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-asset-preview":function(e){return i.e(192).then(function(){var t=[i(1480)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-range-slider":function(e){return i.e(200).then(function(){var t=[i(1457)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-option-tag":function(e){return i.e(217).then(function(){var t=[i(1554)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-modal":function(e){return i.e(199).then(function(){var t=[i(1458)];e.apply(null,t)}.bind(this)).catch(i.oe)},"c-messages-bar":function(e){return i.e(306).then(function(){var t=[i(1427)];e.apply(null,t)}.bind(this)).catch(i.oe)}},mixins:[l.b],data:function(){return{phrase:"",savedFilters:[{name:"",phrase:"Skull",priceMin:0,priceMax:32,attributes:{shield:""}}],newFilter:{phrase:"",priceMin:0,priceMax:0},choosenFilter:null,autofilterId:3,selectedFilterId:null,editedFilter:null,timeout2:null,errors:["Minimum price cannot be bigger than maximum."]}},methods:{runIt:function(e){console.log(e)},createFilter:function(){this.$store.dispatch("assets/create",{prop:"filters",data:this.newFilter}),this.newFiler={phrase:"",priceMin:0,priceMax:0}},updateFilter:function(e){if(console.log("CALLED"),this.activeFilter){var t=this.activeFilter.id;this.$store.dispatch("assets/update",{id:t,data:e,prop:"filters"})}},debounceUpdate:function(e){var t=this;console.log(e),this.debounce(function(){return t.updateFilter(e)},400)}},computed:a()({assets:function(){return this.$store.getters["assets/assetsArray"]},filters:function(){return this.$store.state.assets.filters},assetsFiltered:function(){return this.$store.getters["assets/assetsByName"](this.phrase)},activeFilter:function(){return this.filters[this.choosenFilter]},filteredAssets:function(){var e=this,t=this.activeFilter;return this.$store.getters["assets/assetsByName"](t&&t.phrase||"").filter(function(i){var r=i.price;n()(i,["price"]);return!e.choosenFilter||r.current>t.priceMin&&r.current<t.priceMax})}},function(e){var t,i=e.name,r=e.module,n=e.prop,s=void 0===n?r:n,l=(e.id,e.action),c=void 0!==l&&l,u=e.setFn,d=void 0===u?"update":u;if(null==i||null==r)throw new Error("Map element method requires these properties: 'name, module, id'.\n            • Name - Name of the computed property that will evaluate to\n            • Module - Vuex module\n            • Id - Saved in data property (in format like 'name + Id' eg. productId: 3), or as 'id' prop, or hardcoded to mapElement method.\n        ");return t={},o()(t,i,{set:function(e){var t=t||this[i+"Id"]||this.id;this.$store[c?"dispatch":"commit"](r+"/"+d,{id:t,data:e,prop:s})},get:function(){var e=e||this[i+"Id"]||this.id;return this.$store.state[r][s][e]}}),o()(t,i+"Clone",function(){return a()({},this[i])}),t}({name:"selectedFilter",prop:"filters",module:"assets"}))},d=(i(817),i(0)),p=Object(d.a)(u,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("c-messages-bar",{attrs:{messages:e.errors}}),e._v(" "),i("h4",[e._v("Saved filters")]),e._v(" "),i("c-searcher",{attrs:{results:e.assetsFiltered,delay:400},on:{input:function(t){e.phrase=t}},scopedSlots:e._u([{key:"default",fn:function(t){return i("div",{},[i("c-asset-preview",{attrs:{asset:t.result,horizontal:"",size:"sm"},nativeOn:{click:function(i){e.newFilter.asset=t.result,e.phrase=""}}})],1)}}])}),e._v(" "),i("h4"),e._v(" "),e.newFilter.asset?i("c-asset-preview",{attrs:{asset:e.newFilter.asset,horizontal:"",size:"sm"}}):e._e(),e._v(" "),i("h3",[e._v("Search for assets with:")]),e._v(" "),i("div",{staticClass:"filter-box"},[i("p",[e._v("Phrase:\n            "),e.newFilter.phrase?i("span",[e._v("\n                ("+e._s(e.newFilter.phrase)+")\n            ")]):e._e()]),e._v(" "),i("c-input",{model:{value:e.newFilter.phrase,callback:function(t){e.$set(e.newFilter,"phrase",t)},expression:"newFilter.phrase"}})],1),e._v(" "),i("div",{staticClass:"filter-box"},[i("p",[e._v("Minimum price: ("+e._s(e.newFilter.priceMin)+")")]),e._v(" "),i("c-range-slider",{attrs:{max:25},model:{value:e.newFilter.priceMin,callback:function(t){e.$set(e.newFilter,"priceMin",t)},expression:"newFilter.priceMin"}})],1),e._v(" "),i("div",{staticClass:"filter-box"},[i("p",[e._v("Maximum price: ("+e._s(e.newFilter.priceMax)+")")]),e._v(" "),i("c-range-slider",{model:{value:e.newFilter.priceMax,callback:function(t){e.$set(e.newFilter,"priceMax",t)},expression:"newFilter.priceMax"}})],1),e._v(" "),i("c-button",{attrs:{status:"info",icon_hid:"",size:"md"},on:{click:function(t){e.createFilter()}}},[e._v("\n        Create filter\n    ")]),e._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFilterId,expression:"selectedFilterId"}],attrs:{name:"Select saved filter"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedFilterId=t.target.multiple?i:i[0]}}},[e._l(e.filters,function(t,r){return i("option",{key:r,domProps:{value:t.id}},[e._v("\n            ["+e._s(r+1)+"] "+e._s(t.phrase)+" - "+e._s(t.priceMin)+" -> "+e._s(t.priceMax)+"\n        ")])}),e._v(" "),i("option",{attrs:{disabled:""}},[e._v("You have no filters saved")]),e._v(" "),i("option",{domProps:{value:null}},[e._v("Disable filters")])],2),e._v("\n\n    "+e._s(e.selectedFilterId)+"\n    "),e.choosenFilter?i("div",[e.activeFilter.phrase?i("c-option-tag",{attrs:{title:"PHRASE:",text:e.activeFilter.phrase},on:{delete:function(t){e.updateFilter({phrase:""})}}}):e._e(),e._v(" "),e.activeFilter.priceMin||e.activeFilter.priceMax?i("c-option-tag",{attrs:{title:"PRICE:"}},[e.activeFilter.priceMin?i("c-option-tag",{attrs:{title:"MIN:",text:e.activeFilter.priceMin,isChildren:""},on:{delete:function(t){e.updateFilter({priceMin:0})}}}):e._e(),e._v(" "),e.activeFilter.priceMax?i("c-option-tag",{attrs:{title:"MAX:",text:e.activeFilter.priceMax,isChildren:""},on:{delete:function(t){e.updateFilter({priceMax:0})}}}):e._e()],1):e._e()],1):e._e(),e._v(" "),i("c-button",{on:{click:function(t){e.autofilter={name:"SilverBird"}}}},[e._v("Map element")]),e._v(" "),i("c-button",{directives:[{name:"show",rawName:"v-show",value:e.selectedFilterId,expression:"selectedFilterId"}],attrs:{status:"info",icon:"edit"},on:{click:function(t){e.editedFilter=e.selectedFilterId}}},[e._v("\n        Edit selected filter\n    ")]),e._v(" "),e.editedFilter?i("c-modal",{on:{close:function(t){e.editedFilter=null}}},[i("div",{attrs:{slot:"body"},slot:"body"},[i("div",{staticClass:"filter-box"},[i("p",[e._v("Phrase:\n                    "),i("span",[e._v("\n                        ("+e._s(e.selectedFilter.phrase)+")\n                    ")])]),e._v(" "),i("c-input",{attrs:{value:e.selectedFilter.phrase},on:{change:function(t){e.selectedFilter={phrase:t.target.value}}}})],1),e._v(" "),i("div",{staticClass:"filter-box"},[i("p",[e._v("Minimum price: ("+e._s(e.selectedFilter.priceMin)+")")]),e._v(" "),i("c-range-slider",{directives:[{name:"xmodel",rawName:"v-xmodel.number.debounce-10",value:e.selectedFilter.priceMin,expression:"selectedFilter.priceMin",modifiers:{number:!0,"debounce-10":!0}}],attrs:{max:25}})],1)])]):e._e(),e._v(" "),i("c-block",{staticClass:"assets-wrapper",attrs:{title:"Filtered assets"}},[i("c-asset-list",{attrs:{assets:e.filteredAssets,transition:!0}})],1)],1)},[],!1,null,"3ba7b473",null);t.default=p.exports},175:function(e,t){},817:function(e,t,i){"use strict";var r=i(175);i.n(r).a}}]);