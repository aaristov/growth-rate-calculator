(function(e){function n(n){for(var r,a,u=n[0],p=n[1],l=n[2],s=0,d=[];s<u.length;s++)a=u[s],o[a]&&d.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);c&&c(n);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var p=t[u];0!==o[p]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var c=p;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},3953:function(e,n,t){"use strict";var r=t("d3c0"),o=t.n(r);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{width:"50%",alt:"Cartoon logo",src:t("c742")}}),r("Form")],1)},i=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("span",[e._v(" OD1 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.OD1,expression:"OD1"}],attrs:{type:"number",min:"0",placeholder:"Start mass"},domProps:{value:e.OD1},on:{input:function(n){n.target.composing||(e.OD1=n.target.value)}}}),t("span",[e._v(" OD2 ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.OD2,expression:"OD2"}],attrs:{type:"number",min:"0",placeholder:"End mass"},domProps:{value:e.OD2},on:{input:function(n){n.target.composing||(e.OD2=n.target.value)}}}),t("span",[e._v(" period ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.period,expression:"period"}],attrs:{type:"number",min:"0",placeholder:"hours/minutes"},domProps:{value:e.period},on:{input:function(n){n.target.composing||(e.period=n.target.value)}}}),t("br"),t("p",[e._v("Doubling time: "+e._s(e.doublingTime))])])},u=[],p={name:"Form",props:{},data:function(){return{OD1:"",OD2:"",period:""}},computed:{doublingTime:function(){var e=Math.log(this.OD2/this.OD1)/this.period,n=Math.log(2)/e;return n.toPrecision(2)}}},l=p,c=(t("3953"),t("2877")),s=Object(c["a"])(l,a,u,!1,null,null,null),d=s.exports,f={name:"app",components:{Form:d}},m=f,v=(t("034f"),Object(c["a"])(m,o,i,!1,null,null,null)),g=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,n,t){},c742:function(e,n,t){e.exports=t.p+"img/dividing-amoeba.e951eb7c.jpg"},d3c0:function(e,n,t){}});
//# sourceMappingURL=app.5a2437d9.js.map