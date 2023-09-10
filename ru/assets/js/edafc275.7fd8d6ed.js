"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[2001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9230:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",description:"Casnode's architecture",keywords:["architecture"],authors:["kininaru"]},i=void 0,c={unversionedId:"architecture-overview",id:"architecture-overview",title:"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",description:"Casnode's architecture",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/ru/docs/architecture-overview",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/architecture-overview.md",tags:[],version:"current",frontMatter:{title:"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",description:"Casnode's architecture",keywords:["architecture"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/ru/docs/category/architecture"},next:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",permalink:"/ru/docs/main-package"}},l={},u=[{value:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode - \u043f\u0440\u043e\u0435\u043a\u0442 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c. \u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e - \u044d\u0442\u043e \u0435\u0433\u043e \u0436\u0438\u0437\u043d\u0435\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c."),(0,a.kt)("p",null,"\u042d\u0442\u0430 \u0433\u043b\u0430\u0432\u0430 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u0432\u043d\u0435\u0441\u0442\u0438 \u0441\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434 \u0432 Casnode. \u0417\u0434\u0435\u0441\u044c \u0432\u044b \u0443\u0437\u043d\u0430\u0435\u0442\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0443 Casnode, \u0438 \u043a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442."),(0,a.kt)("h2",{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"},"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430"),(0,a.kt)("p",null,"Casnode \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 2 \u0447\u0430\u0441\u0442\u0435\u0439: \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u0438 \u0431\u044d\u043a\u044d\u043d\u0434."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u0418\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0435\u0431-\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0434\u043b\u044f Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript + React + Ant-Design"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/tree/master/web"},"https://github.com/casbin/casnode/tree/master/web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u0411\u044d\u043a\u0435\u043d\u0434"),(0,a.kt)("td",{parentName:"tr",align:null},"\u0411\u044d\u043a\u0435\u043d\u0434 ReSTful API \u0434\u043b\u044f Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL + Xorm"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode"},"https://github.com/casbin/casnode"))))),(0,a.kt)("p",null,"\u041a\u0430\u043a \u043c\u044b \u0443\u0436\u0435 \u043e\u0442\u043c\u0435\u0447\u0430\u043b\u0438 \u0440\u0430\u043d\u0435\u0435, \u0432 \u0441\u0440\u0435\u0434\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432, \u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434 Casnode \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d \u0438 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0431\u044d\u043a\u044d\u043d\u0434\u043e\u043c. \u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0440\u0435\u0434 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442 Nodejs."))}p.isMDXComponent=!0}}]);