(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{213:function(t,s){},214:function(t,s){},653:function(t,s,i){"use strict";var e=i(213);i.n(e).a},654:function(t,s,i){"use strict";var e=i(214);i.n(e).a},748:function(t,s,i){"use strict";i.r(s);i(33);var e=i(15),a=i(1),n=i.n(a),c={name:"game-description",props:["game"],components:{"c-tags":function(t){return i.e(118).then(function(){var s=[i(751)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-swiper":e.swiper,"c-slide":e.swiperSlide},data:function(){return{sliderOptions:{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0}}}},computed:{expires_date:function(){return n()(this.game.expires).format("Do MMM YYYY")}}},r=(i(654),i(653),i(0)),o=Object(r.a)(c,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"game-description"},[i("div",{staticClass:"game-description__carousel"},[i("div",{staticClass:"slider-dots"},[i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})]),t._v(" "),i("c-swiper",{staticClass:"custom-dots-top carousel-full-height",attrs:{options:t.sliderOptions}},t._l(t.game.images,function(t,s){return i("c-slide",{key:s},[i("c-img",{attrs:{src:t}})],1)}))],1),t._v(" "),i("div",{staticClass:"game-description__info"},[i("h3",[t._v(t._s(t.game.title))]),t._v(" "),i("p",[t._v(t._s(t.game.description))]),t._v(" "),i("c-tags",{attrs:{tags:t.game.tags||[]}}),t._v(" "),i("div",{staticClass:"game-description__info--bottom"},[i("div",{staticClass:"text"},[i("h4",[t._v("Get all for only")]),t._v(" "),i("small",[t._v("Expires "+t._s(t.expires_date))])]),t._v(" "),i("div",[i("a",{staticClass:"btn-price",attrs:{href:"#3"}},[i("span",{staticClass:"price"},[t._v("$"+t._s(t.game.price))]),t._v(" "),i("span",{staticClass:"name"},[t._v("BUY NOW")])])])])],1)])},[],!1,null,"eea30ace",null);s.default=o.exports}}]);