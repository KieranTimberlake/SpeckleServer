(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"headline font-weight-light",attrs:{xs12:"","pt-5":"","pb-0":""}},[t._v("\n        Hello 👋 "),a("br"),t._v("Your name is "),a("editable-span",{attrs:{text:t.user.name,hint:"edit your name"},on:{update:t.updateName}}),t._v(" "),a("editable-span",{attrs:{text:t.user.surname,hint:"edit your surname"},on:{"update:text":function(e){return t.$set(t.user,"surname",e)},update:t.updateSurname}}),t._v(" and you work at "),a("editable-span",{attrs:{text:t.user.company,hint:"edit your company"},on:{update:t.updateCompany}}),t._v(".\n      ")],1),a("v-flex",{attrs:{xs12:"","my-5":""}},[a("v-layout",{attrs:{row:"",wrap:"","align-top":""}},[a("v-flex",{attrs:{xs12:"",md2:""}},[a("v-btn",{staticClass:"ma-0",nativeOn:{click:function(e){t.showToken=!t.showToken}}},[t._v(t._s(t.showToken?"Hide":"Show")+" Token")]),a("br"),t._v(" \n          ")],1),t.showToken?a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\n              Take care, this token is unique to you. Do not share it with others as it grants full access on your behalf to the api.\n            ")]),a("code",{staticClass:"pa-3",staticStyle:{"user-select":"all","max-width":"100%","overflow-wrap":"break-word"}},[t._v(t._s(t.user.apitoken))])],1):t._e()],1)],1)],1)],1)},n=[],o={name:"ProfileView",computed:{user:function(){return this.$store.state.user}},data:function(){return{showToken:!1}},methods:{updateName:function(t){this.$store.dispatch("updateLoggedInUser",{_id:this.user._id,name:t.text})},updateSurname:function(t){this.$store.dispatch("updateLoggedInUser",{_id:this.user._id,surname:t.text})},updateCompany:function(t){this.$store.dispatch("updateLoggedInUser",{_id:this.user._id,company:t.text})},logout:function(){this.$store.dispatch("logout"),this.$router.push("/login")}},mounted:function(){}},r=o,i=a("2877"),u=Object(i["a"])(r,s,n,!1,null,"f821a0a4",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d217357.ca23d057.js.map