(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1111:function(t,e,i){"use strict";var n=i(336);i.n(n).a},1293:function(t,e,i){"use strict";i.r(e);var n={name:"content-navigation",inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},setItemsLimit:{type:Number,default:6},setItemsPerPage:{type:Number,default:6},setLimits:Number},components:{"c-pagination":function(t){return i.e(168).then(function(){var e=[i(1295)];t.apply(null,e)}.bind(this)).catch(i.oe)},"c-load-more":function(t){return i.e(19).then(function(){var e=[i(1225)];t.apply(null,e)}.bind(this)).catch(i.oe)}},data:function(){return{activePage:0,limitTo:this.setLimits||this.setItemsLimit,itemsPerPage:this.setLimits||this.setItemsPerPage}},methods:{loadMore:function(){this.limitTo<this.items.length?this.limitTo+=this.setItemsLimit:this.limitTo-=this.setItemsLimit}},computed:{paginationMode:function(){return this.$store.state.application.account.settings.client.pagination},pagination:function(){var t=this.activePage*this.itemsPerPage,e=Math.ceil(this.items.length/this.itemsPerPage);return{start:t,end:t+this.itemsPerPage,pages:e}},visibleItems:function(){return this.paginationMode?this.items.slice(this.pagination.start,this.pagination.end):this.items.slice(0,this.limitTo)},visibleItemsLength:function(){return this.visibleItems.length},itemsLeft:function(){return this.items.length-this.visibleItemsLength}},watch:{visibleItemsLength:function(t){0===t&&this.activePage>0&&(this.activePage=0)}}},s=(i(1111),i(0)),a=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default",null,{items:t.visibleItems}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleItems.length,expression:"visibleItems.length"}],staticClass:"content-navigation-wrapper"},[t.paginationMode?i("c-pagination",t._b({attrs:{activePage:t.activePage+1,pages:t.pagination.pages},on:{pageChange:function(e){t.activePage=e-1}}},"c-pagination",t.$attrs,!1),[t._t("left-content",null,{slot:"left-content"}),t._v(" "),t._t("right-content",null,{slot:"right-content"})],2):i("c-load-more",t._b({on:{click:function(e){t.loadMore()}}},"c-load-more",t.$attrs,!1),[t._v("\n           "+t._s(t.itemsLeft?"Load More +"+t.itemsLeft:"Show Less")+"\n        ")])],1)],2)},[],!1,null,"d149ee5c",null);e.default=a.exports},336:function(t,e){}}]);