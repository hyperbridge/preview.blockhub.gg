(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1077:function(t,n,e){"use strict";var i=e(303);e.n(i).a},1401:function(t,n,e){"use strict";e.r(n);var i={props:["id","slug"],components:{"c-article-item":function(t){return e.e(177).then(function(){var n=[e(1260)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-topic-item":function(t){return e.e(160).then(function(){var n=[e(1256)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-list-item":function(t){return e.e(176).then(function(){var n=[e(1251)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-card":function(t){return e.e(175).then(function(){var n=[e(1246)];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:{article:function(){var t=void 0,n=void 0;n=this.$store.state.marketplace.help.articles;for(var e=0;e<n.length;e++)n[e].slug.includes(this.slug)&&(t=n[e]);return t}}},c=(e(1077),e(0)),a=Object(c.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",{attrs:{navigationKey:"help"}},[t.article?e("div",{staticClass:"container-fluid"},[e("h2",[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"article-content"},[e("div",{domProps:{innerHTML:t._s(t.article.text)}})])]):t._e(),t._v(" "),t.article?t._e():e("div",[t._v("\n            Oh no, that post wasn't found! Would you "),e("a",{attrs:{href:"/#/post/create"}},[t._v("like to create it")]),t._v("?\n        ")])])},[],!1,null,"c591c73a",null);n.default=a.exports},303:function(t,n){}}]);