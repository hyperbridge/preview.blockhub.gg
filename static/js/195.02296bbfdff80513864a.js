(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{275:function(t,e,a){"use strict";a.r(e);var u={name:"contribute-form",props:{active:{type:Boolean,default:!1},value:"",defaultValue:Number},data:function(){return{activeForm:!1,error:!1,mutableValue:this.value}},created:function(){this.activeForm=this.active,this.defaultValue&&(this.mutableValue=this.defaultValue)},methods:{changeData:function(){this.$emit("input",this.$refs.input.value),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}},watch:{mutableValue:function(t){this.$emit("input",t),Number(this.$refs.input.value)<Number(this.defaultValue)?this.error=!0:this.error=!1}}},i=(a(470),a(0)),n=Object(i.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contribute-form",on:{mouseover:function(e){t.activeForm=!0},mouseleave:function(e){t.activeForm=!1}}},[a("div",{staticClass:"input-group mb-4",class:[{active:t.activeForm},{"has-error":t.error}]},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mutableValue,expression:"mutableValue"}],ref:"input",staticClass:"form-control",attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.mutableValue},on:{input:function(e){e.target.composing||(t.mutableValue=e.target.value)}}})]),t._v(" "),a("c-button",{staticClass:"justify-content-center",attrs:{status:"success",icon_hide:"",size:"xl"},on:{click:function(e){t.$emit("click")}}},[t._v("\n        Continue\n    ")])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("\n                $\n            ")])])}],!1,null,"87191008",null);e.default=n.exports},470:function(t,e,a){"use strict";var u=a(50);a.n(u).a},50:function(t,e){}}]);