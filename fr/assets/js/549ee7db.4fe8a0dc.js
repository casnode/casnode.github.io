"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Aper\xe7u",description:"Casnode's architecture",keywords:["architecture"]},i=void 0,c={unversionedId:"architecture-overview",id:"architecture-overview",title:"Aper\xe7u",description:"Casnode's architecture",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/fr/docs/architecture-overview",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/fr",tags:[],version:"current",frontMatter:{title:"Aper\xe7u",description:"Casnode's architecture",keywords:["architecture"]},sidebar:"tutorialSidebar",previous:{title:"Aper\xe7u de l'API",permalink:"/fr/docs/api-overview"},next:{title:"Paquet principal",permalink:"/fr/docs/main-package"}},l={},u=[{value:"Architecture",id:"architecture",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Casnode est un projet open source. Une communaut\xe9 active est sa vitalit\xe9."),(0,a.kt)("p",null,"Ce chapitre est destin\xe9 aux d\xe9veloppeurs qui veulent contribuer \xe0 Casnode. Ici, vous apprendrez l'architecture de Casnode, et comment cela fonctionne."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Casnode a 2 parties : le frontend et le backend."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nom"),(0,a.kt)("th",{parentName:"tr",align:null},"Libell\xe9"),(0,a.kt)("th",{parentName:"tr",align:null},"Outils"),(0,a.kt)("th",{parentName:"tr",align:null},"Code source"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,a.kt)("td",{parentName:"tr",align:null},"Interface web pour Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"JavaScript + React + Ant-Design"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/tree/master/web"},"https://github.com/casbin/casnode/tree/master/web"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backend"),(0,a.kt)("td",{parentName:"tr",align:null},"Administration de l'API RESTful pour Casnode"),(0,a.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL + Xorm"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode"},"https://github.com/casbin/casnode"))))),(0,a.kt)("p",null,"Comme nous l'avons mentionn\xe9 pr\xe9c\xe9demment, dans les environnements de produits, le frontend de Casnode est construit et servi par le backend. Dans les environnements de d\xe9veloppement, le frontend est servi par Nodejs."))}p.isMDXComponent=!0}}]);