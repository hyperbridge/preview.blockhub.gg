(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{189:function(t,i){},629:function(t,i,c){"use strict";var n=c(189);c.n(n).a},931:function(t,i,c){"use strict";c.r(i);var n={props:["id"],components:{"c-layout":function(t){return Promise.resolve().then(function(){var i=[c(930)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-block":function(t){return Promise.resolve().then(function(){var i=[c(870)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-article-item":function(t){return c.e(148).then(function(){var i=[c(836)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-topic-item":function(t){return c.e(147).then(function(){var i=[c(837)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-list-item":function(t){return c.e(146).then(function(){var i=[c(839)];t.apply(null,i)}.bind(this)).catch(c.oe)},"c-card":function(t){return c.e(145).then(function(){var i=[c(840)];t.apply(null,i)}.bind(this)).catch(c.oe)}},data:function(){return{showArticles:!1,topic_id:(void 0).id}},methods:{showByTopic:function(t,i){for(var c=[],n=0;n<t.length;n++)t[n].topic.includes(i)&&c.push(t[n]);return c}},computed:{topic:function(){return this.$store.state.marketplace.help.topics[this.id]},articles:function(){return this.$store.state.marketplace.help.articles}}},s=(c(629),c(0)),o=Object(s.a)(n,function(){var t=this,i=t.$createElement,c=t._self._c||i;return c("c-layout",{attrs:{navigationKey:"help"}},[c("div",{staticClass:"content",attrs:{id:"content"}},[t.topic?c("div",{staticClass:"container-fluid"},[c("div",{staticClass:"row"},[c("div",{staticClass:"col-12"},[c("h3",{staticClass:"topic-ttl margin-bottom-30"},[c("i",{class:["fas fa-"+t.topic.icon]}),t._v("\n                        "+t._s(t.topic.label)+"\n                    ")]),t._v(" "),t.topic.sub_topics?c("c-block",{staticClass:"margin-bottom-30 padding-top-5 padding-bottom-5"},[c("div",{staticClass:"topics-list"},t._l(t.topic.sub_topics,function(i,n){return c("c-topic-item",{key:n,staticClass:"padding-10",attrs:{link:"/#/help/"+i.id,icon:i.icon}},[t._v("\n                                "+t._s(i.label)+"\n                            ")])}))]):t._e(),t._v(" "),c("c-block",{staticClass:"margin-bottom-30 padding-bottom-5"},[t.showByTopic(t.articles,t.topic.id)?c("div",{staticClass:"article-list"},t._l(t.showByTopic(t.articles,t.topic.id),function(i,n){return c("c-article-item",{key:n,attrs:{link:"/#/help/"+t.topic.id+"/article/"+i.slug}},[t._v("\n                                "+t._s(i.title)+"\n                            ")])})):c("h3",[t._v("Nothing to show")])])],1),t._v(" "),c("div",{staticClass:"col-12 col-lg-6"},[c("c-card",{staticClass:"text-center"},[c("h4",{staticClass:"h2"},[t._v("Community")]),t._v(" "),c("p",[t._v("Engage with a community of passionate experts to get the answers you need")]),t._v(" "),c("c-button",{staticClass:"width-auto margin-top-10",attrs:{icon_hide:"",href:"https://github.com/hyperbridge",target:"_blank"}},[t._v("Visit GitHub\n                        ")])],1)],1),t._v(" "),c("div",{staticClass:"col-12 col-lg-6"},[c("c-card",{staticClass:"text-center"},[c("h4",{staticClass:"h2"},[t._v("BlockHub Support")]),t._v(" "),c("p",[t._v("Create a support ticket and our support experts will get back to you")]),t._v(" "),c("c-button",{staticClass:"width-auto margin-top-10",attrs:{status:"info",icon_hide:""}},[t._v("Create a ticket\n                        ")])],1)],1)])]):t._e(),t._v(" "),t.article?t._e():c("div",[t._v("\n            Oh no! That topic was not found!\n        ")])])])},[],!1,null,"7c6cfbd6",null);i.default=o.exports}}]);