(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1298:function(t,s,i){"use strict";i.r(s);var e={components:{"c-article-item":function(t){return i.e(165).then(function(){var s=[i(1209)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-topic-item":function(t){return i.e(155).then(function(){var s=[i(1210)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-list-item":function(t){return i.e(164).then(function(){var s=[i(1212)];t.apply(null,s)}.bind(this)).catch(i.oe)},"c-card":function(t){return i.e(163).then(function(){var s=[i(1213)];t.apply(null,s)}.bind(this)).catch(i.oe)}},methods:{showByTopic:function(t,s){for(var i=[],e=0;e<t.length;e++)t[e].topic.includes(s)&&i.push(t[e]);return i}},computed:{topics:function(){return this.$store.state.marketplace.help.topics},articles:function(){return this.$store.state.marketplace.help.articles}}},c=(i(995),i(0)),a=Object(c.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("c-layout",{attrs:{navigationKey:"help"}},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-12 text-center"},[i("h2",{staticClass:"m-0 p-o"},[t._v("Welcome to BlockHub Support")])]),t._v(" "),i("div",{staticClass:"col-12 col-lg-9 text-center"},[i("div",{staticClass:"input-group input-group-lg my-5"},[i("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search query","aria-label":"Search query","aria-describedby":"button-addon"}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("c-button",{staticClass:"px-4",staticStyle:{"border-radius":"0 5px 5px 0"},attrs:{status:"info",icon_hide:""}},[t._v("Search")])],1)])])]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[t.articles?i("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Trending articles"}},[i("div",{staticClass:"article-list"},t._l(t.showByTopic(t.articles,0),function(s,e){return i("c-article-item",{key:e,class:{"mb-0":t.articles.length===e+1},attrs:{link:"/#/help/0/article/"+s.slug}},[t._v("\n                                "+t._s(s.title)+"\n                            ")])}))]):t._e(),t._v(" "),i("c-block",{staticClass:"margin-bottom-30",attrs:{title:"Topics"}},[i("div",{staticClass:"topics-list"},t._l(t.topics,function(s,e){return i("c-topic-item",{key:e,staticClass:"padding-10",attrs:{link:"/#/help/"+s.id,icon:s.icon}},[t._v("\n                                "+t._s(s.label)+"\n                            ")])}))])],1),t._v(" "),i("div",{staticClass:"col-12 col-lg-6 margin-bottom-30"},[i("c-block",{attrs:{title:"Changelog"}},[i("div",{staticClass:"simple-list"},t._l(t.showByTopic(t.articles,5),function(s,e){return i("c-list-item",{key:e,class:{"mb-0":t.articles.length===e+1},attrs:{link:"/#/help/5/article/"+s.slug}},[t._v("\n                                "+t._s(s.title)+"\n                                ")])}))])],1),t._v(" "),i("div",{staticClass:"col-12 col-lg-6 margin-bottom-30"},[i("c-block",{attrs:{title:"Common issues"}},[i("div",{staticClass:"simple-list"},t._l(t.showByTopic(t.articles,7),function(s,e){return i("c-list-item",{key:e,class:{"mb-0":t.articles.length===e+1},attrs:{link:"/#/help/7/article/"+s.slug}},[t._v("\n                                "+t._s(s.title)+"\n                            ")])}))])],1),t._v(" "),i("div",{staticClass:"col-12 col-lg-6 mb-4 mb-lg-0"},[i("c-card",{staticClass:"text-center"},[i("h4",{staticClass:"h2"},[t._v("Community")]),t._v(" "),i("p",[t._v("Engage with a community of passionate experts to get the answers you need")]),t._v(" "),i("c-button",{staticClass:"width-auto margin-top-10",attrs:{icon_hide:"",href:"https://github.com/hyperbridge/blockhub-desktop-client",target:"_blank"}},[t._v("Visit GitHub\n                        ")])],1)],1),t._v(" "),i("div",{staticClass:"col-12 col-lg-6 mb-4 mb-lg-0"},[i("c-card",{staticClass:"text-center"},[i("h4",{staticClass:"h2"},[t._v("BlockHub Support")]),t._v(" "),i("p",[t._v("Create a support ticket and our support experts will get back to you")]),t._v(" "),i("c-button",{staticClass:"width-auto margin-top-10",attrs:{href:"https://hyperbridge.zendesk.com/",status:"info",icon_hide:""}},[t._v("Create a ticket\n                        ")])],1)],1)])])])},[],!1,null,"792a1f28",null);s.default=a.exports},265:function(t,s){},995:function(t,s,i){"use strict";var e=i(265);i.n(e).a}}]);