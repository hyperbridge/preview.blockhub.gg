(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{211:function(t,e){},650:function(t,e,o){"use strict";var n=o(211);o.n(n).a},810:function(t,e,o){"use strict";o.r(e);var n={name:"main-banner",props:{title:String,buttonText:String,href:String,image:Object,logo:Object,video:Object},components:{"c-button":function(t){return Promise.resolve().then(function(){var e=[o(24)];t.apply(null,e)}.bind(this)).catch(o.oe)}},computed:{bannerImg:function(){var t=this.image;return{"background-image":"url("+t.src+")","background-position":t.position}},logoPosition:function(){switch(this.logo.position){case"left top":return"margin: 0 auto auto 0";case"center top":return"margin: 0 auto";case"right top":return"margin: 0 0 auto auto";case"left center":return"margin: auto auto auto 0";case"center center":return"margin: auto";case"right center":return"margin: auto 0 auto auto";case"left bottom":return"margin: auto auto 0 0";case"center bottom":return"margin: auto auto 0";case"right bottom":return"margin: auto 0 0 auto"}}}},a=(o(650),o(0)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-banner text-white"},[o("div",{staticClass:"main-banner__content"},[t.image?o("div",{staticClass:"image-bg",style:t.bannerImg}):t._e(),t._v(" "),t.video?o("video",{staticClass:"video-bg",attrs:{autoplay:"",playsinline:"",loop:"",muted:""},domProps:{muted:!0}},[o("source",{attrs:{src:t.video.src,type:"video/mp4"}})]):t._e(),t._v(" "),o("div",{staticClass:"main-banner__content--logo",class:[t.logo.size?"logo-size-"+t.logo.size:"logo-size-md",t.logo.position],style:t.logoPosition},[o("c-img",{attrs:{src:t.logo.src,alt:t.title}})],1)]),t._v(" "),o("div",{staticClass:"main-banner__footer"},[o("h4",[t._v("\n            "+t._s(t.title)+"\n        ")]),t._v(" "),o("c-button",{attrs:{href:t.href}},[t._v(t._s(t.buttonText))])],1)])},[],!1,null,"4c017365",null);e.default=i.exports}}]);