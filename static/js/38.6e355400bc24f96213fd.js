(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1395:function(e,t,s){"use strict";s.r(t);var n=s(7),a=s.n(n),r=s(11),c=s.n(r),i={props:["trx"],components:{"c-chat-message":function(e){return s.e(261).then(function(){var t=[s(1308)];e.apply(null,t)}.bind(this)).catch(s.oe)}},data:function(){return{newMessage:"",lastMessageId:null,lastMsg:null}},methods:{sendMessage:function(){var e=this;return c()(a.a.mark(function t(){var s,n,r,c,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.newMessage&&Date.now()/1e3-e.lastMsg<10)){t.next=7;break}s=e.lastMessageId,n=e.trx.messages.find(function(e){return e.id==lastMessageId}),e.$store.dispatch("community/update",{id:s,data:{content:n.content+" "+e.newMessage}}),e.cleanUp(),t.next=14;break;case 7:if(!e.newMessage){t.next=14;break}return r=e.trx,c=r.id,r.messages,i={message:e.newMessage,trxId:c},t.next=12,e.$store.dispatch("assets/createTransactionMessage",i);case 12:e.lastMessageId=t.sent,e.cleanUp();case 14:case"end":return t.stop()}},t,e)}))()},sendMessageV2:function(){var e=this;return c()(a.a.mark(function t(){var s,n,r,c,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.newMessage&&Date.now()/1e3-e.lastMsg<10)){t.next=8;break}s=e.lastMessageId,n=e.trx.messages.find(function(e){return e.id==s}),r={content:n.content+" "+e.newMessage},e.$store.dispatch("updateV2",["community/messages",s,r]),e.cleanUp(),t.next=15;break;case 8:if(!e.newMessage){t.next=15;break}return c=e.trx.id,i={content:e.newMessage,author:1},t.next=13,e.$store.dispatch("createRelation",["assets/trxs/messages",c,i]);case 13:e.lastMessageId=t.sent,e.cleanUp();case 15:case"end":return t.stop()}},t,e)}))()},cleanUp:function(){var e=this;return c()(a.a.mark(function t(){var s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.newMessage="",e.lastMsg=Date.now()/1e3,s=e.$refs.chatList,t.next=5,e.$nextTick();case 5:s.scrollTop=s.scrollHeight;case 6:case"end":return t.stop()}},t,e)}))()}},computed:{trxRaw:function(){return this.$store.state.assets.trxs[this.trx.id]},userId:function(){return this.$store.state.application.account.id},messages:function(){return this.$store.getters["community/messages"]}}},o=(s(704),s(0)),u=Object(o.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",{ref:"chatList",staticClass:"reset-list chat"},e._l(e.trx.messages,function(t,n){return s("c-chat-message",{key:n,attrs:{message:t,userId:e.userId},on:{delete:function(t){e.$store.dispatch("deleteRelation",["assets/trxs/messages",e.trx.id,t])}}})})),e._v(" "),s("div",{staticClass:"chat-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],staticClass:"chat-form__input",attrs:{type:"text"},domProps:{value:e.newMessage},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.sendMessageV2()},input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),e._v(" "),s("button",{staticClass:"chat-form__btn",on:{click:function(t){e.sendMessage()}}},[s("c-icon",{attrs:{name:"paper-plane"}})],1)]),e._v(" "),s("button",{on:{click:function(t){e.$store.dispatch("createRelation",["assets/trxs/messages",e.trx.id,{content:"New message!",author:1}])}}},[e._v("\n        Dispatch root createRelation\n    ")]),e._v(" "),s("button",{on:{click:function(t){e.$store.dispatch("deleteRelation",["assets/trxs/messages",e.trx.id,8])}}},[e._v("\n        Dispatch root deleteRelation\n    ")])])},[],!1,null,"c4924c18",null);t.default=u.exports},140:function(e,t){},704:function(e,t,s){"use strict";var n=s(140);s.n(n).a}}]);