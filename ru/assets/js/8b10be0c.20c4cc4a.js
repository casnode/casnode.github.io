"use strict";(self.webpackChunkcasnode_website=self.webpackChunkcasnode_website||[]).push([[590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",description:"Casnode main packages",keywords:["main"],authors:["kininaru"]},i=void 0,s={unversionedId:"main-package",id:"main-package",title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",description:"Casnode main packages",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/main-package.md",sourceDirName:".",slug:"/main-package",permalink:"/ru/docs/main-package",draft:!1,editUrl:"https://github.com/casnode/casnode-website/edit/master/docs/main-package.md",tags:[],version:"current",frontMatter:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u043f\u0430\u043a\u0435\u0442",description:"Casnode main packages",keywords:["main"],authors:["kininaru"]},sidebar:"tutorialSidebar",previous:{title:"\u041e\u0431\u0449\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",permalink:"/ru/docs/architecture-overview"},next:{title:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043e\u0440\u044b",permalink:"/ru/docs/routers"}},c={},p=[{value:"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0412 \u0431\u0435\u043a\u0435\u043d\u0434\u0435 Casnode \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432. The main function and the Beego framework call these packages when the program starts."),(0,a.kt)("h2",{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f"},"\u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f"),(0,a.kt)("p",null,"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u043f\u0430\u043a\u0435\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434 \u0432 Casnode. \u041c\u044b \u0434\u0435\u043b\u0430\u0435\u043c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0448\u0430\u0433\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u0430\u043a\u0435\u0442\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"),": \u0430\u0434\u0430\u043f\u0442\u0435\u0440 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, http \u043a\u043b\u0438\u0435\u043d\u0442, OSS \u0430\u0434\u0430\u043f\u0442\u0435\u0440, Segmenter \u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0444\u043e\u0440\u0443\u043c\u0430 (\u0432\u0435\u0440\u0441\u0438\u044f \u0444\u043e\u0440\u0443\u043c\u0430, \u043e\u043d\u043b\u0430\u0439\u043d\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440, Google Groups Crawlers)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438:")," \u0424\u0438\u043b\u044c\u0442\u0440 API, \u0444\u0438\u043b\u044c\u0442\u0440 \u0431\u043e\u0442\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u0414\u0430\u043d\u043d\u044b\u0435 \u0441\u0435\u0441\u0441\u0438\u0438:")," Casnode \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 Beego \u0441\u0435\u0441\u0441\u0438\u044e \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435. \u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043b \u044d\u0442\u0438 \u0441\u0442\u0440\u043e\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0435\u0430\u043d\u0441 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0444\u0430\u0439\u043b\u0430:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'beego.BConfig.WebConfig.Session.SessionProvider = "file"\nbeego.BConfig.WebConfig.Session.SessionProviderConfig = "./tmp"\nbeego.BConfig.WebConfig.Session.SessionGCMaxLifetime = 3600 * 24 * 365\n')),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://beego.wiki/docs/mvc/controller/session/"},"Beego session")," if you want to use another session adapter in Beego."))}u.isMDXComponent=!0}}]);