(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{19:function(t,e,i){"use strict";i.d(e,"b",function(){return r}),i.d(e,"a",function(){return a});var r={data:function(){return{timeout:0}},methods:{debounce:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"timeout";clearTimeout(this[i]),this[i]=setTimeout(t,e)}}},a={methods:{handleArray:function(t,e){var i=this[e].indexOf(t);i>-1?this[e].splice(i,1):this[e].push(t)}}}},197:function(t,e){},605:function(t,e,i){"use strict";var r=i(197);i.n(r).a},658:function(t,e,i){"use strict";i.r(e);var r=i(19),a={name:"product-card-dynamic",props:{product:{type:Object,required:!0}},components:{"c-tags":function(t){return i.e(96).then(function(){var e=[i(695)];t.apply(null,e)}.bind(this)).catch(i.oe)}},mixins:[r.b],data:function(){return{display_preview:!1,interval:null,current_image:0}},methods:{show_preview:function(t){var e=this;clearTimeout(this.timeout),this.debounce(function(){t||clearInterval(e.interval),!t||e.display_preview||e.product.video&&e.autoplay||e.slider(),e.display_preview=t},t?250:0)},slider:function(){var t=this;this.interval=setInterval(function(){var e=t.current_image,i=t.product.images;t.current_image=e===i.preview.length-1?0:e+1},1600)}},computed:{autoplay:function(){return this.$store.state.application.account.settings.client.autoplay}}},s=(i(605),i(0)),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-grid__item",on:{mouseover:function(e){t.show_preview(!0)},mouseout:function(e){t.show_preview(!1)}}},[i("div",{staticClass:"position-relative"},[t.product.price?i("div",{staticClass:"product-grid__item-price"},[i("strong",[t._v(t._s(t.product.price))]),t._v(" USD\n        ")]):t._e(),t._v(" "),i("a",{staticClass:"card-img-top",attrs:{href:"/#/product/"+t.product.id}},[i("transition",{attrs:{name:"fade"}},[t.display_preview?[t.product.video&&t.autoplay?i("video",{staticClass:"card-img-top",attrs:{width:"100%",autoplay:""}},[i("source",{attrs:{src:t.product.video,type:"video/mp4"}})]):i("transition-group",{attrs:{tag:"div",name:"slide-left"}},t._l(t.product.images.preview,function(e,r){return r===t.current_image?i("c-img",{key:e,staticClass:"card-img-top",attrs:{src:t.product.images.preview[r]}}):t._e()}))]:i("c-img",{staticClass:"card-img-top",attrs:{src:t.product.images.medium_tile}})],2)],1)]),t._v(" "),i("h4",[i("a",{attrs:{href:"/#/product/"+t.product.id}},[t._v(t._s(t.product.name))])]),t._v(" "),i("p",{staticClass:"card-text",attrs:{hidden:""}},[t._v(t._s(t.product.short_description)+" ")]),t._v(" "),i("c-tags",{attrs:{tags:t.product.developer_tags.slice(0,3)}})],1)},[],!1,null,"0a1f5676",null);e.default=n.exports}}]);