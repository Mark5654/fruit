(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e015bd90"],{"0a35":function(t,e,s){"use strict";var a=s("0cee"),i=s.n(a);i.a},"0cee":function(t,e,s){},6294:function(t,e,s){t.exports=s.p+"img/apple.e13b0ffa.png"},"6e20":function(t,e,s){t.exports=s.p+"img/草莓.0303d4f0.png"},a713:function(t,e,s){t.exports=s.p+"img/chelizi.673c0451.png"},b3d7:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("nav-bar",[t._t("center")],2),a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("router-link",{attrs:{tag:"div",to:"/items/5e170901a1aec8366c346525"}},[a("img",{staticClass:"w-100",attrs:{src:s("6e20"),alt:""}})])],1),a("swiper-slide",[a("router-link",{attrs:{tag:"div",to:"/items/5e2ff234e312583b34a3a8f7"}},[a("img",{staticClass:"w-100",attrs:{src:s("a713"),alt:""}})])],1),a("swiper-slide",[a("router-link",{attrs:{tag:"div",to:"/items/5e312aa52d94ee3be0bf4f80"}},[a("img",{staticClass:"w-100",attrs:{src:s("6294"),alt:""}})])],1),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("f-list-card",{attrs:{icon:"barrage_fill",title:"文章资讯",categories:t.newsCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"py-2 fs-lg",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info ml-2"},[t._v("["+t._s(e.categoryName)+"}]")]),a("span",[t._v("|")]),a("span",{staticClass:"ml-2"},[t._v(t._s(e.title))])])}))}}])}),a("f-card",{attrs:{icon:"barrage_fill",title:"精选产品"}},t._l(t.items,(function(e,s){return a("router-link",{key:s,staticClass:"flex-1 item ",attrs:{tag:"div",to:"/items/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.icon}}),a("h1",{staticClass:"fs-lg text-center pt-3"},[t._v(t._s(e.name))])])})),1)],1)},i=[],n=(s("96cf"),s("1da1")),r={data:function(){return{swiperOption:{pagination:{el:".pagination-home"},autoplay:{delay:3e3,disableOnInteraction:!1}},newsCats:[],items:[]}},name:"home",methods:{fetchNewsCats:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("news/List");case 2:e=t.sent,this.newsCats=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchNewsItems:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("items/List");case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},created:function(){this.fetchNewsCats(),this.fetchNewsItems()}},c=r,o=(s("0a35"),s("2877")),l=Object(o["a"])(c,a,i,!1,null,"0fc42f27",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e015bd90.a77c6b81.js.map