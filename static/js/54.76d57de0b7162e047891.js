(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1309:function(e,t,s){"use strict";s.r(t);var o={computed:{list:function(){var e=[];return e.push({type:"trending_projects_row",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.trending_projects||[]}}),e.push({type:"trending_projects_row",data:{title:"Top Game Ideas",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.top_game_ideas||[]}}),e.push({type:"trending_projects_row",data:{title:"Top Content Suggestions",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.top_content_suggestions||[]}}),e.push({type:"trending_projects_row",data:{title:"Top Item Suggestions",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.top_item_suggestions||[]}}),e.push({type:"trending_projects_row",data:{title:"Most Popular Games",options:{slidesPerView:3,spaceBetween:15,breakpoints:{768:{slidesPerView:1,spaceBetween:0}}},projects:this.$store.state.funding.most_popular_games||[]}}),e}}},i=(s(704),s(0)),n=Object(i.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-layout",{attrs:{navigationKey:"funding"}},[s("div",{staticClass:"container-fluid"},[s("c-infinite-content",{attrs:{list:e.list}}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 offset-md-3",staticStyle:{"text-align":"center",width:"100%","margin-top":"30px","margin-bottom":"30px",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[s("h2",[e._v("Crowdfund Your Game")]),e._v(" "),s("p",[e._v("Are you looking to crowdfund that game you've been working hard on? We're here to help.")]),e._v(" "),s("p",[e._v("Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).")]),e._v(" "),s("br"),e._v(" "),e.$store.state.application.desktop_mode?s("p",[s("c-button",{staticClass:"c-btn-lg outline-white",attrs:{href:"/#/project/new"}},[e._v("Get Started")])],1):e._e(),e._v(" "),e.$store.state.application.desktop_mode?e._e():s("p",[s("c-button",{staticClass:"c-btn-lg outline-white",on:{click:function(t){e.$store.commit("application/activateModal","welcome")}}},[e._v("Get Started")])],1)])])],1)])},[],!1,null,"1158b7a5",null);t.default=n.exports},191:function(e,t){},704:function(e,t,s){"use strict";var o=s(191);s.n(o).a}}]);