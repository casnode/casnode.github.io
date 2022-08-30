"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={title:"\xdcbersicht",description:"Casnode's architecture",keywords:["architecture"]},o=void 0,c={unversionedId:"architecture-overview",id:"architecture-overview",title:"\xdcbersicht",description:"Casnode's architecture",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/de/docs/architecture-overview",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/de",tags:[],version:"current",frontMatter:{title:"\xdcbersicht",description:"Casnode's architecture",keywords:["architecture"]},sidebar:"tutorialSidebar",previous:{title:"API-\xdcbersicht",permalink:"/de/docs/api-overview"},next:{title:"Hauptpaket",permalink:"/de/docs/main-package"}},l={},u=[{value:"Architektur",id:"architektur",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode ist ein Open-Source-Projekt. Eine aktive Gemeinschaft ist ihre Vitalit\xe4t."),(0,a.kt)("p",null,"Dieses Kapitel ist f\xfcr Entwickler, die zu Casnode beitragen wollen. Hier erfahren Sie die Architektur von Casnode und wie es funktioniert."),(0,a.kt)("h2",{id:"architektur"},"Architektur"),(0,a.kt)("p",null,"Casnode hat 2 Teile: das Frontend und das Backend."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:null},"Werkzeuge"),(0,a.kt)("th",{parentName:"tr",align:null},"Quellcode"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,a.kt)("td",{parentName:"tr",align:null},"Web-Frontend UI f\xfcr Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript + Reagieren + Ant-Design"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/tree/master/web"},"https://github.com/casbin/casnode/tree/master/web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backend"),(0,a.kt)("td",{parentName:"tr",align:null},"RESTful API Backend f\xfcr Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL + Xorm"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode"},"https://github.com/casbin/casnode"))))),(0,a.kt)("p",null,"Wie bereits erw\xe4hnt, wird das Frontend von Casnode in der Produktumgebung gebaut und von der Backend bedient. In Entwicklungsumgebungen wird das Frontend von Nodejs bedient."))}d.isMDXComponent=!0}}]);