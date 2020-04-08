(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/birdcoin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0c10":function(t,e,n){"use strict";var r=n("52bf"),a=n.n(r);a.a},"27f3":function(t,e,n){t.exports=n.p+"img/logo.a791b514.svg"},5148:function(t,e,n){"use strict";var r=n("86a8"),a=n.n(r);a.a},"52bf":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("TheSteps")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"flex flex--column",attrs:{id:"the-steps"}},[n("div",{staticClass:"wrap--steps flex"},[n("AppStep",{attrs:{color:"red",number:"1",title:"Asset Token Creation",text:"Easily create, customize andtransfer your own asset tokens"}}),n("AppStep",{attrs:{color:"yellow",number:"2",title:"Ownership Token Controls",text:"Message, pay dividends and poll your token holders"}}),n("AppStep",{attrs:{color:"blue",number:"3",title:"Assign IPFS Metadata",text:"Attach anything to your asset token"}})],1)])},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-step flex"},[n("div",{staticClass:"step_box flex flex--cc",class:t.color},[t._v(t._s(t.number))]),n("div",{staticClass:"step_text"},[n("h2",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.text))])])])},c=[],u={name:"AppStep",props:{number:String,title:String,color:String,text:String}},f=u,p=(n("5148"),n("2877")),d=Object(p["a"])(f,l,c,!1,null,"6af44f4e",null),v=d.exports,b={name:"TheSteps",components:{AppStep:v}},h=b,_=(n("96cd"),Object(p["a"])(h,o,i,!1,null,"308caea2",null)),m=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex flex--column flex--cc",attrs:{id:"the-header"}},[n("TheNav"),n("TheMainTitle"),n("div",{staticClass:"wrap--buttons flex"},[n("AppButton",{staticClass:"btn--full",attrs:{cta:"Download"}}),n("AppButton",{staticClass:"btn--void",attrs:{cta:"Start Tutorial"}})],1),n("div",{staticClass:"bg bg--grid"}),n("div",{staticClass:"bg bg--circles"})],1)},g=[],y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"flex",attrs:{id:"the-nav"}},[r("ul",{staticClass:"flex"},[r("li",[t._v("Home")]),r("li",[t._v("Assets")])]),r("div",{staticClass:"wrap--logo flex"},[r("img",{staticClass:"logo",attrs:{src:n("27f3"),alt:"logo"}}),r("h2",[t._v("Birdcoin")])]),r("ul",{staticClass:"flex"},[r("li",[t._v("About")]),r("li",[t._v("Contact")])])])}],T={name:"TheNav"},S=T,O=(n("8e1b"),Object(p["a"])(S,y,C,!1,null,"76378ff3",null)),w=O.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex--column flex--cc",attrs:{id:"the-main-title"}},[n("h1",[t._v(" Birdcoin "),n("br"),t._v("is a peer-to-peer blockchain. ")]),n("p",[t._v("Handling the efficient creation and transfer of assets from one party to another.")])])}],E={name:"TheMainTitle"},$=E,k=(n("694e"),Object(p["a"])($,j,A,!1,null,"7199238c",null)),M=k.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"app-button"},[t._v(t._s(t.cta))])},B=[],H={name:"AppButton",props:{cta:String}},N=H,J=(n("0c10"),Object(p["a"])(N,P,B,!1,null,"2b523fae",null)),z=J.exports,D={name:"TheHeader",components:{TheNav:w,TheMainTitle:M,AppButton:z}},F=D,I=(n("b22f"),Object(p["a"])(F,x,g,!1,null,"36030c02",null)),q=I.exports,G={name:"App",components:{TheSteps:m,TheHeader:q}},K=G,L=(n("034f"),Object(p["a"])(K,a,s,!1,null,null,null)),Q=L.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Q)}}).$mount("#app")},"694e":function(t,e,n){"use strict";var r=n("96d8"),a=n.n(r);a.a},"85ec":function(t,e,n){},"86a8":function(t,e,n){},"8e1b":function(t,e,n){"use strict";var r=n("b65e"),a=n.n(r);a.a},"96cd":function(t,e,n){"use strict";var r=n("f647"),a=n.n(r);a.a},"96d8":function(t,e,n){},b22f:function(t,e,n){"use strict";var r=n("c1ab"),a=n.n(r);a.a},b65e:function(t,e,n){},c1ab:function(t,e,n){},f647:function(t,e,n){}});
//# sourceMappingURL=app.7bf92a8e.js.map