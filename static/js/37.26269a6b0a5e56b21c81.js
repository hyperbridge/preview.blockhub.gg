(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(t,s){},511:function(t,s,i){"use strict";var e=i(107);i.n(e).a},868:function(t,s,i){"use strict";i.r(s);var e=function(){if(this.$store.state.marketplace.products){var t=this.$store.state.marketplace.products[this.id];if(t){if(t.images.preview&&t.images.preview.length){var s=window.document.getElementById("header-bg");s.style["background-image"]="url("+t.images.preview[0]+")",s.style["background-size"]="cover"}return t.assets=[],t}}},a={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var s=[i(871)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-tags-list":function(t){return i.e(106).then(function(){var s=[i(751)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-assets-grid":function(t){return i.e(127).then(function(){var s=[i(790)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-assets-list-item":function(t){return i.e(125).then(function(){var s=[i(773)];t.apply(null,s)}.bind(this)).catch(i.oe)}},methods:{save:function(){this.$store.dispatch("marketplace/updateProduct",this.product)}},computed:{product:e,editing:function(){if(!this.$store.state.application.editor_mode)for(var t in this.activeElement)this.activeElement[t]=!1;return"editing"===this.$store.state.application.editor_mode}},mounted:e,created:e,beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},n=(i(511),i(0)),o=Object(n.a)(a,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("c-layout",{attrs:{navigationKey:"product"}},[i("div",{staticClass:"content",attrs:{id:"content"}},[i("div",{staticClass:"container-fluid"},[t.product?t._e():i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t._v("\n                    Product not found\n                ")])]),t._v(" "),t.product?i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h1",{staticClass:"title margin-top-10"},[t._v(t._s(t.product.name))]),t._v(" "),i("c-tags-list",{attrs:{tags:t.product.developer_tags}}),t._v(" "),i("ul",{staticClass:"nav nav-tabs justify-content-between margin-bottom-30"},[i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id}},[t._v("Overview")])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/community"}},[t._v("Community")])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link",attrs:{to:"/product/"+t.product.id+"/projects"}},[t._v("Crowdfunding")])],1),t._v(" "),i("li",{staticClass:"nav-item"},[i("router-link",{staticClass:"nav-link active",attrs:{to:"/product/"+t.product.id+"/assets"}},[t._v("Assets")])],1)])],1),t._v(" "),i("div",{staticClass:"col-12 d-flex justify-content-between flex-wrap assets-list margin-bottom-30"},[i("div",{staticClass:"assets-list__item-container"},[i("c-assets-list-item")],1)]),t._v(" "),i("div",{staticClass:"col-12"},[i("c-assets-grid",{attrs:{list:t.product.assets}})],1)]):t._e()])])])},[],!1,null,"03b89def",null);s.default=o.exports}}]);