(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1182:function(t,e,n){"use strict";n.r(e);n(5);var i={props:["product","editing"],components:{"c-game-plan":function(t){return n.e(188).then(function(){var e=[n(1156)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-screen-gallery":function(t){return n.e(187).then(function(){var e=[n(1153)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-promotion-box":function(t){return n.e(208).then(function(){var e=[n(1149)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-rating-block":function(t){return n.e(173).then(function(){var e=[n(1184)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-purchase-block":function(t){return n.e(207).then(function(){var e=[n(1145)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-frequently-traded-assets":function(t){return n.e(186).then(function(){var e=[n(1142)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-community-spotlight":function(t){return n.e(185).then(function(){var e=[n(1136)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-heading-bar":function(t){return Promise.resolve().then(function(){var e=[n(1300)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-review":function(t){return n.e(206).then(function(){var e=[n(1137)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-system-requirements":function(t){return n.e(205).then(function(){var e=[n(1163)];t.apply(null,e)}.bind(this)).catch(n.oe)},"c-language-support":function(t){return n.e(204).then(function(){var e=[n(1159)];t.apply(null,e)}.bind(this)).catch(n.oe)}},data:function(){var t="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut luctus ante, a volutpat velit. Cras in arcu a sem ultrices id luctus sem. Cras a venenatis mauris. Nullam non tortor nec neque accumsan euismod. Fusce tempus nunc ac varius gravida. Fusce at lacus pharetra, elementum risus a, bibendum ante. Morbi velit est, tincidunt id auctor sit amet, varius non nunc. Vestibulum elementum nulla et condimentum vulputate. Nullam id eleifend velit, quis aliquam elit. In maximus non orci eget maximus.",e="Good game with very nice graphics made by very smart people.",n={system:"Windows 10",gpu:"GTX 1080",cpu:"Core i7 7980x",ram:"8 GB",storage:"HyperX 1TB SSD"},i={name:"Nakatochi",img:"https://www.shareicon.net/data/128x128/2015/09/20/104335_avatar_512x512.png"};return{reviews:{helpful:[{author:i,title:e,text:t,date:"2018-08-19T04:09:00.000Z",rating:4.5,minutes_played:1938,setup:n},{author:i,title:e,text:t,date:"2018-08-16T04:09:00.000Z",rating:1.5,minutes_played:414,setup:n},{author:i,title:e,text:t,date:"2018-08-18T04:09:00.000Z",rating:3.5,minutes_played:71,setup:n}],recent:[{author:i,title:e,text:t,date:"2018-08-20T04:09:00.000Z",rating:1.5,minutes_played:13,setup:n},{author:i,title:e,text:t,date:"2018-03-21T04:09:00.000Z",rating:5,minutes_played:241,setup:n},{author:i,title:e,text:t,date:"2018-08-11T04:09:00.000Z",rating:3,minutes_played:2941,setup:n}]},promotionSections:null}},methods:{showPurchaseModal:function(){this.$store.dispatch("application/activateModal","purchase")}}},a=(n(741),n(0)),s=Object(a.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-8 col-xl-9"},[n("c-screen-gallery",{attrs:{items:[t.product.images.medium_tile].concat(t.product.images.preview),video_url:t.product.video}}),t._v(" "),t._l(t.promotionSections,function(e,i){return t.promotionSections?n("div",{key:i},[i?n("h3",{staticStyle:{"margin-top":"20px"}},[t._v(t._s(i))]):t._e(),t._v(" "),t._l(e,function(e,i){return t.product.promotions?n("c-promotion-box",{key:i,attrs:{title:e.title,price:e.price}}):t._e()})],2):t._e()}),t._v(" "),n("div",{staticClass:"overflow-hidden"},t._l(t.product.plans,function(t,e){return n("c-game-plan",{key:e,attrs:{plan:t}})})),t._v(" "),t.editing?t._e():n("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.product.content)}},[t._v("\n            "+t._s(t.product.content)+"\n        ")]),t._v(" "),t.editing?n("div",{staticClass:"content-editor"},[n("div",{attrs:{id:"summernote"},domProps:{innerHTML:t._s(t.product.content)}},[t._v(t._s(t.product.content))])]):t._e()],2),t._v(" "),n("div",{staticClass:"col-12 col-lg-4 col-xl-3"},[n("c-purchase-block",{staticClass:"margin-bottom-15",attrs:{isReleased:!0,price:t.product.price,tags:["New"],onClickPurchase:t.showPurchaseModal}}),t._v(" "),n("c-rating-block",{staticClass:"margin-bottom-20",attrs:{items:t.product.rating,parent_url:"/#/product/"+t.product.id}}),t._v(" "),n("c-frequently-traded-assets",{staticClass:"margin-bottom-20",attrs:{items:t.product.frequently_traded_assets,assetsUrl:"/#/product/"+t.product.id+"/assets"}}),t._v(" "),n("c-community-spotlight",{staticClass:"margin-bottom-20",attrs:{discussions:t.product.community.discussions,communityUrl:"/#/product/"+t.product.id+"/community"}}),t._v(" "),n("c-system-requirements",{staticClass:"margin-bottom-20",attrs:{requirements:t.product.system_requirements}}),t._v(" "),n("c-language-support",{attrs:{languages:t.product.language_support}})],1),t._v(" "),n("div",{staticClass:"col-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("c-heading-bar",{attrs:{name:"Reviews",showArrows:!0,showBackground:!1}})],1),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("h3",{staticClass:"margin-vertical-20"},[t._v("Most helpful")]),t._v(" "),t._l(t.reviews.helpful,function(t,e){return n("c-review",{key:e,attrs:{review:t}})})],2),t._v(" "),n("div",{staticClass:"col-md-6 col-12"},[n("h3",{staticClass:"margin-vertical-20"},[t._v("Most recent")]),t._v(" "),t._l(t.reviews.recent,function(t,e){return n("c-review",{key:e,attrs:{review:t}})})],2)])])])},[],!1,null,null,null);e.default=s.exports},219:function(t,e){},741:function(t,e,n){"use strict";var i=n(219);n.n(i).a}}]);