(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1116:function(t,e,r){"use strict";var a=r(341);r.n(a).a},1278:function(t,e,r){"use strict";r.r(e);var a={name:"curator-review",props:{review:{type:Object,required:!0}},components:{"c-author":function(t){return r.e(165).then(function(){var e=[r(1226)];t.apply(null,e)}.bind(this)).catch(r.oe)},"c-rating-stars":function(t){return r.e(169).then(function(){var e=[r(1222)];t.apply(null,e)}.bind(this)).catch(r.oe)},"c-button":function(t){return r.e(217).then(function(){var e=[r(1204)];t.apply(null,e)}.bind(this)).catch(r.oe)}},data:function(){return{read_more:!1}}},s=(r(1116),r(0)),i=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"curator-review"},[r("c-img",{staticClass:"curator-review__img",attrs:{src:t.review.game.img}}),t._v(" "),r("div",{staticClass:"curator-review__header"},[r("c-author",{attrs:{author:t.review.author}}),t._v(" "),r("span",{staticStyle:{"font-size":"22px"}},[r("i",{staticClass:"fas fa-star"}),t._v(" "),r("strong",[t._v(t._s(t.review.rate))])])],1),t._v(" "),r("transition",{attrs:{name:"fade-scale"}},[t.read_more?r("p",{key:1},[t._v(t._s(t.review.text))]):r("p",[t._v(t._s(t.review.text.substring(0,240))+"...")])]),t._v(" "),r("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.read_more=!t.read_more}}},[t._v("\n        "+t._s(t.read_more?"SHOW LESS":"MORE...")+"\n    ")]),t._v(" "),r("h4",{staticClass:"curator-review__more-header"},[t._v("More curated by "+t._s(t.review.author.name))]),t._v(" "),r("ul",{staticClass:"more_reviews"},t._l(t.review.more_reviews,function(e,a){return r("li",{key:a,staticClass:"sub-review"},[r("c-img",{staticClass:"sub-review__img",attrs:{src:e.game.img}}),t._v(" "),r("div",{staticClass:"sub-review__details"},[r("h5",{staticClass:"margin-bottom-5"},[r("a",{staticClass:"text-white font-weight-bold",attrs:{href:"#"}},[t._v(t._s(e.game.title))])]),t._v(" "),r("div",{staticClass:"text-white font-weight-bold"},[r("span",{staticStyle:{"font-size":"22px"}},[t._v(t._s(e.rate))])])])],1)})),t._v(" "),r("c-button",[r("strong",[t._v("VIEW CURATOR PAGE")])])],1)},[],!1,null,"16b057e8",null);e.default=i.exports},341:function(t,e){}}]);