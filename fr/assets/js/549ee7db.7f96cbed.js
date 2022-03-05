"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[668],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Aper\xe7u"},l=void 0,u={unversionedId:"architecture-overview",id:"architecture-overview",isDocsHomePage:!1,title:"Aper\xe7u",description:"Casnode est un projet open source. Une communaut\xe9 active est sa vitalit\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/fr/docs/architecture-overview",editUrl:"https://github.com/casnode/casnode-website/tree/master/docs/architecture-overview.md",tags:[],version:"current",frontMatter:{title:"Aper\xe7u"},sidebar:"tutorialSidebar",previous:{title:"Aper\xe7u de l'API",permalink:"/fr/docs/api-overview"},next:{title:"Paquet principal",permalink:"/fr/docs/main-package"}},p=[{value:"Architecture",id:"architecture",children:[],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Casnode est un projet open source. Une communaut\xe9 active est sa vitalit\xe9."),(0,o.kt)("p",null,"Ce chapitre est destin\xe9 aux d\xe9veloppeurs qui veulent contribuer \xe0 Casnode. Ici, vous apprendrez l'architecture de Casnode, et comment cela fonctionne."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Casnode a 2 parties : le frontend et le backend."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Nom"),(0,o.kt)("th",{parentName:"tr",align:null},"Libell\xe9"),(0,o.kt)("th",{parentName:"tr",align:null},"Outils"),(0,o.kt)("th",{parentName:"tr",align:null},"Code source"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Frontend"),(0,o.kt)("td",{parentName:"tr",align:null},"Interface web pour Casnode"),(0,o.kt)("td",{parentName:"tr",align:null},"JavaScript + React + Ant-Design"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode/tree/master/web"},"https://github.com/casbin/casnode/tree/master/web"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Backend"),(0,o.kt)("td",{parentName:"tr",align:null},"Administration de l'API RESTful pour Casnode"),(0,o.kt)("td",{parentName:"tr",align:null},"Golang + Beego + MySQL + Xorm"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/casbin/casnode"},"https://github.com/casbin/casnode"))))),(0,o.kt)("p",null,"Comme nous l'avons mentionn\xe9 pr\xe9c\xe9demment, dans les environnements de produits, le frontend de Casnode est construit et servi par le backend. Dans les environnements de d\xe9veloppement, le frontend est servi par Nodejs."))}d.isMDXComponent=!0}}]);