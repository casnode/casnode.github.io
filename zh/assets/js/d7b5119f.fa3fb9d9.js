"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[5055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u6982\u89c8",description:"Casnode's architecture",keywords:["architecture"],authors:["kininaru"]},i=void 0,c={unversionedId:"architecture-overview",id:"architecture-overview",title:"\u6982\u89c8",description:"Casnode's architecture",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/zh/docs/architecture-overview",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/architecture-overview.md",tags:[],version:"current",frontMatter:{title:"\u6982\u89c8",description:"Casnode's architecture",keywords:["architecture"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/zh/docs/category/architecture"},next:{title:"\u4e3b\u5305",permalink:"/zh/docs/main-package"}},l={},u=[{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u3002 \u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u5c31\u662f\u5b83\u7684\u6d3b\u529b\u3002"),(0,a.kt)("p",null,"\u672c\u7ae0\u9488\u5bf9\u7684\u662f\u60f3\u8981\u4e3aCasnode\u505a\u51fa\u8d21\u732e\u7684\u5f00\u53d1\u4eba\u5458\u3002 \u60a8\u5c06\u5728\u8fd9\u91cc\u5b66\u4e60\u79cd\u5b50\u8282\u70b9\u7684\u7ed3\u6784\u4ee5\u53ca\u5b83\u5982\u4f55\u8fd0\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u7ed3\u6784"},"\u7ed3\u6784"),(0,a.kt)("p",null,"Casnode \u6709\u4e24\u4e2a\u90e8\u5206\uff1a\u524d\u7aef\u548c\u540e\u7aef\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5b9e\u7528\u5c0f\u5de5\u5177"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6e90\u4ee3\u7801"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u524d\u7aef"),(0,a.kt)("td",{parentName:"tr",align:null},"Casnode Web \u524d\u7aef\u754c\u9762"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript + React + Ant-Design"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/tree/master/web"},"https://github.com/casbin/casnode/tree/master/web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u540e\u7aef"),(0,a.kt)("td",{parentName:"tr",align:null},"Casnode RESTful API \u540e\u7aef"),(0,a.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL + Xorm"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode"},"https://github.com/casbin/casnode"))))),(0,a.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u524d\u9762\u63d0\u5230\u7684\uff0c\u5728\u4ea7\u54c1\u73af\u5883\u4e2d\uff0c\u5361\u65af\u8bfa\u8282\u70b9\u7684\u524d\u7aef\u662f\u7531\u540e\u7aef\u6784\u5efa\u548c\u670d\u52a1\u7684\u3002 \u5728\u53d1\u5c55\u73af\u5883\u4e2d\uff0c\u8bfa\u4ee3\u65e5\u4eba\u4e3a\u524d\u7aef\u670d\u52a1\u3002"))}p.isMDXComponent=!0}}]);