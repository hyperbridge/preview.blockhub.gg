(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{176:function(t,n){},602:function(t,n,e){"use strict";var i=e(176);e.n(i).a},887:function(t,n,e){"use strict";e.r(n);var i={props:["slug"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var n=[e(881)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-block":function(t){return e.e(109).then(function(){var n=[e(751)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-article-item":function(t){return e.e(138).then(function(){var n=[e(801)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-topic-item":function(t){return e.e(137).then(function(){var n=[e(802)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-list-item":function(t){return e.e(136).then(function(){var n=[e(803)];t.apply(null,n)}.bind(this)).catch(e.oe)},"c-card":function(t){return e.e(135).then(function(){var n=[e(762)];t.apply(null,n)}.bind(this)).catch(e.oe)}},computed:{article:function(){for(var t=void 0,n=this.$store.state.marketplace.help.articles,e=0;e<n.length;e++)n[e].slug.includes(this.slug)&&(t=n[e]);return t}}},c=(e(602),e(0)),a=Object(c.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("c-layout",{attrs:{navigationKey:"help"}},[e("div",{staticClass:"content",attrs:{id:"content"}},[t.article?e("div",{staticClass:"container-fluid"},[e("h2",[t._v(t._s(t.article.title))]),t._v(" "),e("div",{staticClass:"article-content"},[e("div",{domProps:{innerHTML:t._s(t.article.text)}})])]):t._e(),t._v(" "),t.article?t._e():e("div",[t._v("\n            Oh now! That article was not found!\n        ")])])])},[],!1,null,"5f352698",null);n.default=a.exports}}]);