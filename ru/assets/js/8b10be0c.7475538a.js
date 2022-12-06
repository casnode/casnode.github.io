"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",description:"Casnode main packages",keywords:["main"],authors:["kininaru"]},i=void 0,s={unversionedId:"main-package",id:"main-package",title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",description:"Casnode main packages",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/ru/docs/main-package",draft:!1,editUrl:"https://crowdin.com/project/casnode-website/ru",tags:[],version:"current",frontMatter:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",description:"Casnode main packages",keywords:["main"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",permalink:"/ru/docs/architecture-overview"},next:{title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u044b",permalink:"/ru/docs/routers"}},c={},p=[{value:"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0412 \u0431\u0435\u043a\u0435\u043d\u0434\u0435 Casnode \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432. The main function and the Beego framework call these packages when the program starts."),(0,a.kt)("h2",{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f"},"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f"),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434 \u0432 Casnode. \u041c\u044b \u0434\u0435\u043b\u0430\u0435\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0448\u0430\u0433\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u0430\u043a\u0435\u0442\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"),": \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, http \u043a\u043b\u0438\u0435\u043d\u0442, OSS \u0430\u0434\u0430\u043f\u0442\u0435\u0440, Segmenter \u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u0443\u043c\u0430 (\u0432\u0435\u0440\u0441\u0438\u044f \u0444\u043e\u0440\u0443\u043c\u0430, \u043e\u043d\u043b\u0430\u0439\u043d\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440, Google Groups Crawlers)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438:")," \u0424\u0438\u043b\u044c\u0442\u0440 API, \u0444\u0438\u043b\u044c\u0442\u0440 \u0431\u043e\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u0435\u0441\u0441\u0438\u0438:")," Casnode \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Beego \u0441\u0435\u0441\u0441\u0438\u044e \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435. \u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u044d\u0442\u0438 \u0441\u0442\u0440\u043e\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0430\u043d\u0441 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0444\u0430\u0439\u043b\u0430:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.Session.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,a.kt)("p",null,"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a ",(0,a.kt)("a",{parentName:"p",href:"https://beego.me/docs/mvc/controller/session.md"},"Beego session")," , \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0432 Beego."))}u.isMDXComponent=!0}}]);