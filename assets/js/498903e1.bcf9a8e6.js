"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Main package",description:"Casnode main packages",keywords:["main"]},i=void 0,s={unversionedId:"main-package",id:"main-package",title:"Main package",description:"Casnode main packages",source:"@site/docs/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/docs/main-package",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/main-package.md",tags:[],version:"current",frontMatter:{title:"Main package",description:"Casnode main packages",keywords:["main"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture-overview"},next:{title:"Routers",permalink:"/docs/routers"}},c={},p=[{value:"main",id:"main",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are several packages in the backend of Casnode. The main function and the Beego framework call these packages when the program starts."),(0,a.kt)("h2",{id:"main"},"main"),(0,a.kt)("p",null,"The main package is the entrance of Casnode. We do some basic setup steps in the main package: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Setup some global variables"),": Database adapter, http Client, OSS adapter, Segmenter and Forum basic info (forum version, online number, Google Groups Crawlers) ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Setup filters:")," API requests filter, search engine bot filter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Session data:")," Casnode uses Beego session to store user info. In the main function, wrote these lines to use a file based session:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.Session.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego session")," if you want to use another session adapter in Beego."))}u.isMDXComponent=!0}}]);