(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1309:function(t,e,s){"use strict";s.r(e);var o={computed:{list:function(){var t=[];return t.push({type:"trending_projects_row",data:{title:"Trending Crowdfunds",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.trending_projects||[]}}),t.push({type:"trending_projects_row",data:{title:"Top Game Ideas",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.top_game_ideas||[]}}),t.push({type:"trending_projects_row",data:{title:"Top Content Suggestions",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.top_content_suggestions||[]}}),t.push({type:"trending_projects_row",data:{title:"Top Item Suggestions",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.top_item_suggestions||[]}}),t.push({type:"trending_projects_row",data:{title:"Most Popular Games",options:{slidesPerView:3,spaceBetween:15},projects:this.$store.state.funding.most_popular_games||[]}}),t}}},i=(s(704),s(0)),n=Object(i.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-layout",{attrs:{navigationKey:"funding"}},[s("div",{staticClass:"container-fluid"},[s("c-infinite-content",{attrs:{list:t.list}}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 offset-3",staticStyle:{"text-align":"center",width:"100%","margin-top":"30px","margin-bottom":"30px",padding:"20px",border:"3px dashed rgba(0,0,0,0.1)","border-radius":"7px",background:"rgba(0,0,0,0.2)"}},[s("h2",[t._v("Crowdfund Your Game")]),t._v(" "),s("p",[t._v("Are you looking to crowdfund that game you've been working hard on? We're here to help.")]),t._v(" "),s("p",[t._v("Maybe you just have an awesome idea, or want to inspire your favourite dev studio to continue a series (*cough* half-life).")]),t._v(" "),s("br"),t._v(" "),t.$store.state.application.desktop_mode?s("p",[s("c-button",{staticClass:"c-btn-lg outline-white",attrs:{href:"/#/project/new"}},[t._v("Get Started")])],1):t._e(),t._v(" "),t.$store.state.application.desktop_mode?t._e():s("p",[s("c-button",{staticClass:"c-btn-lg outline-white",on:{click:function(e){t.$store.commit("application/activateModal","welcome")}}},[t._v("Get Started")])],1)])])],1)])},[],!1,null,"929e825e",null);e.default=n.exports},191:function(t,e){},704:function(t,e,s){"use strict";var o=s(191);s.n(o).a}}]);