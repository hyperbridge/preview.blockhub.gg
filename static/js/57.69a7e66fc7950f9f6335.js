(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1676:function(e,t,r){"use strict";r.r(t);var a=r(542),n=r(2),i=r.n(n),s=r(614),u=r(61),c=r(50),o=s.map(function(e,t){return i()({},e,{asset:u.find(function(t){return t.id==e.asset}),user:c.find(function(t){return t.id==e.user})})}),l=r(541),f={components:{"c-user":function(e){return r.e(214).then(function(){var t=[r(1464)];e.apply(null,t)}.bind(this)).catch(r.oe)}},data:function(){return{links:["Marketplace","Marketplace Trade Manager","Marketplace Prospectors","Marketplace Search","Marketplace Assets"]}},filters:{cut:function(e){return e.replace("Marketplace ","")}},mounted:function(){this.$store.dispatch("loadData",["assets/offers",a.a]),this.$store.dispatch("loadData",["assets/prospectors",o]),this.$store.dispatch("loadData",["assets/transactions",l.a])},computed:{assets:function(){return this.$store.getters["assets/assets"]},profile:function(){return this.$store.state.application.activeProfile}},created:function(){this.$store.commit("application/activateModal","coming-soon")}},p=(r(892),r(0)),d=Object(p.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("c-layout",[r("main",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h1",[e._v("Marketplace")]),e._v(" "),r("transition",{attrs:{name:"slider"}},[r("h2",{key:e.$route.name},[e._v("\n                        "+e._s(e._f("cut")(e.$route.name))+"\n                    ")])]),e._v(" "),r("p",{staticClass:"marketplace__profile-info"},[e._v("You are connected to marketplace as:")]),e._v(" "),r("div",{staticClass:"marketplace-profile"},[r("div",{staticClass:"marketplace-profile"},[r("c-img",{staticClass:"marketplace-profile__image",attrs:{src:e.profile.img}}),e._v(" "),r("div",[r("h3",{staticClass:"marketplace-profile__name"},[e._v("\n                                "+e._s(e.profile.name)+"\n                            ")]),e._v(" "),r("input",{staticClass:"marketplace-profile__wallet",attrs:{type:"text",readonly:""},domProps:{value:e.profile.wallet}})])],1)]),e._v(" "),r("nav",[r("ul",{staticClass:"marketplace-menu reset-list"},e._l(e.links,function(t,a){return r("li",{key:a},[r("router-link",{staticClass:"marketplace-menu__link",attrs:{to:{name:t}}},[e._v(e._s(e._f("cut")(t)))])],1)}))]),e._v(" "),r("section",[r("transition",{attrs:{name:"page",mode:"out-in"}},[r("router-view",{attrs:{profileId:e.profile.id}})],1)],1)],1)])])])},[],!1,null,"02fe51ef",null);t.default=d.exports},209:function(e,t){},541:function(e,t,r){"use strict";var a=r(2),n=r.n(a),i=r(481),s=r(50),u=r(480),c=r(61);t.a=i.map(function(e){return n()({},e,{contractorOffer:e.contractorOffer.map(function(e){return c.find(function(t){return t.id==e})}),yourOffer:e.yourOffer.map(function(e){return c.find(function(t){return t.id==e})}),contractor:s.find(function(t){return t.id===e.contractor}),you:s.find(function(t){return t.id===e.you}),messages:e.messages.map(function(e){return u.find(function(t){return t.id==e})}).map(function(e){return n()({},e,{author:s.find(function(t){return t.id==e.author})})})})})},542:function(e,t,r){"use strict";var a=r(2),n=r.n(a),i=r(577),s=r(576),u=r(50),c=r(61),o=s.map(function(e){return n()({},e,{user:u.find(function(t){return t.id==e.user})})});t.a=i.map(function(e,t){return n()({},e,{asset:c[t],bids:e.bids.map(function(e){return o.find(function(t){return t.id==e})}),seller:u.find(function(t){return t.id==e.seller})})})},576:function(e){e.exports=[{id:1,value:12.9,user:2,createdAt:""},{id:2,value:13.9,user:3,createdAt:""},{id:3,value:14.1,user:1,createdAt:""},{id:4,value:17.9,user:5,createdAt:""},{id:5,value:21,user:2,createdAt:""},{id:6,value:23.4,user:3,createdAt:""},{id:7,value:37.2,user:2,createdAt:""}]},577:function(e){e.exports=[{id:1,asset:1,bids:[1,2],buyout:42,marketValue:45,seller:4,expiresIn:""},{id:2,asset:2,bids:[2,3],buyout:42,marketValue:45,seller:4,expiresIn:""},{id:3,asset:3,bids:[4,5,6,7],buyout:42,marketValue:45,seller:4,expiresIn:""}]},614:function(e){e.exports=[{id:1,asset:4,user:1,priceMin:31,priceMax:59,expDate:"2018-12-15T14:29:47+02:00"},{id:2,asset:8,user:1,priceMin:1,priceMax:41,expDate:"2018-12-15T14:29:47+02:00"},{id:3,asset:2,user:2,priceMin:21,priceMax:182,expDate:"2018-12-15T14:29:47+02:00"},{id:4,asset:10,user:3,priceMin:51,priceMax:154,expDate:"2018-12-15T14:29:47+02:00"}]},892:function(e,t,r){"use strict";var a=r(209);r.n(a).a}}]);