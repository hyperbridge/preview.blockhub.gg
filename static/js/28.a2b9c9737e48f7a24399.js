(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1182:function(t,n,e){"use strict";var i=e(341);e.n(i).a},1362:function(t,n,e){"use strict";e.r(n);e(59);var i=e(17),a={name:"main-banner",props:{slides:Array},components:{"c-button":function(t){return Promise.resolve().then(function(){var n=[e(458)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-swiper":i.swiper,"c-slide":i.swiperSlide},data:function(){return{sliderOptions:{slidesPerView:1,spaceBetween:15,pagination:{el:".main-banner-swiper-pagination",clickable:!0}}}},methods:{bannerImg:function(t){return{"background-image":"url("+t.src+")","background-position":t.position}},logoPosition:function(t){switch(t.position){case"left top":return"margin: 0 auto auto 0";case"center top":return"margin: 0 auto";case"right top":return"margin: 0 0 auto auto";case"left center":return"margin: auto auto auto 0";case"center center":return"margin: auto";case"right center":return"margin: auto 0 auto auto";case"left bottom":return"margin: auto auto 0 0";case"center bottom":return"margin: auto auto 0";case"right bottom":return"margin: auto 0 0 auto"}}}},o=(e(1182),e(0)),s=Object(o.a)(a,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-banner text-white"},[e("c-swiper",{attrs:{options:t.sliderOptions}},t._l(t.slides,function(n,i){return e("c-slide",{key:i},[e("div",{staticClass:"main-banner__content"},[e("div",{staticClass:"image-bg",style:t.bannerImg(n.image)}),t._v(" "),e("div",{staticClass:"main-banner__content--logo",class:[n.logo.size?"logo-size-"+n.logo.size:"logo-size-md",n.logo.position],style:t.logoPosition(n.logo)},[e("c-img",{attrs:{src:n.logo.src,alt:n.title}})],1)]),t._v(" "),e("div",{staticClass:"main-banner__footer"},[e("h4",[t._v("\n                    "+t._s(n.title)+"\n                ")]),t._v(" "),e("div",{staticClass:"main-banner__footer-actions"},[t.slides.length>1?e("div",{ref:"sliderDots",refInFor:!0,staticClass:"slider-dots"},[e("div",{staticClass:"main-banner-swiper-pagination swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})]):t._e(),t._v(" "),e("c-button",{attrs:{status:"success",size:"md",icon_hide:"",href:"#/product/"+n.id}},[t._v("\n                        "+t._s(n.buttonText)+"\n                    ")])],1)])])}))],1)},[],!1,null,"5af42f91",null);n.default=s.exports},341:function(t,n){}}]);