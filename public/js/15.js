(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{PHEE:function(e,n,s){"use strict";s.r(n);var t=s("o0o1"),r=s.n(t);function a(e,n,s,t,r,a,i){try{var c=e[a](i),u=c.value}catch(e){return void s(e)}c.done?n(u):Promise.resolve(u).then(t,r)}function i(e){return function(){var n=this,s=arguments;return new Promise((function(t,r){var i=e.apply(n,s);function c(e){a(i,t,r,c,u,"next",e)}function u(e){a(i,t,r,c,u,"throw",e)}c(void 0)}))}}var c={name:"Username",data:function(){return{searchQuery:this.$page.props.user.username,isTyping:!1,isLoading:!1,keyUp:!1,saving:!1,checked:!1}},watch:{searchQuery:_.debounce((function(){this.isTyping=!1}),700),isTyping:function(e){!e&&this.keyUp&&this.searchQuery.length>0&&this.search(this.searchQuery)}},methods:{search:function(e){var n=this;return i(r.a.mark((function s(){return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return n.isLoading=!0,s.next=3,n.$inertia.post(route("page-settings.info.check-username"),{username:e});case 3:n.keyUp=!1,n.isLoading=!1,n.checked=!0;case 6:case"end":return s.stop()}}),s)})))()},save:function(){var e=this;return i(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.saving=!0,n.next=3,e.$inertia.post(route("page-settings.info.username"),{username:e.searchQuery},{preserveScroll:!0});case 3:e.saving=!1;case 4:case"end":return n.stop()}}),n)})))()}}},u=s("KHd+"),o=Object(u.a)(c,(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("v-card",[s("v-title",{staticClass:"mb-5",attrs:{small:""}},[e._v("نام کاربری")]),e._v(" "),s("form",[s("v-input",{staticClass:"mb-2",attrs:{"input-class":"ltr",name:"username",label:"این فیلد همان آدرس صفحه شماست که به صورت ibio.link/yourname خواهد بود"},on:{keyup:function(n){e.keyUp=!0},input:function(n){e.isTyping=!0}},model:{value:e.searchQuery,callback:function(n){e.searchQuery=n},expression:"searchQuery"}}),e._v(" "),s("div",{staticClass:"text-sm mb-5"},[e.isLoading?s("span",{staticClass:"text-gray-500"},[e._v("درحال بررسی...")]):e.$page.props.errors.username?s("span",{staticClass:"text-red-500"},[e._v(e._s(e.$page.props.errors.username.username))]):e.checked?s("span",{staticClass:"text-green-500"},[e._v("تبریک! نام کاربری مورد نظر موجوده")]):e._e()]),e._v(" "),s("v-button",{attrs:{loading:e.saving,disabled:e.saving||e.isLoading},on:{click:e.save}},[e._v("ذخیره")])],1)],1)}),[],!1,null,null,null);n.default=o.exports}}]);