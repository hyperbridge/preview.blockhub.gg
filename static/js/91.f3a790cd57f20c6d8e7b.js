(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{197:function(t,e){},624:function(t,e,o){"use strict";var s=o(197);o.n(s).a},893:function(t,e,o){"use strict";o.r(e);var s=o(22),n=o.n(s),i=o(4),a=o.n(i),r=o(8),c=function(){var t=this.$store.state.marketplace.frontpage_product;if(t&&t.images){var e=window.document.getElementById("header-bg"),o=Math.floor(Math.random()*t.images.preview.length);e.style["background-image"]="url("+t.images.preview[o]+")",e.style["background-size"]="cover"}},l={components:{"c-layout":function(t){return Promise.resolve().then(function(){var e=[o(890)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-infinite-content":function(t){return o.e(116).then(function(){var e=[o(776)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-banner":function(t){return o.e(144).then(function(){var e=[o(746)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-download-block":function(t){return o.e(122).then(function(){var e=[o(797)];t.apply(null,e)}.bind(this)).catch(o.oe)},"c-welcome-box":function(t){return o.e(176).then(function(){var e=[o(795)];t.apply(null,e)}.bind(this)).catch(o.oe)}},computed:a()({},Object(r.c)({assets:"marketplace/assetsArray"}),{list:function(){var t=this,e=[];this.$store.state.marketplace.frontpage_product&&this.$store.state.marketplace.frontpage_product.id&&e.push({type:"frontpage_product",data:this.$store.state.marketplace.frontpage_product}),e.push({type:"featured_product_gallery",data:{title:"Featured",ref:"featured_product_gallery_sl",swiper:this.$refs.featured_product_gallery_sl&&this.$refs.featured_product_gallery_sl.swiper,products:this.$store.state.marketplace.featured_products}}),e.push({type:"collections_list",data:{collections_list:this.$store.state.marketplace.collections,ref:"collections_sl",swiper:this.$refs.collections_sl&&this.$refs.collections_sl.swiper,options:{slidesPerView:3,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0}}}}),e.push({type:"product_slider",data:{title:"New Releases",slidesPerView:3,products:this.$store.state.marketplace.new_products}}),e.push({type:"banners",data:{}}),e.push({type:"games_explorer",data:{}}),e.push({type:"product_slider",data:{title:"Summer Sale",slidesPerView:3,products:this.$store.state.marketplace.sale_products}}),e.push({type:"asset_grid",data:{assets:this.assets}}),e.push({type:"curator_reviews",data:{title:"From our curators",ref:"curator_reviews_sl",swiper:this.$refs.curator_reviews_sl&&this.$refs.curator_reviews_sl.swiper,options:{slidesPerView:3,spaceBetween:0},reviews:this.$store.state.marketplace.curator_reviews}});var o=function(t,e){return t.reduce(function(t,o){return o[e]?((t[o[e]]=t[o[e]]||[]).push(o),t):t},{})||null};return e.push({type:"product_news",data:{headings:n()(o(this.$store.state.marketplace.posts,"target_id")).map(function(e){if("product"===e[0].target_type){var o=t.$store.state.marketplace.products[e[0].target_id];return{image:o.images.medium_tile,title:o.name,developer:o.developer}}}),lists:n()(o(this.$store.state.marketplace.posts,"target_id"))}}),e.push({type:"trending_projects_row",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.trending_projects}}),e.push({type:"game_series",data:{list:this.$store.state.marketplace.game_series,showNumber:3}}),e},mode:function(){return this.$store.state.application.mode},signed_in:function(){return this.$store.state.application.signed_in},simulator_mode:function(){return this.$store.state.application.simulator_mode},desktop_mode:function(){return this.$store.state.application.desktop_mode},developer_mode:function(){return this.$store.state.application.developer_mode}}),methods:{toggleDesktopMode:function(){this.$store.state.application.desktop_mode=!this.$store.state.application.desktop_mode},toggleSignedIn:function(){this.$store.state.application.signed_in=!this.$store.state.application.signed_in},toggleDeveloperMode:function(){this.$store.state.application.developer_mode=!this.$store.state.application.developer_mode},toggleSimulator:function(){this.$store.commit("application/setSimulatorMode",!this.$store.state.application.simulator_mode)},importSeedData:function(){window.BlockHub.importSeedData()},resetSeedData:function(){window.BlockHub.resetSeedData()},saveSettings:function(){window.BlockHub.saveDatabase()},resetSettings:function(){window.resetSettings()},sendDesktopMessage:function(){if(!window.isElectron)return alert("Not on desktop");window.desktopBridge.send("ping",this.$refs.desktopMessage.value),window.desktopBridge.on("pong",function(t,e){return console.log("Message from desktop: ",e)})}},mounted:function(){c.call(this)},created:function(){c.call(this)},beforeDestroy:function(){window.document.getElementById("header-bg").style["background-image"]="url(/static/img/backgrounds/1.jpg)"}},p=(o(624),o(0)),d=Object(p.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("c-layout",{attrs:{navigationKey:"store"}},[o("div",{staticClass:"content",attrs:{id:"content"}},[o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 mb-4"},[o("c-banner",{attrs:{imgSrc:"/static/img/banners/banner-3.png",link:"/#/token"}},[o("div",{staticClass:"d-flex justify-content-between align-items-center"},[o("div",[o("h3",{staticClass:"text-yellow"},[t._v("Launch Sale")]),t._v(" "),o("p",[t._v("BlockHub will begin selling the HBX token on November 10, 2018")])]),t._v(" "),o("div",{staticClass:"banner-action"},[o("c-button",{attrs:{tag:"div",tatus:"info",icon_hide:"",size:"lg",href:"/#/token"}},[t._v("JOIN NOW")])],1)])])],1)]),t._v(" "),o("div",{staticClass:"row"},[t.desktop_mode?t._e():o("div",{staticClass:"col-12 mb-4"},[o("c-welcome-box")],1),t._v(" "),["preview","staging","local"].includes(t.mode)?o("div",{staticClass:"col-12 mb-4"},[o("div",{staticClass:"card invert"},[o("div",{staticClass:"card-body"},[o("h4",[t._v("Play around with the future of BlockHub:")]),t._v(" "),o("div",[o("c-button",{on:{click:function(e){t.toggleSimulator()}}},[t._v("Simulator is "+t._s(t.simulator_mode?"ON":"OFF"))]),t._v(" "),o("c-button",{on:{click:function(e){t.toggleDesktopMode()}}},[t._v("Desktop Mode is "+t._s(t.desktop_mode?"ON":"OFF"))]),t._v(" "),o("c-button",{on:{click:function(e){t.toggleSignedIn()}}},[t._v("Signed "+t._s(t.signed_in?"IN":"OUT"))]),t._v(" "),o("c-button",{on:{click:function(e){t.toggleDeveloperMode()}}},[t._v("Developer Mode is "+t._s(t.developer_mode?"ON":"OFF"))]),t._v(" "),o("br"),o("br")],1),t._v(" "),o("div",[o("c-button",{on:{click:function(e){t.importSeedData()}}},[t._v("Import Seed Data")]),t._v(" "),o("c-button",{on:{click:function(e){t.resetSeedData()}}},[t._v("Reset Seed Data")]),t._v(" "),o("br"),o("br")],1),t._v(" "),o("div",[o("c-button",{on:{click:function(e){t.$store.state.application.connection.auto=!t.$store.state.application.connection.auto}}},[t._v("Auto Connect is "+t._s(t.$store.state.application.connection.auto?"ON":"OFF"))]),t._v(" "),o("c-button",{on:{click:function(e){t.$store.state.application.connection.internet=!t.$store.state.application.connection.internet}}},[t._v("Internet is "+t._s(t.$store.state.application.connection.internet?"CONNECTED":"DISCONNECTED"))]),t._v(" "),o("c-button",{on:{click:function(e){t.$store.state.application.connection.datasource=!t.$store.state.application.connection.datasource}}},[t._v("Datasource is "+t._s(t.$store.state.application.connection.datasource?"CONNECTED":"DISCONNECTED"))]),t._v(" "),t.desktop_mode?o("c-button",{on:{click:function(e){t.$store.state.application.connection.operator=!t.$store.state.application.connection.operator}}},[t._v("Operator is "+t._s(t.$store.state.application.connection.operator?"CONNECTED":"DISCONNECTED"))]):t._e(),t._v(" "),t.desktop_mode?o("c-button",{on:{click:function(e){t.$store.state.application.connection.ethereum=!t.$store.state.application.connection.ethereum}}},[t._v("Ethereum is "+t._s(t.$store.state.application.connection.ethereum?"CONNECTED":"DISCONNECTED"))]):t._e(),t._v(" "),o("br"),o("br")],1),t._v(" "),o("div",[o("c-button",{on:{click:function(e){t.saveSettings()}}},[t._v("Save Settings")]),t._v(" "),o("c-button",{on:{click:function(e){t.resetSettings()}}},[t._v("Reset Settings")]),t._v(" "),o("br"),o("br")],1),t._v(" "),t.desktop_mode?o("div",[o("input",{ref:"desktopMessage",attrs:{type:"text"}}),t._v(" "),o("c-button",{on:{click:function(e){t.sendDesktopMessage()}}},[t._v("Send Message To Desktop")])],1):t._e(),t._v(" "),t.developer_mode?o("div",[o("h4",[t._v("Darklaunch Manager")]),t._v(" "),o("select",{staticClass:"form-control",attrs:{id:"darklaunch-editor",multiple:"multiple"}},t._l(t.$store.state.application.darklaunch_flags,function(e,s){return o("option",{key:s,domProps:{selected:t.$store.state.application.account.darklaunch_flags.map(function(t){return t.enabled?t.code:null}).includes(e.code)}},[t._v("\n                                        "+t._s(e.code)+" - "+t._s(e.description)+"\n                                    ")])}))]):t._e()])])]):t._e()]),t._v(" "),o("c-infinite-content",{attrs:{list:t.list}})],1)])])},[],!1,null,null,null);e.default=d.exports}}]);